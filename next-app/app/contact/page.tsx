'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Veuillez saisir une adresse email valide.' }),
  subject: z.string().min(4, { message: 'Le sujet doit contenir au moins 4 caractères.' }),
  message: z.string().min(10, { message: 'Le message doit contenir au moins 10 caractères.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto py-12 md:py-20 px-4">
      <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-10 backdrop-blur-md flex flex-col gap-6">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#b06dff] uppercase block mb-2">
            // Formulaire de contact
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Contactez-nous
          </h1>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-[rgba(61,255,160,0.1)] border border-[rgba(61,255,160,0.2)] text-[#80ffcc] text-sm rounded-xl">
            Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-[rgba(255,61,61,0.1)] border border-[rgba(255,61,61,0.2)] text-[#ff8080] text-sm rounded-xl">
            Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* NOM */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-mono text-xs text-[rgba(240,239,255,0.6)] uppercase tracking-wider">
              Nom
            </label>
            <input
              id="name"
              type="text"
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b06dff] transition text-white"
              placeholder="Votre nom"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-xs text-[#ff8080] mt-0.5">{errors.name.message}</span>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-xs text-[rgba(240,239,255,0.6)] uppercase tracking-wider">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b06dff] transition text-white"
              placeholder="Votre adresse email"
              {...register('email')}
            />
            {errors.email && (
              <span className="text-xs text-[#ff8080] mt-0.5">{errors.email.message}</span>
            )}
          </div>

          {/* SUJET */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="font-mono text-xs text-[rgba(240,239,255,0.6)] uppercase tracking-wider">
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b06dff] transition text-white"
              placeholder="Le sujet de votre message"
              {...register('subject')}
            />
            {errors.subject && (
              <span className="text-xs text-[#ff8080] mt-0.5">{errors.subject.message}</span>
            )}
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-mono text-xs text-[rgba(240,239,255,0.6)] uppercase tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#b06dff] transition text-white resize-none"
              placeholder="Votre message..."
              {...register('message')}
            />
            {errors.message && (
              <span className="text-xs text-[#ff8080] mt-0.5">{errors.message.message}</span>
            )}
          </div>

          {/* BOUTON SOUMISSION */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-sub w-full flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Envoi en cours...
              </>
            ) : (
              'Envoyer le message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
