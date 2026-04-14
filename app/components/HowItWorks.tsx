"use client";

const steps = [
  {number:"01",title:"Strategy",body:"We audit your brand, your audience, and your competitors. Then we build a content strategy around what performs in your niche — not guesswork, not templates."},
  {number:"02",title:"Create",body:"AI-assisted content creation across formats — short-form video scripts, captions, graphics, hooks. Everything built to your brand voice and optimized to stop the scroll."},
  {number:"03",title:"Post",body:"We handle scheduling and publishing across every platform on your content calendar. Consistent, on-brand, and timed to when your audience is actually online."},
  {number:"04",title:"Optimize",body:"Every week you get a performance breakdown showing what's working, what's growing, and where we're doubling down. Your content improves every cycle."},
];

const deliverables = [
  {icon:"📋",label:"Monthly Content Strategy"},
  {icon:"🎬",label:"Short-Form Video Scripts"},
  {icon:"🖼️",label:"Graphics & Visual Content"},
  {icon:"✍️",label:"AI-Written Captions"},
  {icon:"📅",label:"Scheduled Posting"},
  {icon:"📊",label:"Performance Dashboard"},
  {icon:"📈",label:"Weekly Growth Reports"},
  {icon:"🎯",label:"Audience & Niche Analysis"},
  {icon:"🔁",label:"Content Repurposing"},
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 relative grid-texture">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>The System</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>How It Works</h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Strategy, creation, posting, and optimization.{" "}
            <span className="text-white font-medium">You review and approve. We execute.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 md:mb-12">
          {steps.map((step,i) => (
            <div key={i} className="relative reveal">
              {i<steps.length-1&&<div className="hidden lg:block absolute top-7 left-full w-full h-px z-0" style={{background:"linear-gradient(90deg,rgba(147,51,234,.35),transparent)"}}/>}
              <div className="gradient-border p-5 md:p-6 h-full relative z-10">
                <div className="text-2xl md:text-3xl font-bold text-purple-900 mb-3" style={{fontFamily:"var(--font-display)"}}>{step.number}</div>
                <h3 className="text-white font-semibold text-base md:text-lg mb-2" style={{fontFamily:"var(--font-display)"}}>{step.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mb-10 md:mb-12">
          <p className="text-center text-slate-500 text-xs tracking-wider uppercase mb-4" style={{fontFamily:"var(--font-mono)"}}>What's included every month</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {deliverables.map(d => (
              <div key={d.label} className="flex items-center gap-2 bg-dark-200/60 border border-purple-900/25 rounded-full px-3 md:px-4 py-2 hover:border-purple-700/50 transition-colors">
                <span className="text-sm">{d.icon}</span>
                <span className="text-slate-300 text-sm md:text-base font-medium" style={{fontFamily:"var(--font-body)"}}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gradient-border px-6 md:px-8 py-6 md:py-7 text-center reveal">
          <p className="text-white text-base md:text-xl leading-[1.8] mb-4" style={{fontFamily:"var(--font-body)"}}>
            "We build the strategy, create the content, post it consistently, and optimize based on live data — so your brand grows while you focus on running your business."
          </p>
          <p className="text-slate-400 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Most businesses try posting themselves and burn out, or hire someone who doesn't understand their niche. We've been doing this for 3+ years and built frameworks that consistently generate real reach.{" "}
            <span className="text-purple-400 font-medium">Content that performs isn't luck — it's structure.</span>
          </p>
        </div>

        {/* Dashboard callout */}
        <div className="mt-4 md:mt-5 reveal">
          <div className="solution-card p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="text-3xl md:text-4xl flex-shrink-0">📊</div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/40 rounded-full px-3 py-1 mb-2">
                <span className="text-purple-300 text-xs font-semibold tracking-wider uppercase" style={{fontFamily:"var(--font-mono)"}}>Included Free</span>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2" style={{fontFamily:"var(--font-display)"}}>Live Performance Dashboard</h3>
              <p className="text-slate-400 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
                Every platform tracked in one place — views, engagement, follower growth, reach, and top-performing content. Updated continuously so you always know exactly what your social media is producing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
