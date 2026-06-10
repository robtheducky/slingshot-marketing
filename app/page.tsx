'use client';

import { useState } from 'react';
import Link from 'next/link';
import SlingshotLogo from '@/components/SlingshotLogo';

function GravityAssistSVG() {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-0 top-0 h-full w-[55%] opacity-50 pointer-events-none select-none"
      aria-hidden="true"
    >
      <path
        d="M400 10 C 370 60, 340 100, 300 145 C 260 190, 230 225, 215 270 C 200 315, 205 355, 225 395 C 245 435, 275 465, 310 510"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />
      <circle cx="392" cy="28"  r="2.5" fill="#E8DFD0" />
      <circle cx="348" cy="88"  r="3.5" fill="#C4B9A8" />
      <circle cx="278" cy="162" r="5"   fill="#D97706" opacity="0.5" />
      <circle cx="214" cy="268" r="7"   fill="#D97706" />
      <circle cx="238" cy="375" r="4.5" fill="#C4B9A8" />
      <circle cx="298" cy="468" r="3"   fill="#E8DFD0" />
    </svg>
  );
}

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
        body: JSON.stringify({ email, role: 'family' }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className={`inline-flex items-center gap-3 rounded-xl border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-4 ${className}`}>
        <svg className="w-5 h-5 text-[#059669] shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <p className="text-sm font-medium text-[#065F46]">You're on the list. We'll be in touch.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 rounded-lg border border-[#E8DFD0] bg-white px-4 py-3 text-sm text-[#2F2F2F] placeholder-[#C4B9A8] focus:border-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]/20"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !email.trim()}
          className="rounded-lg bg-[#D97706] px-6 py-3 text-sm font-semibold text-white hover:bg-[#B45309] disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          {status === 'submitting' ? 'Joining...' : 'Join the waitlist'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Email us at hello@slingshotiep.com.</p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-sans">

      {/* Nav */}
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <SlingshotLogo size="md" />
        <Link
          href="https://app.slingshotiep.com/iep"
          className="text-sm text-[#6B6B6B] hover:text-[#2F2F2F] transition-colors"
        >
          Sign in
        </Link>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-28">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">
            Company Brief · 2026
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#2F2F2F] leading-[1.08] tracking-tight mb-6">
            No parent should walk into an IEP meeting alone.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10 max-w-xl">
            7 in 10 parents of children with disabilities lose services because they don't know their rights. Slingshot changes that.
          </p>
          <WaitlistForm className="max-w-md" />
          <p className="mt-3 text-xs text-[#B8AFA5]">Free to start. For families and advocates.</p>
        </div>
      </section>

      {/* The Posture */}
      <section className="relative overflow-hidden bg-[#FDFBF8] border-y border-[#E8DFD0]">
        <div className="mx-auto max-w-6xl px-6 py-24 relative">
          <GravityAssistSVG />
          <div className="max-w-xl relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">The Posture</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              <span className="text-[#C4B9A8]">Precise positioning</span>
              <br />
              <span className="text-[#2F2F2F]">beats raw power.</span>
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
              Voyager didn't reach interstellar space because it was the most powerful rocket ever built. It got there because someone understood how to use the system's own geometry.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              The IEP meeting is a navigation window. It happens once a year, with real consequences for arriving unprepared. Slingshot helps you use the system's own momentum, at the right angle, at the right moment.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">The Problem</p>
            <p className="text-[84px] font-extrabold text-[#D97706] leading-none tracking-tight mb-4">
              7in10
            </p>
            <p className="text-2xl font-semibold text-[#2F2F2F] leading-snug mb-6">
              parents of children with disabilities lose services because they don't know their rights.
            </p>
            <p className="text-xs text-[#B8AFA5] italic leading-relaxed">
              Burke, M.M. (2013). Improving parental involvement. Journal of Disability Policy Studies, 23, 225-234.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl bg-white border border-[#E8DFD0] p-5">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#E57373] mb-1.5">Your child suffers</p>
              <p className="text-base font-bold text-[#2F2F2F] mb-1">Deficits compound</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Concerns left unaddressed worsen each year where supports are not in the IEP.</p>
            </div>
            <div className="rounded-xl bg-white border border-[#E8DFD0] p-5">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#D97706] mb-1.5">Your finances suffer</p>
              <p className="text-base font-bold text-[#2F2F2F] mb-1">Impacts ripple out</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Most states qualify additional services based on IEP hours. IEP teams are incentivized to scale back hours.</p>
            </div>
            <div className="rounded-xl bg-white border border-[#E8DFD0] p-5">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#9FB7C8] mb-1.5">You suffer</p>
              <p className="text-base font-bold text-[#2F2F2F] mb-1">You feel guilt and anger</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">Parents who feel taken advantage of may feel guilt or anger that they couldn't get the IEP their child needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Families */}
      <section className="bg-[#FDFBF8] border-y border-[#E8DFD0]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">For Families</p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F2F] leading-tight mb-5">
                Everything you know about your child, organized before you walk in.
              </h2>
              <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
                Parents come into IEP meetings carrying years of context spread across reports, emails, and lived experience. The system asks for clarity and evidence. Slingshot organizes what you already know so it's easier to communicate and harder to dismiss.
              </p>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                Slingshot is autism-specific, starts with your child's strengths before surfacing any concerns, and is grounded in what adults with autism say about their own IEP experiences.
              </p>
            </div>
            <div className="space-y-4">
              {([
                { num: 1, title: 'Upload your IEP', body: 'Slingshot reads every goal, service, and accommodation and flags what to watch.' },
                { num: 2, title: 'Build your talking points', body: 'Answer a few questions about your child. Slingshot turns your answers into a structured agenda.' },
                { num: 3, title: 'Walk in prepared', body: 'Your meeting packet goes with you in the app or printed, with every point ready.' },
              ] as const).map(step => (
                <div key={step.num} className="flex gap-4 rounded-xl bg-white border border-[#E8DFD0] p-5">
                  <div className="w-8 h-8 rounded-full bg-[#D97706] text-white text-[13px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2F2F2F] text-sm">{step.title}</p>
                    <p className="mt-0.5 text-sm text-[#6B6B6B] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Advocates */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">For Advocates</p>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F2F] leading-tight mb-5">
              Serve more families without compromising depth.
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
              Independent SPED advocates are constrained by the hours in a day. Slingshot handles document review, goal analysis, and meeting prep so you can focus on the judgment calls only you can make.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-6">
              Built-in triage helps you determine what each family needs, what Slingshot can support directly, and when to refer to legal counsel. Your reputation stays intact.
            </p>
            <a
              href="mailto:hello@slingshotiep.com?subject=Advocate access"
              className="text-sm font-semibold text-[#D97706] hover:text-[#B45309] hover:underline transition-colors"
            >
              Talk to us about advocate access
            </a>
          </div>
          <div className="space-y-4">
            {([
              { label: 'Case review at scale',    body: 'Review IEP documents across your caseload without starting from scratch each time.' },
              { label: 'Triage built in',          body: 'A structured intake flow that routes families to the right level of support.' },
              { label: 'Client preparation',       body: 'Families arrive to your sessions already oriented, so you spend less time on basics.' },
              { label: 'Ethical escalation paths', body: 'Clear referral points for legal and additional support, documented in the workflow.' },
            ] as const).map(item => (
              <div key={item.label} className="rounded-xl bg-[#FDFBF8] border border-[#E8DFD0] p-5">
                <p className="font-semibold text-[#2F2F2F] text-sm mb-1">{item.label}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#FDFBF8] border-t border-[#E8DFD0]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#9FB7C8] mb-5">About</p>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F2F] leading-tight mb-6">
              Built from the inside.
            </h2>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
              Rob Martin is a healthcare product leader and parent of a child with autism. Maddie Magnusson has worked with students with autism across more than 50 IEP meetings as a social-emotional learning specialist in DC, Maryland, and Virginia. Both are members of the neurodivergent community.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed mb-4">
              Slingshot reflects what they know from sitting on both sides of the table. The system is not designed to help parents advocate effectively. Existing tools served all disabilities broadly, started only after the district had already drafted the document, and weren't built by people who understood what these meetings feel like from the inside.
            </p>
            <p className="text-base text-[#6B6B6B] leading-relaxed">
              Slingshot Labs Benefit LLC is a Maryland Benefit LLC founded in 2025 and based in Montgomery County, Maryland.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2F2F2F] leading-tight mb-4 max-w-2xl mx-auto">
          The right support at 6 changes what's possible at 16.
        </h2>
        <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10 max-w-lg mx-auto">
          Join families and advocates using Slingshot to prepare for what matters most.
        </p>
        <WaitlistForm className="max-w-md mx-auto" />
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
