import { useState } from 'react';
import { User, Mail, Phone, GraduationCap, Send, CheckCircle2, FileText, ArrowRight, Users, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { submitForm } from '@/lib/submitForm';

export default function Rejoindre() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    service: '', level: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await submitForm({
      type: 'rejoindre',
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      service: form.service,
      level: form.level,
      message: form.message,
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || 'Une erreur est survenue.');
    }
  };

  if (submitted) {
    return (
      <>
        <PageHeader title="Nous rejoindre" subtitle="Rejoignez l'aventure Sahelia." />
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50/30 to-white">
          <div className="section-padding max-w-2xl mx-auto">
            <Reveal>
              <div className="card-warm p-10 lg:p-14 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mx-auto mb-6 shadow-xl shadow-primary-400/30 animate-bounce-subtle">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-ink-900 mb-3">Bienvenue chez Sahelia !</h2>
                <p className="text-lg text-ink-600 mb-2">
                  Merci <span className="font-bold text-primary-700">{form.firstName}</span>, votre demande a bien été reçue.
                </p>
                <p className="text-ink-500">
                  Notre équipe vous contactera très prochainement pour finaliser votre inscription.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                    setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', level: '', message: '' });
                  }}
                  className="btn-outline mt-8"
                >
                  Faire une nouvelle demande
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Nous rejoindre" subtitle="Rejoignez les programmes Sahelia et donnez-vous les meilleures chances de réussite." />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/20 to-white">
        <div className="section-padding max-w-4xl mx-auto">
          {/* Intro banner */}
          <Reveal className="mb-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-5 border border-primary-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 shrink-0 shadow-lg shadow-primary-400/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <p className="text-sm text-ink-700 font-medium">
                <strong className="text-ink-900">Bienvenue !</strong> Remplissez ce formulaire pour rejoindre Sahelia.
                Notre équipe vous recontactera sous 48h.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-ink-900">Formulaire d'inscription</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 animate-slide-down">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="text-sm text-red-600">{error}</p>
                    <button onClick={() => setError(null)} className="ml-auto text-sm font-bold text-red-600 hover:text-red-700">
                      Fermer
                    </button>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">Prénom</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input type="text" name="firstName" required value={form.firstName} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                        placeholder="Votre prénom" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">Nom</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input type="text" name="lastName" required value={form.lastName} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                        placeholder="Votre nom" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                        placeholder="votre@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                        placeholder="Votre numéro" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">Service souhaité</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <select name="service" required value={form.service} onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white appearance-none">
                        <option value="">Choisir...</option>
                        <option value="repetition">Répétition</option>
                        <option value="cours-en-ligne">Cours en ligne</option>
                        <option value="prepa-concours">Prépa concours</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-ink-700 mb-1.5">Niveau d'études</label>
                    <select name="level" required value={form.level} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white appearance-none">
                      <option value="">Choisir...</option>
                      <option value="primaire">Primaire</option>
                      <option value="college">Collège</option>
                      <option value="lycee">Lycée</option>
                      <option value="bac">Baccalauréat</option>
                      <option value="sup">Supérieur</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-ink-700 mb-1.5">Message (optionnel)</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white resize-none"
                    placeholder="Précisez votre projet ou posez vos questions..." />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
