import { NextRequest, NextResponse } from 'next/server';

// Set BACKEND_URL in Vercel env vars to the Railway backend, e.g.:
// https://slingshot-iep-production.up.railway.app
const BACKEND = process.env.BACKEND_URL ?? 'https://app.slingshotiep.com';

export async function POST(req: NextRequest) {
  const { email, role } = await req.json();
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

  try {
    await fetch(`${BACKEND}/product-feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'suggestion',
        message: `Waitlist signup (${role ?? 'family'})`,
        email,
        page: '/',
      }),
    });
  } catch { /* best-effort */ }

  return NextResponse.json({ ok: true });
}
