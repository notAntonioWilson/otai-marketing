"use client";

const included = [
  "Monthly content strategy built to your brand and niche",
  "AI-assisted short-form video scripts and hooks",
  "Graphic and visual content creation",
  "Caption writing in your brand voice",
  "Content calendar — planned and approved each month",
  "Scheduled posting across all your active platforms",
  "Live performance dashboard — views, engagement, growth",
  "Weekly performance summary with action items",
  "Content repurposing across platforms",
  "Monthly strategy review and optimization",
];

const upcharges = [
  {icon:"🎥",label:"In-Person Filming",desc:"We come to your location and capture original content — premium add-on"},
  {icon:"📝",label:"Full Scripting",desc:"Detailed word-for-word scripts with delivery coaching — premium add-on"},
];

const timeline = [
  {days:"Week 1",label:"Onboarding & Strategy",desc:"Brand audit, competitor analysis, content pillars defined, first month planned"},
  {days:"Week 2",label:"Content Creation",desc:"First batch created, reviewed, and approved — you see everything before it posts"},
  {days:"Week 3",label:"Go Live",desc:"Content starts publishing on schedule. Dashboard goes live. Tracking begins."},
  {days:"Ongoing",label:"Optimize & Grow",desc:"Weekly reports, monthly strategy reviews, continuous improvement based on data"},
];

export default function Scope() {
  return (
    <section className="py-16 md:py-20 relative grid-texture">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>What's Included</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Everything You Get. <span className="text-purple-400">Nothing Hidden.</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Done-for-you social media. You approve the content. We handle everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6">
          <div className="reveal">
            <div className="solution-card p-6 md:p-8 h-full">
              <h3 className="text-white font-semibold text-lg md:text-xl mb-5" style={{fontFamily:"var(--font-display)"}}>Included Every Month</h3>
              <div className="space-y-3">
                {included.map((item,i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-600/25 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2L7.5 2" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p className="text-slate-300 text-sm md:text-base leading-[1.65]" style={{fontFamily:"var(--font-body)"}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="gradient-border p-6 md:p-8 h-full">
              <h3 className="text-white font-semibold text-lg md:text-xl mb-5" style={{fontFamily:"var(--font-display)"}}>Getting Started Timeline</h3>
              <div className="space-y-0">
                {timeline.map((item,i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-600/25 border border-purple-500/50 flex items-center justify-center text-purple-400 text-xs font-semibold flex-shrink-0"
                        style={{fontFamily:"var(--font-mono)"}}>{i+1}</div>
                      {i<timeline.length-1&&<div className="w-px flex-1 mt-1 mb-1 bg-purple-900/30" style={{minHeight:"20px"}}/>}
                    </div>
                    <div className="pb-5">
                      <div className="text-purple-400 text-xs tracking-wide mb-1" style={{fontFamily:"var(--font-mono)"}}>{item.days}</div>
                      <div className="text-white font-semibold text-sm md:text-base mb-1" style={{fontFamily:"var(--font-display)"}}>{item.label}</div>
                      <div className="text-slate-400 text-sm md:text-base leading-[1.65]" style={{fontFamily:"var(--font-body)"}}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto reveal">
          <p className="text-center text-slate-500 text-xs tracking-wider uppercase mb-4" style={{fontFamily:"var(--font-mono)"}}>Available add-ons</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {upcharges.map(u => (
              <div key={u.label} className="gradient-border p-5 flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{u.icon}</div>
                <div>
                  <div className="text-white font-semibold text-base mb-1" style={{fontFamily:"var(--font-display)"}}>{u.label}</div>
                  <div className="text-slate-400 text-sm leading-[1.65]" style={{fontFamily:"var(--font-body)"}}>{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
