'use client';

import { useState } from 'react';
import Link from 'next/link';
import SlingshotLogo from '@/components/SlingshotLogo';
import { APP_IFSP_URL, copy, type Lang } from '@/lib/turning3';

const input =
  'w-full rounded-lg border border-[#E8DFD0] bg-white text-[#2F2F2F] placeholder-[#C4B9A8] px-3 py-2.5 text-base focus:outline-none focus:ring-2 focus:border-[#9FB7C8] focus:ring-[#9FB7C8]/20';

function InterestForm({ lang, source }: { lang: Lang; source: string }) {
  const t = copy(lang);
  const [firstName, setFirstName] = useState('');
  const [contact, setContact] = useState('');
  const [language, setLanguage] = useState<Lang>(lang);
  const [month, setMonth] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !contact.trim()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/turning3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, contact, language, month, source, page: lang }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p role="status" className="rounded-xl border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-4 text-base font-medium text-[#065F46]">
        {t.done}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-[#2F2F2F]">
        {t.firstName}
        <input className={input} required autoComplete="given-name" maxLength={80}
          value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-[#2F2F2F]">
        {t.contact}
        <input className={input} required autoComplete="email" maxLength={120}
          value={contact} onChange={e => setContact(e.target.value)} />
      </label>
      <fieldset className="flex flex-col gap-1.5 text-sm font-medium text-[#2F2F2F]">
        <legend className="mb-1.5">{t.language}</legend>
        <div className="flex gap-5">
          {(['en', 'es'] as const).map(l => (
            <label key={l} className="inline-flex items-center gap-2 font-normal text-base">
              <input type="radio" name="language" value={l} checked={language === l}
                onChange={() => setLanguage(l)} className="h-4 w-4 accent-[#D97706]" />
              {l === 'en' ? t.langEn : t.langEs}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-[#2F2F2F]">
        {t.month}
        <select className={input} value={month} onChange={e => setMonth(e.target.value)}>
          <option value="">{t.monthNone}</option>
          {t.months.map((m, i) => <option key={m} value={String(i + 1)}>{m}</option>)}
        </select>
      </label>
      <button type="submit" disabled={status === 'submitting' || !firstName.trim() || !contact.trim()}
        className="rounded-lg px-5 py-3 text-base font-semibold bg-[#D97706] text-white hover:bg-[#B45309] disabled:opacity-50 transition-colors">
        {status === 'submitting' ? t.submitting : t.submit}
      </button>
      {status === 'error' && <p role="alert" className="text-sm text-[#B91C1C]">{t.error}</p>}
    </form>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map(item => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-[#2F2F2F]">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D97706]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// partner is resolved on the server from the referral code; this component
// never sees the code -> partner map.
export default function TurningThree({ lang, source, partner }: { lang: Lang; source: string; partner: string | null }) {
  const t = copy(lang);
  const qs = source ? `?utm_source=${encodeURIComponent(source)}&utm_medium=flyer&utm_campaign=turning3` : '';
  const otherHref = (lang === 'en' ? '/es/turning3' : '/turning3') + qs;
  const appHref = `${APP_IFSP_URL}?utm_source=${encodeURIComponent(source || 'turning3')}&utm_medium=referral&utm_campaign=turning3&district=mcps`; // this page is for Montgomery County families; the app pre-selects, the family confirms

  return (
    <main lang={lang} className="mx-auto max-w-2xl px-5 py-8 sm:py-12 text-[#2F2F2F]">
      <div className="flex items-center justify-between mb-8">
        <Link href="/" aria-label="Slingshot IEP"><SlingshotLogo size="sm" /></Link>
        <Link href={otherHref} lang={lang === 'en' ? 'es' : 'en'}
          className="text-sm font-semibold text-[#2F2F2F] underline underline-offset-4 decoration-[#D97706]">
          {t.switchLabel}
        </Link>
      </div>

      {partner && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#6B6B6B]">{t.sharedBy(partner)}</p>
      )}
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-balance mb-4">{t.title}</h1>
      <p className="text-lg leading-relaxed text-[#4A4A4A] mb-6">{t.subtitle}</p>

      <div className="rounded-xl border border-[#E8DFD0] bg-[#FFF8EB] px-5 py-4 mb-8 text-base leading-relaxed">
        <strong>{t.statusStrong}</strong> {t.statusRest}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <a href="#interest" className="text-center rounded-lg px-5 py-3 text-base font-semibold bg-[#D97706] text-white hover:bg-[#B45309] transition-colors">
          {t.formTitle}
        </a>
        <a href="#try" className="text-center rounded-lg px-5 py-3 text-base font-semibold border border-[#E8DFD0] bg-white hover:bg-[#F5EFE6] transition-colors">
          {t.tryButton}
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">{t.whoTitle}</h2>
        <List items={t.who} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">{t.getTitle}</h2>
        <List items={t.get} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">{t.howTitle}</h2>
        <ol className="flex flex-col gap-4">
          {t.how.map((step, i) => (
            <li key={step} className="flex gap-4 text-base leading-relaxed">
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#D97706] text-sm font-bold text-[#D97706]">{i + 1}</span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="interest" className="mb-12 scroll-mt-6 rounded-2xl border border-[#E8DFD0] bg-white p-6">
        <h2 className="text-xl font-bold mb-2">{t.formTitle}</h2>
        <p className="text-sm leading-relaxed text-[#6B6B6B] mb-5">{t.formIntro}</p>
        <InterestForm lang={lang} source={source} />
      </section>

      <section id="try" className="mb-12 scroll-mt-6">
        <h2 className="text-xl font-bold mb-2">{t.tryTitle}</h2>
        <p className="text-base leading-relaxed text-[#4A4A4A] mb-4">{t.tryBody}</p>
        <a href={appHref} className="inline-block rounded-lg px-5 py-3 text-base font-semibold border border-[#E8DFD0] bg-white hover:bg-[#F5EFE6] transition-colors">
          {t.tryButton}
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">{t.privacyTitle}</h2>
        <List items={t.privacy} />
      </section>

      <section className="mb-10 flex gap-4 items-start">
        <img src="/team/rob-martin.jpg" alt="" className="h-16 w-16 rounded-full object-cover shrink-0" />
        <div>
          <h2 className="text-xl font-bold mb-2">{t.aboutTitle}</h2>
          <p className="text-base leading-relaxed text-[#4A4A4A] mb-3">{t.about}</p>
          <p className="text-base leading-relaxed">
            <strong>{t.questions}</strong>{' '}
            <a href="mailto:rob@slingshotiep.com" className="underline underline-offset-4">rob@slingshotiep.com</a>
            {' · '}
            <a href="tel:+13014565187" className="underline underline-offset-4">(301) 456-5187</a>
            <br />
            <span className="font-semibold text-[#D97706]">{t.spanish}</span>
          </p>
        </div>
      </section>

      {partner && <p className="text-sm text-[#6B6B6B]">{t.partnerNote(partner)}</p>}
    </main>
  );
}
