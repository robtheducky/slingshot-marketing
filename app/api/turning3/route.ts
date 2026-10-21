import { NextRequest, NextResponse } from 'next/server';
import { PARTNERS } from '@/lib/turning3';

const RESEND_KEY = process.env.RESEND_API_KEY ?? '';

// Interest list for the age three transition pilot. Nothing is stored here:
// each sign-up is emailed to Rob and lives only in that inbox. Collect the
// minimum (no child's name, diagnosis or records), and unlike the other forms
// on this site, report failure so a family is never told "we got it" when we
// did not.

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function esc(s: string) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

function field(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const firstName = field(body.firstName, 80);
  const contact = field(body.contact, 120);
  if (!firstName || !contact) return NextResponse.json({ error: 'Name and contact required' }, { status: 400 });

  const language = body.language === 'es' ? 'Spanish' : 'English';
  const monthNum = Number(body.month);
  const month = monthNum >= 1 && monthNum <= 12 ? MONTHS[monthNum - 1] : 'not given';
  const sourceRaw = field(body.source, 40);
  const source = PARTNERS[sourceRaw] ? `${PARTNERS[sourceRaw]} (${sourceRaw})` : sourceRaw || 'direct';
  const page = body.page === 'es' ? 'Spanish page' : 'English page';

  if (!RESEND_KEY) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Slingshot Site <noreply@slingshotiep.com>',
        to: ['rob@slingshotiep.com'],
        subject: `Turning 3 interest: ${firstName} (${language})`,
        html: [
          '<p>A family asked to hear when the age three transition pilot opens.</p>',
          `<p><strong>First name:</strong> ${esc(firstName)}<br>`,
          `<strong>Contact:</strong> ${esc(contact)}<br>`,
          `<strong>Language:</strong> ${language}<br>`,
          `<strong>Turns 3 in:</strong> ${month}<br>`,
          `<strong>Came from:</strong> ${esc(source)}, ${page}</p>`,
          '<p>This is not enrollment or consent. Delete on request.</p>',
        ].join(''),
      }),
    });
    if (!res.ok) return NextResponse.json({ error: 'Send failed' }, { status: 502 });
  } catch {
    return NextResponse.json({ error: 'Send failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
