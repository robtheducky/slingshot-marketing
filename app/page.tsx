'use client';

import { useState } from 'react';
import SlingshotLogo from '@/components/SlingshotLogo';

function WaitlistForm({ className = '' }: { className?: string }) {
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
    return <p className={`text-sm text-[#059669] font-medium ${className}`}>You're on the list. We'll be in touch.</p>;
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
          className="flex-1 rounded-lg border border-[#E8DFD0] bg-white px-4 py-2.5 text-sm text-[#2F2F2F] placeholder-[#C4B9A8] focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !email.trim()}
          className="rounded-lg bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B45309] disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          {status === 'submitting' ? 'Joining...' : 'Join the waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Email hello@slingshotiep.com directly.</p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-sans text-[#2F2F2F]">

      {/* Nav — wide */}
      <nav className="sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur-sm border-b border-[#EAE4DB]">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <SlingshotLogo size="sm" />
          <a href="https://app.slingshotiep.com/iep" className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">
            Sign in
          </a>
        </div>
      </nav>

      {/* Hero — medium width, headline fills it */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-28">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6">
          No parent should walk into an IEP meeting alone.
        </h1>
        {/* Form deliberately narrower than the headline */}
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-sm mb-10">
          Slingshot turns what you know about your child into a meeting agenda that's ready for the room.
        </p>
        <WaitlistForm className="max-w-sm" />
        <p className="mt-3 text-xs text-[#B8AFA5]">Free to start. For families and advocates.</p>
      </section>

      {/* Stat — full bleed, warm white */}
      <section className="bg-[#FDFBF8] border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 mb-16">
            <span className="text-[96px] font-extrabold text-[#D97706] leading-none shrink-0">7in10</span>
            <p className="text-2xl font-semibold leading-snug max-w-xs">
              parents of children with disabilities lose services because they don't know their rights.
            </p>
          </div>
          {/* 3-col grid takes advantage of full width */}
          <div className="grid sm:grid-cols-3 gap-12">
            <div>
              <p className="font-semibold mb-1">Deficits compound.</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Unaddressed concerns worsen every year the support isn't in the IEP.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Impacts ripple out.</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Many states tie additional services directly to IEP service hours.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Guilt and anger follow.</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Parents feel they let their child down when they didn't know what to ask for.</p>
            </div>
          </div>
          <p className="mt-12 text-xs text-[#C4B9A8] italic">
            Burke, M.M. (2013). Improving parental involvement. Journal of Disability Policy Studies, 23, 225-234.
          </p>
        </div>
      </section>

      {/* How it works — very narrow, feels intimate */}
      <section className="border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-2xl font-bold mb-12 max-w-xs leading-snug">
            Preparation that starts with your child's strengths.
          </p>
          <ol className="space-y-8 max-w-xs">
            {([
              { n: '01', title: 'Upload your IEP', body: 'Every goal, service, and accommodation — analyzed and flagged.' },
              { n: '02', title: 'Build your agenda', body: 'A few questions. A structured meeting plan in return.' },
              { n: '03', title: 'Walk in ready', body: 'Your packet in the app or printed.' },
            ] as const).map(s => (
              <li key={s.n} className="flex gap-5 items-start">
                <span className="text-xs font-bold text-[#D97706] tabular-nums pt-0.5 shrink-0">{s.n}</span>
                <div>
                  <p className="font-semibold text-[#2F2F2F]">{s.title}</p>
                  <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Advocates — warm white */}
      <section className="bg-[#FDFBF8] border-t border-[#EAE4DB] py-20">
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

      {/* About — narrow, intimate */}
      <section className="border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-2xl font-bold mb-4">Built from the inside.</p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
            Rob Martin is a healthcare product leader and parent of a child with a disability. Maddie Magnusson has sat in more than 50 IEP meetings as a social-emotional learning specialist across DC, Maryland, and Virginia. Slingshot is what they built after sitting on both sides of the table.
          </p>
        </div>
      </section>

      {/* Bottom CTA — centered, pulls tight */}
      <section className="border-t border-[#EAE4DB] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-sm">
            The right support at 6 changes what's possible at 16.
          </h2>
          <p className="text-base text-[#6B6B6B] mb-8 max-w-xs leading-relaxed">
            Join families and advocates preparing for what matters most.
          </p>
          <WaitlistForm className="max-w-sm" />
          <p className="mt-4 text-xs text-[#B8AFA5]">
            Already have an account?{' '}
            <a href="https://app.slingshotiep.com/iep" className="text-[#9FB7C8] hover:underline">Sign in</a>
          </p>
        </div>
      </section>

    </div>
  );
}
