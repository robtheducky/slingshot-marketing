// Static mockups of the Slingshot app UI for the marketing site.
// Placeholder child: "Alex" / Riverside Elementary / Grade 3

function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: 180, flexShrink: 0 }}>
      {/* Phone shell */}
      <div className="relative rounded-[28px] overflow-hidden border-[3px] border-[#2D2A26] bg-[#FAF7F2] shadow-2xl" style={{ minHeight: 360 }}>
        {/* Status bar */}
        <div className="bg-[#FAF7F2] px-4 pt-2 pb-1 flex items-center justify-between">
          <span className="text-[7px] font-semibold text-[#2F2F2F]">9:41</span>
          <div className="w-10 h-3 rounded-full bg-[#2D2A26] mx-auto absolute left-1/2 -translate-x-1/2 top-1" />
          <div className="flex items-center gap-1">
            <div className="flex gap-px items-end h-2">
              {[2,3,4,5].map(h => <div key={h} className="w-0.5 bg-[#2F2F2F] rounded-sm" style={{ height: h }} />)}
            </div>
            <svg className="w-2.5 h-2.5 text-[#2F2F2F]" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.5a13 13 0 0121 0M5 12a10 10 0 0114 0M8.5 15.5a6 6 0 017 0M12 19h.01"/></svg>
          </div>
        </div>
        {children}
        {/* Home indicator */}
        <div className="pb-2 flex justify-center bg-[#FAF7F2]">
          <div className="w-16 h-1 rounded-full bg-[#2D2A26]/20" />
        </div>
      </div>
    </div>
  );
}

function BrowserFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-[#E0D8CC] bg-white ${className}`}>
      {/* Browser chrome */}
      <div className="bg-[#F2EDE7] border-b border-[#E0D8CC] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8C9B8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8D8B8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C8D8B8]" />
        </div>
        <div className="flex-1 mx-3 bg-white/60 rounded text-[9px] text-[#9B9086] px-2 py-0.5 text-center">
          app.slingshotiep.com
        </div>
      </div>
      {children}
    </div>
  );
}

function SlingshotHeader() {
  return (
    <div className="px-4 pt-4 pb-3 border-b border-[#F0EBE3]">
      <p className="text-[#D97706] font-extrabold text-lg tracking-tight leading-none">slingshot</p>
      <p className="text-[8px] font-bold text-[#9FB7C8] tracking-[.12em] uppercase mt-0.5">Your Child's IEP, Organized</p>
    </div>
  );
}

