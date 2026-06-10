import { NextRequest, NextResponse } from 'next/server';

const RESEND_KEY = process.env.RESEND_API_KEY ?? '';

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  if (RESEND_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Slingshot Waitlist <noreply@slingshotiep.com>',
          to: 'hello@slingshotiep.com',
          subject: `Waitlist signup: ${email}`,
          html: `<p>New waitlist signup from <strong>slingshotiep.com</strong>.</p><p><strong>Email:</strong> ${email}</p>`,
        }),
      });
    } catch { /* best-effort */ }
  }

  return NextResponse.json({ ok: true });
}
