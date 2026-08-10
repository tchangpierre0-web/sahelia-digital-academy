import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import TikTokIcon from '@/components/TikTokIcon';
import Logo from '@/components/Logo';
import { CONTACT } from '@/data/concours';
import { submitForm } from '@/lib/submitForm';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await submitForm({
      type: 'contact',
      name: form.name,
      email: form.email,
      phone: form.phone,
      subject: form.subject,
      message: form.message,
    });

    setLoading(false);

    if (result.success) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    } else {
      setError(result.error || 'Une erreur est survenue.');
    }
  };

  const contactCards = [
    { icon: Mail, label: 'E-mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: 'Téléphone', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
    { icon: MapPin, label: 'Adresse', value: CONTACT.address },
    { icon: Clock, label: 'Horaires', value: 'Lun – Sam : 8h00 – 19h00' },
  ];

  return (
    <>
      <PageHeader title="Contactez-nous" subtitle="Une question ? L'équipe Sahelia est là pour vous accompagner." />

      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary-50/20 to-white">
        <div className="section-padding max-w-7xl mx-auto">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 80}>
                <div className="card-warm p-6 text-center h-full group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mx-auto mb-4 shadow-lg shadow-primary-400/20 transition-all duration-300 group-hover:scale-110">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-ink-400 uppercase tracking-wide mb-1">{card.label}</p>
                  {card.href ? (
                    <a href={card.href} className="text-ink-800 font-semibold hover:text-primary-600 transition-colors text-sm break-words">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-ink-800 font-semibold text-sm">{card.value}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form + info */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="card p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-ink-900">Envoyez-nous un message</h2>
                </div>

                {submitted ? (
                  <div className="py-12 text-center animate-scale-in">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-ink-900 mx-auto mb-4 shadow-lg shadow-primary-400/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-extrabold text-ink-900 mb-2">Message envoyé !</h3>
                    <p className="text-ink-500">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : error ? (
                  <div className="py-8 text-center animate-scale-in">
                    <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
                      <AlertCircle className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-extrabold text-ink-900 mb-2">Oups, une erreur est survenue</h3>
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                    <button onClick={() => setError(null)} className="btn-outline text-sm">
                      Réessayer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-ink-700 mb-1.5">Nom complet</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                          placeholder="Votre nom" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink-700 mb-1.5">Téléphone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                          placeholder="Votre numéro" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink-700 mb-1.5">E-mail</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white"
                        placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink-700 mb-1.5">Sujet</label>
                      <select name="subject" required value={form.subject} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white">
                        <option value="">Choisir un sujet...</option>
                        <option value="repetition">Répétition</option>
                        <option value="cours-en-ligne">Cours en ligne</option>
                        <option value="prepa-concours">Prépa concours</option>
                        <option value="tarifs">Tarifs</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink-700 mb-1.5">Message</label>
                      <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent focus:bg-white resize-none"
                        placeholder="Votre message..." />
                    </div>
                    <div>
                      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Side info */}
            <Reveal delay={150} className="lg:col-span-2">
              <div className="card-dark p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Logo className="w-10 h-10" variant="light" />
                  <span className="font-display font-extrabold text-lg text-white">Sahelia</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Informations pratiques</h3>
                <p className="text-primary-200/70 text-sm leading-relaxed mb-6">
                  <em className="font-serif">
                    Notre équipe est disponible pour répondre à toutes vos questions.
                  </em>
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Adresse</p>
                      <p className="text-primary-200/70 text-sm">{CONTACT.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Téléphone</p>
                      <a href={`tel:${CONTACT.phoneRaw}`} className="text-primary-200/70 text-sm hover:text-white transition-colors">{CONTACT.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-300 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">E-mail</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-primary-200/70 text-sm hover:text-white transition-colors break-words">{CONTACT.email}</a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-ink-700/50">
                  <p className="text-white font-bold text-sm mb-2">Horaires d'ouverture</p>
                  <p className="text-primary-200/70 text-sm">Lun – Sam : 8h00 – 19h00</p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-xl bg-ink-800 hover:bg-ink-700 flex items-center justify-center text-ink-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                     aria-label="TikTok">
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer"
                     className="w-10 h-10 rounded-xl bg-ink-800 hover:bg-blue-600 flex items-center justify-center text-ink-400 hover:text-white transition-all duration-300 hover:scale-110"
                     aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