export function DashboardMockup({ className = '' }: { className?: string }) {
  return (
    <BrowserFrame className={className}>
      <div className="bg-[#FAF7F2] text-[#2F2F2F] text-[11px]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <SlingshotHeader />
        <div className="px-4 pt-4 pb-5 space-y-4">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#9FB7C8]">Home</p>
            <p className="text-xl font-bold mt-0.5">Alex</p>
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#9FB7C8] mb-2">Your Next Step</p>
            <div className="bg-white rounded-xl border border-[#E8DFD0] p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {['Active IEP', 'Approved', 'Learning Disability'].map(tag => (
                    <span key={tag} className="text-[8px] font-medium px-2 py-0.5 rounded-full border border-[#E8DFD0] text-[#6B6B6B]">{tag}</span>
                  ))}
                </div>
                <button className="bg-[#D97706] text-white text-[9px] font-bold px-2.5 py-1 rounded-lg whitespace-nowrap">Prep for meeting</button>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-base font-extrabold leading-none">14 <span className="text-[9px] font-semibold text-[#6B6B6B]">hrs/wk</span></p>
                  <p className="text-[7px] uppercase tracking-widest text-[#9B9086] mt-0.5">Per Week</p>
                </div>
                <div>
                  <p className="text-base font-extrabold leading-none">4</p>
                  <p className="text-[7px] uppercase tracking-widest text-[#9B9086] mt-0.5">Goals</p>
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Feb 15, 2027</p>
                  <p className="text-[7px] uppercase tracking-widest text-[#9B9086] mt-0.5">Next Review</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-[#F0EBE3]">
                <p className="text-[8px] text-[#9FB7C8]"><span className="font-bold uppercase tracking-widest">North Star</span> &nbsp;Competitive employment · Standard diploma</p>
                <span className="text-[8px] text-[#9FB7C8]">Edit</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-widest text-[#9FB7C8] mb-2">Current Status</p>
            <div className="bg-white rounded-xl border border-[#E8DFD0] p-3 space-y-2">
              <div className="flex items-center gap-2 bg-red-50 rounded-lg px-2 py-1.5">
                <span className="text-[9px] text-red-500 font-bold">!</span>
                <span className="text-[9px] font-semibold text-[#2F2F2F]">Needs your attention</span>
                <span className="ml-auto bg-red-100 text-red-600 text-[8px] font-bold px-1.5 py-0.5 rounded-full">2</span>
              </div>
              <div className="bg-[#FEF3C7] rounded-lg px-2.5 py-2">
                <p className="text-[8px] font-bold uppercase tracking-widest text-[#D97706] mb-1">Present Levels</p>
                <p className="text-[9px] font-semibold text-[#2F2F2F]">1 area of need has no supporting goal</p>
                <p className="text-[8px] text-[#6B6B6B] mt-0.5 leading-relaxed">An area of need is described with no corresponding annual goal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export function PacketMockup({ className = '' }: { className?: string }) {
  const points = [
    {
      num: 1,
      headline: 'Reading fluency goal lacks measurable baseline',
      sub: 'The goal does not specify the current performance level.',
      what: "Could we establish where Alex is starting from so we can measure real progress this year?",
      quote: 'By February 2027, Alex will read grade-level passages at 90 words per minute with 95% accuracy, as measured by...',
      source: 'IEP Goal',
    },
    {
      num: 2,
      headline: 'Written expression — target criteria is vague',
      sub: "'Functionally within the classroom' is not specific or measurable.",
      what: "Can we define what success looks like concretely for writing tasks?",
      quote: 'Alex will demonstrate written expression skills needed to complete classroom tasks functionally within the classroom...',
      source: 'IEP Goal',
    },
  ];

  return (
    <BrowserFrame className={className}>
      <div className="bg-[#FAF7F2] text-[#2F2F2F] text-[11px]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <SlingshotHeader />
        <div className="px-4 pt-4 pb-5 space-y-3">
          <div>
            <p className="text-lg font-bold">Your meeting prep</p>
            <p className="text-[9px] text-[#6B6B6B] mt-0.5">Finalized agenda for Alex's meeting.</p>
          </div>

          {/* iOS nudge */}
          <div className="rounded-xl border border-[#9FB7C8]/30 bg-[#F0F6FA] px-3 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#9FB7C8]/20 flex items-center justify-center shrink-0">
              <svg className="w-3 h-3 text-[#9FB7C8]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="1.5" width="10" height="17" rx="2" />
                <line x1="9" y1="15.5" x2="11" y2="15.5" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-semibold text-[#2D2A26]">Use this during your meeting</p>
              <p className="text-[8px] text-[#6B6B6B]">Download the Slingshot app to follow along live.</p>
            </div>
          </div>

          {/* Talking points */}
          {points.map(p => (
            <div key={p.num} className="rounded-xl border border-[#D97706] bg-white overflow-hidden">
              <div className="pl-4 pr-3 py-2.5 flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#D97706] text-white text-[8px] font-bold flex items-center justify-center shrink-0 mt-0.5">{p.num}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-bold text-[#2D2A26] leading-snug">{p.headline}</p>
                  <p className="text-[8px] text-[#6B7280] mt-0.5">{p.sub}</p>
                </div>
              </div>
              <div className="border-t border-[#F0EBE3]">
                <div className="bg-[#FFFBF5] border-b border-[#F0EBE3] pl-4 pr-3 py-2">
                  <p className="text-[7px] font-bold uppercase tracking-[.08em] text-[#D97706] mb-1">What to say</p>
                  <p className="text-[9px] text-[#2D2A26] leading-relaxed">{p.what}</p>
                </div>
                <div className="pl-4 pr-3 py-2">
                  <p className="text-[7px] font-bold uppercase tracking-[.08em] text-[#9FB7C8] mb-1">From {p.source}</p>
                  <blockquote className="text-[8px] text-[#6B7280] italic bg-[#F9F6F1] border-l-2 border-[#E8DFD0] px-2 py-1.5 rounded-r leading-relaxed">{p.quote}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function GoalLoggingMobileMockup({ className = '' }: { className?: string }) {
  const entries = [
    { date: 'Jun 9', note: 'Read 3 pages of Diary of a Wimpy Kid aloud — fewer hesitations than last week.', by: 'You' },
    { date: 'Jun 5', note: 'Struggled at 12 min mark. Switched to whisper reading. Finished the chapter.', by: 'You' },
  ];

  return (
    <PhoneFrame className={className}>
      <div className="px-3 pb-3 space-y-2.5 text-[#2F2F2F]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        {/* Back nav */}
        <div className="flex items-center gap-1 mb-1">
          <svg className="w-2.5 h-2.5 text-[#D97706]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 4l-6 6 6 6"/></svg>
          <span className="text-[8px] font-semibold text-[#D97706]">Goals</span>
        </div>

        {/* Goal header */}
        <div className="bg-white rounded-xl border border-[#E8DFD0] p-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
            <p className="text-[7px] font-bold uppercase tracking-widest text-blue-600">Reading Fluency</p>
          </div>
          <p className="text-[8px] text-[#2F2F2F] leading-relaxed">By Feb 2027, Alex will read grade-level passages at 90 wpm with 95% accuracy.</p>
          <div className="mt-2 bg-[#F0F6FA] rounded-lg px-2 py-1.5">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[7px] font-bold uppercase tracking-widest text-[#9FB7C8]">Progress</p>
              <p className="text-[7px] font-bold text-[#2F2F2F]">72 wpm</p>
            </div>
            <div className="w-full h-1.5 bg-[#E8DFD0] rounded-full overflow-hidden">
              <div className="h-full bg-[#D97706] rounded-full" style={{ width: '72%' }} />
            </div>
            <p className="text-[7px] text-[#9B9086] mt-0.5">Baseline: 58 wpm · Target: 90 wpm</p>
          </div>
        </div>

        {/* Log note CTA */}
        <button className="w-full bg-[#D97706] text-white text-[9px] font-bold rounded-xl py-2 flex items-center justify-center gap-1.5">
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="10" cy="10" r="8"/><line x1="10" y1="7" x2="10" y2="13"/><line x1="7" y1="10" x2="13" y2="10"/></svg>
          Log an observation
        </button>

        {/* Recent entries */}
        <div>
          <p className="text-[7px] font-bold uppercase tracking-widest text-[#9FB7C8] mb-1.5">Recent notes</p>
          <div className="space-y-1.5">
            {entries.map((e, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E8DFD0] px-2.5 py-2">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[7px] font-semibold text-[#D97706]">{e.date}</p>
                  <p className="text-[7px] text-[#9B9086]">{e.by}</p>
                </div>
                <p className="text-[8px] text-[#2F2F2F] leading-relaxed">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export function MeetingPrepMobileMockup({ className = '' }: { className?: string }) {
  const points = [
    {
      num: 1,
      headline: 'Reading fluency goal lacks measurable baseline',
      what: "Could we establish where Alex is starting from so we can measure real progress this year?",
      done: false,
    },
    {
      num: 2,
      headline: 'Written expression criteria is vague',
      what: "Can we define what success looks like concretely for writing tasks?",
      done: true,
    },
    {
      num: 3,
      headline: 'OT service frequency reduced from last IEP',
      what: "What data supports reducing from 60 to 30 min/week?",
      done: false,
    },
  ];

  return (
    <PhoneFrame className={className}>
      <div className="px-3 pb-3 space-y-2.5 text-[#2F2F2F]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        {/* Header */}
        <div className="mb-0.5">
          <p className="text-[10px] font-bold leading-tight">Meeting prep</p>
          <p className="text-[7px] text-[#9B9086]">Tap a point when addressed</p>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-xl border border-[#E8DFD0] px-2.5 py-2">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[7px] font-bold uppercase tracking-widest text-[#9B9086]">Addressed</p>
            <p className="text-[8px] font-bold text-[#2F2F2F]">1 of 3</p>
          </div>
          <div className="w-full h-1.5 bg-[#E8DFD0] rounded-full overflow-hidden">
            <div className="h-full bg-[#D97706] rounded-full transition-all" style={{ width: '33%' }} />
          </div>
        </div>

        {/* Talking points */}
        <div className="space-y-1.5">
          {points.map(p => (
            <div key={p.num} className={`rounded-xl border overflow-hidden ${p.done ? 'border-emerald-200 bg-emerald-50/50 opacity-60' : 'border-[#D97706] bg-white'}`}>
              <div className="px-2.5 py-2 flex items-start gap-2">
                <div className={`w-4 h-4 rounded-full text-white text-[7px] font-bold flex items-center justify-center shrink-0 mt-px ${p.done ? 'bg-emerald-500' : 'bg-[#D97706]'}`}>
                  {p.done ? '✓' : p.num}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[8px] font-bold text-[#2D2A26] leading-snug">{p.headline}</p>
                  {!p.done && (
                    <div className="mt-1 bg-[#FFFBF5] rounded-lg px-1.5 py-1">
                      <p className="text-[7px] font-bold uppercase tracking-[.08em] text-[#D97706] mb-0.5">Say</p>
                      <p className="text-[7.5px] text-[#2D2A26] leading-relaxed">{p.what}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function IepDetailMockup({ className = '' }: { className?: string }) {
  return (
    <BrowserFrame className={className}>
      <div className="bg-[#FAF7F2] text-[#2F2F2F] text-[11px]" style={{ fontFamily: 'system-ui, sans-serif' }}>
        <SlingshotHeader />
        <div className="px-4 pt-4 pb-5 space-y-3">
          {/* Roadmap strip */}
          <div className="flex items-center justify-between bg-white rounded-xl border border-[#E8DFD0] px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#FEF3C7] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              </div>
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#D97706]">Roadmap</span>
              <span className="text-[9px] text-[#6B6B6B]">Competitive employment · Standard diploma</span>
            </div>
          </div>

          {/* IEP card */}
          <div className="bg-white rounded-xl border border-[#E8DFD0] p-3">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-bold">Alex's IEP</p>
                <p className="text-[8px] text-[#9B9086] mt-0.5">Annual review: 2026-01-15 &nbsp;·&nbsp; Riverside Elementary &nbsp;·&nbsp; Grade 3</p>
              </div>
              <span className="text-[8px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Confirmed</span>
            </div>
            <div className="flex gap-4 text-[9px] mb-2">
              <span><span className="font-bold">14 hr</span> <span className="text-[#9B9086]">per week</span></span>
              <span><span className="font-bold">60.7 hr</span> <span className="text-[#9B9086]">per month</span></span>
              <span className="text-[#9B9086]">across 3 services</span>
            </div>
            <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">92% time in general ed</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-0.5">
            {['Goals 4', 'Services 3', 'Accommodations 4', 'Present Levels 9'].map((tab, i) => (
              <button key={tab} className={`text-[8px] font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 ${i === 0 ? 'bg-[#D97706] text-white' : 'bg-white border border-[#E8DFD0] text-[#6B6B6B]'}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Gap alert */}
          <div className="rounded-xl border border-amber-200 bg-[#FFFBF5] p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-[#D97706] text-white text-[8px] font-bold flex items-center justify-center">!</div>
              <p className="text-[9px] font-semibold">1 area of need may not have a supporting goal</p>
            </div>
            <div className="bg-white rounded-lg border border-[#E8DFD0] p-2">
              <p className="text-[8px] font-semibold text-[#2F2F2F] leading-relaxed">Writing presents the most substantial challenge, often triggering dysregulation and resulting in work avoidance.</p>
              <p className="text-[8px] text-[#6B6B6B] mt-1">Alex is very capable and has great ideas — sustained focus on writing tasks is the primary barrier.</p>
            </div>
          </div>

          {/* A goal */}
          <div className="bg-white rounded-xl border border-[#E8DFD0] p-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 mt-1 shrink-0" />
              <div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-blue-600 mb-1">Academic — Reading Fluency</p>
                <p className="text-[9px] text-[#2F2F2F] leading-relaxed">By February 2027, Alex will read grade-level passages at 90 words per minute with 95% accuracy, as measured by bi-weekly curriculum-based measurement.</p>
                <p className="text-[8px] text-[#9B9086] mt-1.5 font-semibold uppercase tracking-widest">Measured by</p>
                <p className="text-[8px] text-[#6B6B6B]">CBM oral reading fluency, bi-weekly progress monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
