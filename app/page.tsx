'use client';

import { useState } from 'react';
import Link from 'next/link';
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
    return (
      <p className={`text-sm text-[#059669] font-medium ${className}`}>
        You're on the list. We'll be in touch.
      </p>
    );
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

      {/* Nav */}
      <nav className="mx-auto max-w-3xl px-6 pt-8 pb-0 flex items-center justify-between">
        <SlingshotLogo size="sm" />
        <a
          href="https://app.slingshotiep.com/iep"
          className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors"
        >
          Sign in
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight max-w-2xl mb-7">
          No parent should walk into an IEP meeting alone.
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-xl mb-10">
          7 in 10 parents of children with disabilities lose services because they don't know their rights. Slingshot changes that.
        </p>
        <WaitlistForm className="max-w-md" />
        <p className="mt-3 text-xs text-[#B8AFA5]">Free to start. For families and advocates.</p>
      </section>

      {/* The problem — sparse, no chrome */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 mb-12">
          <span className="text-[80px] font-extrabold text-[#D97706] leading-none shrink-0">7in10</span>
          <p className="text-xl font-semibold text-[#2F2F2F] leading-snug max-w-sm">
            parents of children with disabilities lose services because they don't know their rights.
          </p>
        </div>

        <div className="space-y-8 max-w-2xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E57373] mb-1.5">Your child suffers</p>
            <p className="font-semibold text-[#2F2F2F] mb-1">Deficits compound.</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">Concerns left unaddressed worsen each year where supports are not in the IEP.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-1.5">Your finances suffer</p>
            <p className="font-semibold text-[#2F2F2F] mb-1">Impacts ripple out.</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">Most states qualify additional services based on IEP hours. IEP teams are incentivized to scale back hours.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9FB7C8] mb-1.5">You suffer</p>
            <p className="font-semibold text-[#2F2F2F] mb-1">You feel guilt and anger.</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">Parents who feel taken advantage of may feel guilt or anger that they couldn't get the IEP their child needed.</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#C4B9A8] italic">
          Burke, M.M. (2013). Improving parental involvement. Journal of Disability Policy Studies, 23, 225-234.
        </p>
      </section>

      {/* What Slingshot does — prose, no labels */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-[#EAE4DB]">
        <div className="max-w-2xl">
          <p className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            Parents come into IEP meetings carrying years of context — reports, emails, and lived experience that no document captures cleanly.
          </p>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            The system asks for precision and evidence without helping you get there. Slingshot organizes what you already know about your child so it's easier to communicate and harder to dismiss.
          </p>
        </div>

        {/* Steps — text only, no cards */}
        <ol className="mt-14 space-y-8 max-w-lg">
          {([
            { n: '01', title: 'Upload your IEP', body: 'Slingshot reads every goal, service, and accommodation and flags what to watch.' },
            { n: '02', title: 'Build your talking points', body: 'Answer a few questions about your child. Slingshot turns your answers into a structured agenda.' },
            { n: '03', title: 'Walk in prepared', body: 'Your meeting packet goes with you in the app or printed, with every point ready.' },
          ] as const).map(step => (
            <li key={step.n} className="flex gap-6">
              <span className="text-xs font-bold text-[#D97706] tabular-nums mt-1 shrink-0">{step.n}</span>
              <div>
                <p className="font-semibold text-[#2F2F2F] mb-1">{step.title}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Voyager pull — elegant aside */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <blockquote className="border-l-2 border-[#D97706] pl-6 max-w-xl">
          <p className="text-base text-[#6B6B6B] leading-relaxed italic">
            Voyager didn't reach interstellar space because it was the most powerful rocket ever built. It got there because someone understood how to use the system's own geometry. The IEP meeting is that navigation window — once a year, with real consequences for arriving unprepared.
          </p>
        </blockquote>
      </section>

      {/* For advocates — two paragraphs, one link */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-[#EAE4DB]">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-6">
            For independent SPED advocates.
          </h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
            Slingshot handles document review, goal analysis, and meeting prep so you can focus on the judgment calls only you can make. Built-in triage helps you determine what each family needs, what Slingshot can support directly, and when to refer to legal counsel.
          </p>
          <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
            If you're a SPED advocate or consultant, we'd like to talk about how Slingshot fits into your practice.
          </p>
          <a
            href="mailto:hello@slingshotiep.com?subject=Advocate access"
            className="text-sm font-semibold text-[#D97706] hover:text-[#B45309] hover:underline transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About — short, human */}
      <section className="mx-auto max-w-3xl px-6 py-20 border-t border-[#EAE4DB]">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Built from the inside.</h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
            Rob Martin is a healthcare product leader and parent of a child with autism. Maddie Magnusson has worked with students with autism across more than 50 IEP meetings as a social-emotional learning specialist in DC, Maryland, and Virginia. Both are members of the neurodivergent community.
          </p>
          <p className="text-base text-[#6B6B6B] leading-relaxed">
            Slingshot reflects what they know from sitting on both sides of the table. Existing tools served all disabilities broadly, started only after the district had already drafted the document, and weren't built by people who understood what these meetings feel like from the inside. Slingshot Labs Benefit LLC is a Maryland Benefit LLC founded in 2025.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 border-t border-[#EAE4DB]">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-lg">
          The right support at 6 changes what's possible at 16.
        </h2>
        <p className="text-base text-[#6B6B6B] mb-8 max-w-md leading-relaxed">
          Join families and advocates using Slingshot to prepare for what matters most.
        </p>
        <WaitlistForm className="max-w-md" />
        <p className="mt-4 text-xs text-[#B8AFA5]">
          Already have an account?{' '}
          <a href="https://app.slingshotiep.com/iep" className="text-[#9FB7C8] hover:underline">
            Sign in
          </a>
        </p>
      </section>

    </div>
  );
}
