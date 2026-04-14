"use client";

const comparisons = [
  {before:"Posting occasionally when you have time — long gaps that kill momentum",after:"Consistent content published on a strategic schedule across every platform, every week"},
  {before:"Guessing what to post based on what you think looks good",after:"AI-powered content strategy built around your brand, your audience, and what the data says works"},
  {before:"Generic captions and visuals that blend in with everything else",after:"Content engineered to stop the scroll — hooks, structure, and visuals that outperform your niche"},
  {before:"No idea what's performing, what's failing, or why",after:"Full performance dashboard showing views, engagement, follower growth, and reach — with clear action items"},
];

const platforms = ["TikTok","Instagram","Facebook","LinkedIn","YouTube Shorts","X / Twitter"];

export default function BeforeAfter() {
  return (
    <section id="solution" className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>Before vs After</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            What Changes When Your{" "}
            <span className="text-purple-400">Content Works For You</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Same business. Same service. More visibility, more trust, more inbound — because your content is consistent and built to perform.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-2 max-w-5xl mx-auto">
          <div className="pain-card px-4 py-2.5"><span className="text-red-400 text-xs font-semibold tracking-wider uppercase" style={{fontFamily:"var(--font-mono)"}}>⚠ Without</span></div>
          <div className="solution-card px-4 py-2.5"><span className="text-purple-400 text-xs font-semibold tracking-wider uppercase" style={{fontFamily:"var(--font-mono)"}}>✦ With OTAI</span></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-2 mb-8 md:mb-10">
          {comparisons.map((row,i) => (
            <div key={i} className="grid grid-cols-2 gap-3 reveal">
              <div className="pain-card p-4 md:p-5"><p className="text-red-300 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>{row.before}</p></div>
              <div className="solution-card p-4 md:p-5"><p className="text-purple-200 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>{row.after}</p></div>
            </div>
          ))}
        </div>

        {/* Platforms */}
        <div className="max-w-5xl mx-auto mb-8 reveal">
          <p className="text-center text-slate-500 text-xs tracking-wider uppercase mb-4" style={{fontFamily:"var(--font-mono)"}}>Platforms we manage</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {platforms.map(p => (
              <div key={p} className="flex items-center gap-2 bg-dark-200/60 border border-purple-900/25 rounded-full px-3 md:px-4 py-2 hover:border-purple-700/50 transition-colors">
                <span className="text-slate-300 text-sm font-medium" style={{fontFamily:"var(--font-body)"}}>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto gradient-border overflow-hidden reveal">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-6 md:p-8 text-center md:border-r border-purple-900/30">
              <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2" style={{fontFamily:"var(--font-display)"}}>0</div>
              <p className="text-slate-400 text-sm md:text-base leading-[1.65]" style={{fontFamily:"var(--font-body)"}}>New audience built from doing nothing — it compounds backward</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="text-2xl text-purple-700">→</div>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-purple-900/30 p-6 md:p-8 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2" style={{fontFamily:"var(--font-display)"}}>30M+</div>
              <p className="text-slate-400 text-sm md:text-base leading-[1.65]" style={{fontFamily:"var(--font-body)"}}>Views generated through strategic organic content — zero ad spend</p>
            </div>
          </div>
          <div className="border-t border-purple-900/40"/>
          <div className="px-6 md:px-8 py-4 md:py-5 text-center">
            <p className="text-slate-300 text-sm md:text-base leading-[1.75]" style={{fontFamily:"var(--font-body)"}}>
              Organic reach compounds over time. Every piece of content builds on the last.{" "}
              <span className="text-purple-400 font-semibold">The businesses that start now are the ones that own the attention later.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
