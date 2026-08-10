import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload = await req.json();

    const {
      type = "contact",
      first_name,
      last_name,
      name,
      email,
      phone,
      service,
      level,
      subject,
      message,
    } = payload;

    if (!email) {
      return new Response(
        JSON.stringify({ error: "L'adresse e-mail est requise." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build email content
    const fullName = first_name && last_name
      ? `${first_name} ${last_name}`
      : name || "Visiteur";

    const title = type === "rejoindre"
      ? "Nouvelle demande d'inscription — Sahelia"
      : subject
      ? `Nouveau message : ${subject} — Sahelia`
      : "Nouveau message de contact — Sahelia";

    const rows: string[] = [];
    rows.push(`<tr><td><strong>Nom</strong></td><td>${escapeHtml(fullName)}</td></tr>`);
    rows.push(`<tr><td><strong>E-mail</strong></td><td>${escapeHtml(email)}</td></tr>`);
    if (phone) rows.push(`<tr><td><strong>Téléphone</strong></td><td>${escapeHtml(phone)}</td></tr>`);
    if (service) rows.push(`<tr><td><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>`);
    if (level) rows.push(`<tr><td><strong>Niveau</strong></td><td>${escapeHtml(level)}</td></tr>`);
    if (subject) rows.push(`<tr><td><strong>Sujet</strong></td><td>${escapeHtml(subject)}</td></tr>`);
    if (message) rows.push(`<tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>`);

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f8f7; padding: 24px;">
        <div style="background: linear-gradient(135deg, #facc15, #84cc16); border-radius: 16px 16px 0 0; padding: 24px; text-align: center;">
          <h1 style="color: #1a1816; margin: 0; font-size: 24px;">Sahelia</h1>
          <p style="color: #1a1816; margin: 4px 0 0; opacity: 0.8;">Centre de formation</p>
        </div>
        <div style="background: white; border-radius: 0 0 16px 16px; padding: 32px; border: 1px solid #e5e5e4;">
          <h2 style="color: #1a1816; margin: 0 0 20px; font-size: 20px;">${escapeHtml(title)}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${rows.join("\n            ")}
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #efeeec;">
            <p style="color: #6b6760; font-size: 13px; margin: 0;">
              Cet e-mail a été envoyé automatiquement depuis le site Sahelia. Vous pouvez répondre directement
              à l'expéditeur à l'adresse <a href="mailto:${escapeHtml(email)}" style="color: #eab308;">${escapeHtml(email)}</a>.
            </p>
          </div>
        </div>
        <p style="text-align: center; color: #8e8a82; font-size: 12px; margin-top: 16px;">
          &copy; ${new Date().getFullYear()} Sahelia — Garoua, Cameroun
        </p>
      </div>
    `;

    // Insert into Supabase database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const insertRes = await fetch(`${supabaseUrl}/rest/v1/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": serviceRoleKey,
        "Authorization": `Bearer ${serviceRoleKey}`,
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        type,
        first_name: first_name || null,
        last_name: last_name || null,
        name: name || null,
        email,
        phone: phone || null,
        service: service || null,
        level: level || null,
        subject: subject || null,
        message: message || null,
      }),
    });

    if (!insertRes.ok) {
      const errText = await insertRes.text();
      console.error("DB insert failed:", errText);
    }

    // Send email via Resend (or fallback to just logging)
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (resendApiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Sahelia <onboarding@resend.dev>",
          to: ["pierretchang83@gmail.com"],
          reply_to: email,
          subject: title,
          html: htmlBody,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Email send failed:", errText);
      }
    } else {
      console.log("No RESEND_API_KEY configured. Email content logged:");
      console.log("Subject:", title);
      console.log("From:", email);
      console.log("Body:", fullName, phone, service, level, subject, message);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Soumission reçue avec succès." }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Une erreur est survenue lors du traitement." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
