'use client';

import { useState } from 'react';
import SlingshotLogo from '@/components/SlingshotLogo';

function WaitlistForm({ className = '', light = false }: { className?: string; light?: boolean }) {
  const [email,  setEmail]  = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <p className={`text-sm font-medium ${light ? 'text-[#A7F3D0]' : 'text-[#059669]'} ${className}`}>You're on the list. We'll be in touch.</p>;
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${
            light
              ? 'border-white/20 bg-white/10 text-white placeholder-white/40 focus:border-white/40 focus:ring-white/10'
              : 'border-[#E8DFD0] bg-white text-[#2F2F2F] placeholder-[#C4B9A8] focus:border-[#D97706] focus:ring-[#D97706]/20'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !email.trim()}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold disabled:opacity-50 transition-colors whitespace-nowrap ${
            light
              ? 'bg-white text-[#D97706] hover:bg-[#FEF3C7]'
              : 'bg-[#D97706] text-white hover:bg-[#B45309]'
          }`}
        >
          {status === 'submitting' ? 'Joining...' : 'Join the waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">Something went wrong. Email hello@slingshotiep.com directly.</p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-sans text-[#2F2F2F]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur-sm border-b border-[#EAE4DB]">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <SlingshotLogo size="sm" />
          <div className="hidden sm:flex items-center gap-7">
            <a href="#how-it-works" className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">How it works</a>
            <a href="#advocates"    className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">For advocates</a>
            <a href="#about"        className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">About</a>
            <a href="https://app.slingshotiep.com/iep" className="text-xs font-semibold text-[#D97706] hover:text-[#B45309] transition-colors">Sign in</a>
          </div>
          <a href="https://app.slingshotiep.com/iep" className="sm:hidden text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">Sign in</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-28">
        {/* TODO: add a warm candid photo (parent + child at table) to the right of this text */}
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6">
          No parent should walk into an IEP meeting alone.
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-sm mb-10">
          Slingshot turns what you know about your child into a meeting agenda that's ready for the room.
        </p>
        <WaitlistForm className="max-w-sm" />
        <p className="mt-3 text-xs text-[#B8AFA5]">Free to start. For families and advocates.</p>
      </section>

      {/* Stat — dark section, high contrast */}
      <section className="bg-[#2D2A26] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 mb-16">
            <span className="text-[96px] font-extrabold text-[#D97706] leading-none shrink-0">7in10</span>
            <p className="text-2xl font-semibold text-white leading-snug max-w-xs">
              parents of children with disabilities lose services because they don't know their rights.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-12">
            <div>
              <p className="font-semibold text-white mb-1">Deficits compound.</p>
              <p className="text-sm text-[#9B9086] leading-relaxed">Unaddressed concerns worsen every year the support isn't in the IEP.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Impacts ripple out.</p>
              <p className="text-sm text-[#9B9086] leading-relaxed">Many states tie additional services directly to IEP service hours.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Guilt and anger follow.</p>
              <p className="text-sm text-[#9B9086] leading-relaxed">Parents feel they let their child down when they didn't know what to ask for.</p>
            </div>
          </div>
          <p className="mt-12 text-xs text-[#6B6460] italic">
            Burke, M.M. (2013). Improving parental involvement. Journal of Disability Policy Studies, 23, 225-234.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* TODO: add app screenshot / phone mockup to the right of these steps */}
          <p className="text-2xl font-bold mb-12 max-w-xs leading-snug">
            Preparation that starts with your child's strengths.
          </p>
          <ol className="space-y-8 max-w-xs">
            {([
              { n: '01', title: 'Upload your IEP',   body: 'Every goal, service, and accommodation — analyzed and flagged.' },
              { n: '02', title: 'Build your agenda',  body: 'A few questions. A structured meeting plan in return.' },
              { n: '03', title: 'Walk in ready',      body: 'Your packet in the app or printed.' },
            ] as const).map(s => (
              <li key={s.n} className="flex gap-5 items-start">
                <span className="text-xs font-bold text-[#D97706] tabular-nums pt-0.5 shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Advocates */}
      <section id="advocates" className="bg-[#FDFBF8] border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-2xl font-bold mb-4 max-w-xs leading-snug">For independent SPED advocates.</p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm mb-6">
            We're recruiting advocate partners for co-development and want to support your practice. If you work with families navigating IEPs, we'd like to hear from you.
          </p>
          <a href="mailto:rob@slingshotiep.com?subject=Advocate partnership" className="text-sm font-semibold text-[#D97706] hover:text-[#B45309] hover:underline transition-colors">
            Email rob@slingshotiep.com
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* TODO: add photos of Rob and Maddie here — headshots, warm and candid */}
          <p className="text-2xl font-bold mb-4">Built from the inside.</p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
            Rob Martin is a healthcare product leader and parent of a child with a disability. Maddie Magnusson has sat in more than 50 IEP meetings as a social-emotional learning specialist across DC, Maryland, and Virginia. Slingshot is what they built after sitting on both sides of the table.
          </p>
        </div>
      </section>

      {/* Bottom CTA — amber wash */}
      <section className="bg-[#D97706] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-sm text-white">
            The right support at 6 changes what's possible at 16.
          </h2>
          <p className="text-base text-white/70 mb-8 max-w-xs leading-relaxed">
            Join families and advocates preparing for what matters most.
          </p>
          <WaitlistForm className="max-w-sm" light />
          <p className="mt-4 text-xs text-white/40">
            Already have an account?{' '}
            <a href="https://app.slingshotiep.com/iep" className="text-white/70 hover:text-white underline">Sign in</a>
          </p>
        </div>
      </section>

    </div>
  );
}
