'use client';

import { useState } from 'react';
import Link from 'next/link';
import SlingshotLogo from '@/components/SlingshotLogo';
import { BrowserFrame } from '@/components/ProductMockups';

const SIGNIN_URL = 'https://app.slingshotiep.com/parent?signin=1';

// Google Calendar appointment schedule for Rob's free 30-minute IEP reviews.
const REVIEW_URL = 'https://calendar.app.google/YYXzftM3awYo9f5E7';

function TextMeForm({ className = '' }: { className?: string }) {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setStatus('submitting');
    try {
      await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="text-sm font-medium text-[#059669] shrink-0">
        Got it. Link on its way.
      </p>
    );
  }

  return (
    <div className={`flex flex-col gap-2 shrink-0 ${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="tel"
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Your phone number"
          className="rounded-lg border border-[#E8DFD0] bg-white text-[#2F2F2F] placeholder-[#C4B9A8] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:border-[#9FB7C8] focus:ring-[#9FB7C8]/20 w-44"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || !phone.trim()}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold bg-[#9FB7C8] text-white hover:bg-[#8BA5B5] disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="1.5" width="10" height="17" rx="2" />
            <line x1="9" y1="15.5" x2="11" y2="15.5" />
          </svg>
          {status === 'submitting' ? 'Sending…' : 'Text me the app'}
        </button>
      </form>
      <p className="text-xs text-[#B8AFA5] max-w-xs leading-relaxed">
        By submitting, you agree to receive one text message with a link to the app. Msg and data rates may apply. Reply STOP to opt out, HELP for help. See our{' '}
        <Link href="/privacy" className="underline hover:text-[#9B9086]">Privacy Policy</Link>.
      </p>
    </div>
  );
}

function ProContactForm({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');
    try {
      await fetch('/api/contact', {
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
    return <p className="text-sm font-medium text-[#059669]">Got it. We'll be in touch soon.</p>;
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
          {status === 'submitting' ? 'Sending...' : 'Get in touch'}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-xs text-red-400">Something went wrong. Email hello@slingshotiep.com directly.</p>
      )}
    </div>
  );
}

type Slide = {
  label: string;
  heading: string;
  body: string;
  cta: string;
  screenshot: string;
  mobileScreenshot?: string;
};

const WEB_SLIDES: Slide[] = [
  {
    label: 'YOUR IEP, ORGANIZED',
    heading: 'The IEP is written for the district, not for you.',
    body: 'Upload it and Slingshot reads it back to you: every goal, service, and accommodation, in plain language. No more flipping through 24 loose pages the night before. That energy goes to your child.',
    cta: 'Try it with your IEP',
    screenshot: '/web/screenshot-confirm-iep.png',
  },
  {
    label: 'STAY ON TOP OF THE CHAOS',
    heading: 'You deserve to feel all caught up.',
    body: 'Progress reports arrive on the school\'s schedule, therapy updates on another, and email whenever someone remembers. Slingshot pulls them into one status you can trust. When it says Looking good, it means it.',
    cta: 'Try it with your IEP',
    screenshot: '/web/screenshot-chaos-dashboard.png',
  },
  {
    label: 'YOUR STORY',
    heading: 'What you see at home belongs in the meeting.',
    body: 'Log daily observations on your phone. Connect therapy notes and progress reports. Slingshot carries it all into your meeting prep, so the team hears the full picture, not just the school\'s version.',
    cta: 'Build your story',
    screenshot: '/web/screenshot-your-story-web.png',
    mobileScreenshot: '/web/screenshot-your-story-mobile.png',
  },
];

function WebAppCarousel() {
  const [idx, setIdx] = useState(0);
  const s = WEB_SLIDES[idx] as typeof WEB_SLIDES[number];

  return (
    <div>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706] mb-3">{s.label}</p>
          <p className="text-2xl font-bold leading-snug max-w-sm">{s.heading}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          {/* Slide controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIdx(i => Math.max(0, i - 1))}
              disabled={idx === 0}
              className="w-8 h-8 rounded-full border border-[#E8DFD0] flex items-center justify-center disabled:opacity-25 hover:bg-[#FAF7F2] transition-colors"
              aria-label="Previous"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3L5 8l5 5"/></svg>
            </button>
            <span className="text-xs text-[#9B9086] tabular-nums w-8 text-center">{idx + 1} / {WEB_SLIDES.length}</span>
            <button
              onClick={() => setIdx(i => Math.min(WEB_SLIDES.length - 1, i + 1))}
              disabled={idx === WEB_SLIDES.length - 1}
              className="w-8 h-8 rounded-full border border-[#E8DFD0] flex items-center justify-center disabled:opacity-25 hover:bg-[#FAF7F2] transition-colors"
              aria-label="Next"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l5 5-5 5"/></svg>
            </button>
          </div>
          <a
            href={SIGNIN_URL}
            className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[#D97706] text-white hover:bg-[#B45309] transition-colors rounded-lg px-4 py-2"
          >
            {s.cta}
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>
      </div>

      <p className="text-base text-[#4B4540] leading-relaxed mb-6 max-w-lg">{s.body}</p>

      {/* Slide content */}
      {s.mobileScreenshot ? (
        <div className="flex gap-3 items-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.mobileScreenshot} alt="mobile app" className="w-[28%] shrink-0 rounded-2xl shadow-md" />
          <BrowserFrame className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.screenshot} alt={s.label} className="w-full block" />
          </BrowserFrame>
        </div>
      ) : s.screenshot ? (
        <BrowserFrame className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.screenshot} alt={s.label} className="w-full block" />
        </BrowserFrame>
      ) : null}

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-5">
        {WEB_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-[#D97706]' : 'bg-[#E8DFD0]'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const team = [
  {
    initials: 'RM',
    name: 'Rob Martin',
    role: 'Co-founder',
    bio: 'Rob is a healthcare product leader and the parent of a child with a disability. He has spent over 10 years designing and building person-centered technology and operational processes for Medicaid and Medicare patients at Kaiser Permanente, Aledade, and Heyday Health. Rob holds an MPH from Yale.',
    color: '#D97706',
    photo: '/team/rob-martin.jpg',
  },
  {
    initials: 'MM',
    name: 'Maddie Magnusson',
    role: 'Co-founder',
    bio: 'Maddie is a social-emotional learning specialist who has sat in more than 50 IEP meetings across DC, Maryland, and Virginia. Across her career in social learning and direct support roles, she has supported students with neurodiverse needs ages 4 to 22 in school, home, and community settings. Maddie holds an MS in Behavioral Psychology from Pepperdine University.',
    color: '#9FB7C8',
    photo: '/team/maddie-magnusson.jpg',
  },
  {
    initials: 'GZ',
    name: 'Greg Zorbas',
    role: 'Founding Advisor',
    bio: 'Greg is a healthcare and value-based care executive with 15 years of industry experience. As someone on the Autism spectrum, he is passionate about organizations that support the ASD community. Greg received his graduate degrees - MBA and Master of Healthcare Policy and Management, as well as his undergraduate degree from Carnegie Mellon University.',
    color: '#059669',
    photo: '/team/greg-zorbas.jpg',
  },
];

function TeamCarousel() {
  const [idx, setIdx] = useState(0);
  return (
    <div>
      {/* Cards */}
      <div className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none">
        {team.map((p) => (
          <div key={p.name} className="snap-start shrink-0 w-64 bg-white rounded-2xl border border-[#E8DFD0] p-5 flex flex-col gap-4">
            {p.photo ? (
              <img
                src={p.photo}
                alt={p.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-extrabold"
                style={{ backgroundColor: p.color }}
              >
                {p.initials}
              </div>
            )}
            <div>
              <p className="font-bold text-[#2F2F2F]">{p.name}</p>
              <p className="text-xs text-[#9B9086] mb-2">{p.role}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{p.bio}</p>
            </div>
          </div>
        ))}
        {/* Placeholder */}
        <div className="snap-start shrink-0 w-64 bg-[#FDFBF8] rounded-2xl border border-dashed border-[#E8DFD0] p-5 flex flex-col items-center justify-center gap-2 text-center">
          <div className="w-24 h-24 rounded-full bg-[#F0EBE3] flex items-center justify-center">
            <span className="text-[#B8AFA5] text-2xl">+</span>
          </div>
          <p className="text-sm text-[#B8AFA5]">More coming soon</p>
        </div>
      </div>
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
            <a href="#advocates" className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">For professionals</a>
            <a href="#about"     className="text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">About</a>
            <a href={SIGNIN_URL} className="text-xs font-semibold text-[#D97706] hover:text-[#B45309] transition-colors">Sign in</a>
          </div>
          <a href={SIGNIN_URL} className="sm:hidden text-xs text-[#9B9086] hover:text-[#2F2F2F] transition-colors">Sign in</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 sm:pt-20 pb-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.06] tracking-tight text-balance max-w-3xl mb-10">
          No parent should walk into an IEP meeting alone.
        </h1>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_22rem] gap-10 lg:gap-16 items-start">
          {/* Promise and action */}
          <div>
            <p className="text-lg text-[#4B4540] leading-relaxed max-w-md mb-8">
              Upload the IEP. Log what you see at home. Walk into the meeting with a record
              instead of a worry.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-lg px-6 h-12 text-sm font-semibold bg-[#D97706] text-white hover:bg-[#B45309] transition-colors"
              >
                Get a free IEP review
              </a>
              <a
                href={SIGNIN_URL}
                className="inline-flex items-center justify-center rounded-lg px-6 h-12 text-sm font-semibold border border-[#E8DFD0] text-[#6B6B6B] hover:text-[#2F2F2F] hover:border-[#C4B9A8] transition-colors"
              >
                Or start free on your own
              </a>
            </div>

            <p className="mt-5 text-sm text-[#6B6B6B] leading-relaxed max-w-md">
              Thirty minutes with Rob, at no cost. He is taking five families this month.
            </p>
            <p className="mt-2 text-xs text-[#9B9086] leading-relaxed max-w-md">
              Your child&rsquo;s documents stay private to your account. We never sell them and
              never share them for marketing.{' '}
              <Link href="/privacy" className="underline hover:text-[#6B6B6B]">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Who is behind this */}
          <aside className="w-full lg:w-[22rem] bg-white rounded-2xl border border-[#E8DFD0] p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9B9086] mb-4">
              Built by
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <img
                  src="/team/rob-martin.jpg"
                  alt="Rob Martin"
                  className="w-16 h-16 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-[#2F2F2F] leading-snug">Rob Martin</p>
                  <p className="text-sm text-[#6B6B6B] leading-snug mt-0.5">
                    BCASE-certified special education advocate, and the parent of a child with a
                    disability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="/team/maddie-magnusson.jpg"
                  alt="Maddie Magnusson"
                  className="w-16 h-16 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-[#2F2F2F] leading-snug">
                    Maddie Magnusson
                  </p>
                  <p className="text-sm text-[#6B6B6B] leading-snug mt-0.5">
                    Has sat in more than 50 IEP meetings across DC, Maryland, and Virginia.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Product showcase */}
      <section id="product" className="border-t border-[#EAE4DB] py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">

          {/* Web app carousel */}
          <div className="mb-24">
            <WebAppCarousel />
          </div>

          {/* Feature: Mobile — parent observations */}
          <div className="border-t border-[#F0EBE3] pt-20">
            <p className="text-sm font-bold uppercase tracking-widest text-[#9FB7C8] mb-3">Only in the mobile app</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <p className="text-2xl font-bold leading-snug max-w-md">You know your child better than anyone in that room.</p>
              <TextMeForm />
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Two phones */}
              <div className="flex gap-5 shrink-0">
                {/* Phone 1: logging */}
                <div className="w-[200px] rounded-[36px] border-4 border-[#2D2A26] overflow-hidden shadow-xl bg-[#FAF7F2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mobile/log.png" alt="Slingshot daily goal logging screen" className="w-full block" />
                </div>
                {/* Phone 2: meeting prep */}
                <div className="w-[200px] rounded-[36px] border-4 border-[#2D2A26] overflow-hidden shadow-xl bg-[#FAF7F2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mobile/prep.png" alt="Slingshot mobile meeting prep screen" className="w-full block" />
                </div>
              </div>

              {/* Copy */}
              <div className="space-y-6 max-w-sm pt-2">
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  The school team has their part of the picture. Your daily observations complete it. Log what you notice: what's improving, what's still hard, what you want the team to know.
                </p>
                <div>
                  <p className="text-sm font-semibold mb-1">Your observations, connected to their goals.</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">Slingshot maps your notes to IEP goals over time, so you don't just show up with feelings. You show up with a record.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">The evidence that changes the IEP.</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">Parent insight, trended and in context, is almost always the gap in the room. Slingshot helps you fill it.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advocates / professionals */}
      <section id="advocates" className="bg-[#FDFBF8] border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-2xl font-bold mb-4 max-w-sm leading-snug">For advocates, teachers, or professionals.</p>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-sm mb-6">
            If you carry a caseload of families through IEPs, we want to build around how you already work. Leave your email and Rob will reach out personally.
          </p>
          <ProContactForm className="max-w-sm" />
        </div>
      </section>

      {/* About — team carousel */}
      <section id="about" className="border-t border-[#EAE4DB] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-2xl font-bold mb-2">We've been in your seat.</p>
          <p className="text-sm text-[#9B9086] mb-8">The team that built Slingshot has sat on both sides of the IEP table.</p>
          <TeamCarousel />
        </div>
      </section>

    </div>
  );
}
