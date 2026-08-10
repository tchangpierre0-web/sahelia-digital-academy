interface SubmissionPayload {
  type: 'contact' | 'rejoindre';
  first_name?: string;
  last_name?: string;
  name?: string;
  email: string;
  phone?: string;
  service?: string;
  level?: string;
  subject?: string;
  message?: string;
}

export async function submitForm(payload: SubmissionPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notification`;
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, error: errorData.error || `Erreur (${response.status})` };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Impossible de contacter le serveur. Vérifiez votre connexion.' };
  }
}
