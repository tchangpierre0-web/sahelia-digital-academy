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
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4611d005-e01a-47b1-a822-dec7b1ceaa4d',
        subject: payload.type === 'contact' ? 'Nouveau message de contact - Sahelia' : 'Nouvelle demande d\'inscription - Sahelia',
        from_name: 'Sahelia Digital Academy',
        ...payload,
      }),
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      return { success: false, error: responseData.message || responseData.error || `Erreur (${response.status})` };
    }

    if (responseData.success === false) {
      return { success: false, error: responseData.message || 'Le message n\'a pas pu être envoyé.' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Impossible de contacter le serveur. Vérifiez votre connexion.' };
  }
}
