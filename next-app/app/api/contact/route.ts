import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(4),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || 'rooseveltmkr@gmail.com';

    if (apiKey) {
      const resend = new Resend(apiKey);
      const emailResponse = await resend.emails.send({
        from: 'Tools-CL Contact <onboarding@resend.dev>', // Resend sandbox default
        to: recipient,
        subject: `[Contact Tools-CL] ${subject}`,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        `,
      });

      if (emailResponse.error) {
        console.error('Erreur lors de l\'envoi via Resend:', emailResponse.error);
        return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email.' }, { status: 500 });
      }
    } else {
      // Dev mode fallback
      console.log('--- Mode Dev (Pas de RESEND_API_KEY) ---');
      console.log(`De: ${name} (${email})`);
      console.log(`Sujet: ${subject}`);
      console.log(`Message: ${message}`);
      console.log('----------------------------------------');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur interne API contact:', error);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}
