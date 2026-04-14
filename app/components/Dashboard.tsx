"use client";

const platforms = [
  {name:"TikTok",    color:"#a855f7", views:"4,881,860", engagement:"45,491", followers:"5,082",  posts:"84"},
  {name:"Facebook",  color:"#3b82f6", views:"4,387,754", engagement:"42,449", followers:"1,200",  posts:"84"},
  {name:"Instagram", color:"#ec4899", views:"494,106",   engagement:"2,889",  followers:"269",    posts:"84"},
  {name:"LinkedIn",  color:"#0ea5e9", views:"3,495",     engagement:"150",    followers:"2,813",  posts:"12"},
  {name:"YouTube",   color:"#ef4444", views:"—",         engagement:"—",      followers:"—",      posts:"—"},
  {name:"X/Twitter", color:"#64748b", views:"—",         engagement:"—",      followers:"—",      posts:"—"},
];

const topContent = [
  {title:"How to Tighten a Loose Corner", views:"2.2M"},
  {title:"A Quick How To",                views:"1.3M"},
  {title:"Huge Transformation",           views:"399K"},
  {title:"The Perfect Fit",               views:"144K"},
];

const recentActivity = [
  {action:"Reel published — TikTok & Instagram", time:"2h ago",    status:"live"},
  {action:"Monthly report ready for review",     time:"Yesterday", status:"report"},
  {action:"Facebook post — 20,836 engagement",   time:"3d ago",    status:"live"},
  {action:"Strategy review scheduled",           time:"Next Mon",  status:"upcoming"},
];

export default function Dashboard() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>Included Free</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Live Dashboard — See <span className="text-purple-400">Everything Your Content Is Doing</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Every platform tracked in one place. Updated continuously so you always know what your social media is producing.
          </p>
        </div>

        <div className="reveal gradient-border p-1 overflow-hidden">
          <div className="rounded-xl overflow-hidden" style={{background:"#07071a"}}>
            <div className="flex items-center justify-between px-5 py-3 border-b border-purple-900/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"/>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/>
              </div>
              <div className="text-slate-500 text-xs hidden sm:block" style={{fontFamily:"var(--font-mono)"}}>OTAI Marketing — Social Media Dashboard</div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"/>
                <span className="text-green-400 text-xs" style={{fontFamily:"var(--font-mono)"}}>Live</span>
              </div>
            </div>

            <div className="p-4 md:p-5">
              {/* Stats — 2x2 on mobile, 4-col on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {[
                  {label:"Views",value:"4,881,860",color:"#a855f7"},
                  {label:"Engagement",value:"45,491",color:"#22c55e"},
                  {label:"Followers",value:"5,082+",color:"#c084fc"},
                  {label:"Posts",value:"84",color:"#f97316"},
                ].map(s => (
                  <div key={s.label} className="solution-card p-2.5 text-center">
                    <div className="text-sm md:text-lg font-bold" style={{color:s.color,fontFamily:"var(--font-display)"}}>{s.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5" style={{fontFamily:"var(--font-body)"}}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Stacked on mobile, 2-col on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Platforms */}
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-2" style={{fontFamily:"var(--font-mono)"}}>Platform Breakdown</p>
                  <div className="space-y-1.5">
                    {platforms.map(p => (
                      <div key={p.name} className="flex items-center gap-2 md:gap-3 px-3 py-2.5 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.1)"}}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:p.color}}/>
                        <span className="text-white text-xs md:text-sm font-semibold w-16 md:w-20 flex-shrink-0" style={{fontFamily:"var(--font-display)"}}>{p.name}</span>
                        <div className="flex items-center gap-1.5 md:gap-2 flex-1 min-w-0 text-xs text-slate-400 truncate" style={{fontFamily:"var(--font-body)"}}>
                          <span>{p.views}</span>
                          <span className="text-slate-700">·</span>
                          <span>{p.engagement} eng</span>
                        </div>
                        <span className="text-slate-600 text-xs flex-shrink-0 hidden md:block" style={{fontFamily:"var(--font-mono)"}}>{p.followers}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top content + activity */}
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2" style={{fontFamily:"var(--font-mono)"}}>Top Content</p>
                    <div className="space-y-1.5">
                      {topContent.map((item,i) => (
                        <div key={i} className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.08)"}}>
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-purple-800 text-xs font-bold flex-shrink-0 w-3" style={{fontFamily:"var(--font-mono)"}}>{i+1}</span>
                            <span className="text-slate-300 text-sm truncate" style={{fontFamily:"var(--font-body)"}}>{item.title}</span>
                          </div>
                          <span className="text-purple-400 text-xs font-semibold flex-shrink-0" style={{fontFamily:"var(--font-mono)"}}>{item.views}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2" style={{fontFamily:"var(--font-mono)"}}>Recent Activity</p>
                    <div className="space-y-1.5">
                      {recentActivity.map((item,i) => {
                        const dot = item.status==="live"?"#22c55e":item.status==="report"?"#a855f7":"#64748b";
                        return (
                          <div key={i} className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.08)"}}>
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:dot}}/>
                            <div className="min-w-0">
                              <p className="text-slate-300 text-sm leading-snug" style={{fontFamily:"var(--font-body)"}}>{item.action}</p>
                              <p className="text-slate-600 text-xs mt-0.5" style={{fontFamily:"var(--font-mono)"}}>{item.time}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs md:text-sm mt-4 leading-relaxed" style={{fontFamily:"var(--font-body)"}}>
          Representative mockup using real client data. Your actual dashboard reflects your live accounts — updated continuously.
        </p>
      </div>
    </section>
  );
}
