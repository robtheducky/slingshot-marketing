'use client';

import { useState } from 'react';
import SlingshotLogo from '@/components/SlingshotLogo';
import { IepDetailMockup, PacketMockup, GoalLoggingMobileMockup, MeetingPrepMobileMockup } from '@/components/ProductMockups';

const SIGNIN_URL = 'https://app.slingshotiep.com/parent?signin=1';
const APP_STORE_URL = 'https://apps.apple.com/us/app/slingshot-iep/id6763329479';

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
    return <p className="text-sm font-medium text-[#059669]">You're on the list. We'll be in touch.</p>;
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
          className="flex-1 rounded-lg border border-[#E8DFD0] bg-white text-[#2F2F2F] placeholder-[#C4B9A8] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-[#D97706] focus:ring-[#D97706]/20"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !email.trim()}
          className="rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#D97706] text-white hover:bg-[#B45309] disabled:opacity-50 transition-colors whitespace-nowrap"
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
            <a href="#product"   className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">See it in action</a>
            <a href="#advocates" className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">For advocates</a>
            <a href="#about"     className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">About</a>
            <a href={SIGNIN_URL} className="text-xs font-semibold text-[#D97706] hover:text-[#B45309] transition-colors">Sign in</a>
          </div>
          <a href={SIGNIN_URL} className="sm:hidden text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">Sign in</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-28">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight mb-6">
          No parent should walk into an IEP meeting alone.
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-sm mb-10">
          Slingshot turns what you know about your child into a meeting agenda that's ready for the room.
        </p>
        <WaitlistForm className="max-w-sm" />
        <p className="mt-3 text-xs text-[#B8AFA5]">Free to start. For families and advocates.</p>
      </section>

      {/* Stat — dark section */}
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

      {/* Product showcase */}
      <section id="product" className="border-t border-[#EAE4DB] py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">

          {/* Feature 1: IEP decoded */}
          <div className="mb-24">
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#D97706] mb-2">Your IEP, decoded</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <p className="text-2xl font-bold leading-snug max-w-sm">Every goal, service, and gap in plain language.</p>
              <a
                href={SIGNIN_URL}
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D97706] hover:text-[#B45309] transition-colors"
              >
                Open in web app
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
            <IepDetailMockup className="w-full" />
            <p className="text-sm text-[#6B6B6B] leading-relaxed mt-5 max-w-lg">
              Slingshot reads your IEP and surfaces what matters: goals without baselines, services reduced from last year, areas of need with no supporting goal.
            </p>
          </div>

          {/* Feature 2: Meeting prep */}
          <div className="mb-24 border-t border-[#F0EBE3] pt-20">
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#D97706] mb-2">Your meeting plan</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <p className="text-2xl font-bold leading-snug max-w-sm">Know exactly what to say before you sit down.</p>
              <a
                href={SIGNIN_URL}
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#D97706] hover:text-[#B45309] transition-colors"
              >
                Open in web app
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </a>
            </div>
            <PacketMockup className="w-full" />
            <p className="text-sm text-[#6B6B6B] leading-relaxed mt-5 max-w-lg">
              Answer a few questions about your child. Slingshot builds a prioritized agenda with the right language, grounded in your IEP.
            </p>
          </div>

          {/* Feature 3: Mobile */}
          <div className="border-t border-[#F0EBE3] pt-20">
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#9FB7C8] mb-2">On your phone</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <p className="text-2xl font-bold leading-snug max-w-sm">Log observations. Follow along live.</p>
              <a
                href={`sms:?&body=Download Slingshot IEP for iOS: ${APP_STORE_URL}`}
                className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#9FB7C8] hover:text-[#8BA5B5] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="1.5" width="10" height="17" rx="2" />
                  <line x1="9" y1="15.5" x2="11" y2="15.5" />
                </svg>
                Text a link to your phone
              </a>
            </div>
            <div className="flex gap-6 items-start overflow-x-auto pb-2">
              <GoalLoggingMobileMockup />
              <MeetingPrepMobileMockup />
              <div className="hidden sm:flex flex-col gap-6 pt-4 max-w-xs shrink-0">
                <div>
                  <p className="text-sm font-semibold mb-1">Keep notes between meetings.</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">Log what you observe at home so you walk in with more than your memory.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Follow your agenda live.</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">Check off talking points as the meeting moves. Nothing falls through the cracks.</p>
                </div>
              </div>
            </div>
          </div>

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
          <p className="text-2xl font-bold mb-4">Built from the inside.</p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm">
            Rob Martin is a healthcare product leader and parent of a child with a disability. Maddie Magnusson has sat in more than 50 IEP meetings as a social-emotional learning specialist across DC, Maryland, and Virginia. Slingshot is what they built after sitting on both sides of the table.
          </p>
        </div>
      </section>

      {/* Bottom CTA — slate */}
      <section className="bg-[#9FB7C8] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-sm text-[#2D2A26]">
            The right support at 6 changes what's possible at 16.
          </h2>
          <p className="text-base text-[#2D2A26]/70 mb-8 max-w-xs leading-relaxed">
            Join families and advocates preparing for what matters most.
          </p>
          <WaitlistForm className="max-w-sm" />
          <p className="mt-4 text-xs text-[#2D2A26]/40">
            Already have an account?{' '}
            <a href={SIGNIN_URL} className="text-[#2D2A26]/60 hover:text-[#2D2A26] underline">Sign in</a>
          </p>
        </div>
      </section>

    </div>
  );
}
