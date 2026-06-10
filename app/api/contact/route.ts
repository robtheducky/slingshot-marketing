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
          from: 'Slingshot Site <noreply@slingshotiep.com>',
          to: ['hello@slingshotiep.com', 'rob@slingshotiep.com'],
          subject: `Professional inquiry: ${email}`,
          html: `<p>A professional submitted their email from slingshotiep.com.</p><p><strong>Email:</strong> ${email}</p>`,
        }),
      });
    } catch { /* best-effort */ }
  }

  return NextResponse.json({ ok: true });
}
