import { NextRequest, NextResponse } from 'next/server';

const RESEND_KEY = process.env.RESEND_API_KEY ?? '';

export async function POST(req: NextRequest) {
  const { phone } = await req.json();
  if (!phone) return NextResponse.json({ error: 'Phone required' }, { status: 400 });

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
          subject: `App link request: ${phone}`,
          html: `<p>A visitor requested the app be texted to their phone from slingshotiep.com.</p><p><strong>Phone:</strong> ${phone}</p><p>Text them the App Store link: https://apps.apple.com/us/app/slingshot-iep/id6763329479</p>`,
        }),
      });
    } catch { /* best-effort */ }
  }

  return NextResponse.json({ ok: true });
}
