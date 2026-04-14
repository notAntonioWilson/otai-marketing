"use client";

const platforms = [
  {name:"TikTok",color:"#a855f7",views:"4,881,860",engagement:"45,491",followers:"5,082",posts:"84"},
  {name:"Facebook",color:"#3b82f6",views:"4,387,754",engagement:"42,449",followers:"1,200",posts:"84"},
  {name:"Instagram",color:"#ec4899",views:"494,106",engagement:"2,889",followers:"269",posts:"84"},
  {name:"LinkedIn",color:"#0ea5e9",views:"3,495",engagement:"150",followers:"2,813",posts:"12"},
];

const topContent = [
  {title:"How to Tighten a Loose Corner",views:"2.2M",platform:"TikTok"},
  {title:"A Quick How To",views:"1.3M",platform:"TikTok"},
  {title:"A Quick How To",views:"399K",platform:"TikTok"},
  {title:"Huge Transformation",views:"179K",platform:"TikTok"},
  {title:"The Perfect Fit",views:"146K",platform:"TikTok"},
];

const recentActivity = [
  {action:"Reel published — TikTok & Instagram",time:"2h ago",status:"live"},
  {action:"Monthly report ready for review",time:"Yesterday",status:"report"},
  {action:"Content calendar approved for next week",time:"2d ago",status:"approved"},
  {action:"Facebook post — 20,836 engagement",time:"3d ago",status:"live"},
  {action:"Strategy review scheduled",time:"Next Mon",status:"upcoming"},
];

export default function Dashboard() {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>Included Free</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Live Dashboard — See{" "}
            <span className="text-purple-400">Everything Your Content Is Doing</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            Every platform tracked in one place. Views, engagement, followers, top-performing content, and activity — updated continuously so you always know exactly what your social media is producing.
          </p>
        </div>

        <div className="reveal gradient-border p-1 overflow-hidden">
          <div className="rounded-xl overflow-hidden" style={{background:"#07071a"}}>
            {/* Window bar */}
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-purple-900/20">
              <div className="flex items-center gap-2.5">
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

            <div className="p-4 md:p-6 space-y-5 md:space-y-6">

              {/* Aggregate row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {label:"Total Views",value:"4,881,860",color:"#a855f7"},
                  {label:"Total Engagement",value:"45,491",color:"#22c55e"},
                  {label:"Total Followers",value:"5,082+",color:"#c084fc"},
                  {label:"Posts Published",value:"84",color:"#f97316"},
                ].map(s => (
                  <div key={s.label} className="solution-card p-3 md:p-4 text-center">
                    <div className="text-lg md:text-2xl font-bold mb-1" style={{color:s.color,fontFamily:"var(--font-display)"}}>{s.value}</div>
                    <div className="text-slate-500 text-xs" style={{fontFamily:"var(--font-body)"}}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Platform breakdown + Top content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-white font-semibold text-sm md:text-base" style={{fontFamily:"var(--font-display)"}}>Platform Breakdown</h3>
                  {platforms.map(p => (
                    <div key={p.name} className="flex items-center gap-3 md:gap-4 p-3 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.1)"}}>
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor:p.color}}/>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-sm font-semibold" style={{fontFamily:"var(--font-display)"}}>{p.name}</span>
                          <span className="text-slate-500 text-xs" style={{fontFamily:"var(--font-mono)"}}>{p.followers} followers</span>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className="text-xs text-slate-400" style={{fontFamily:"var(--font-body)"}}>{p.views} views</span>
                          <span className="text-xs text-slate-600">·</span>
                          <span className="text-xs text-slate-400" style={{fontFamily:"var(--font-body)"}}>{p.engagement} engagement</span>
                          <span className="text-xs text-slate-600">·</span>
                          <span className="text-xs text-slate-400" style={{fontFamily:"var(--font-body)"}}>{p.posts} posts</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top content + activity */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base mb-3" style={{fontFamily:"var(--font-display)"}}>Top Performing Content</h3>
                    <div className="space-y-2">
                      {topContent.map((item,i) => (
                        <div key={i} className="flex items-center justify-between gap-2 p-2.5 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.08)"}}>
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-purple-700 text-xs font-bold flex-shrink-0" style={{fontFamily:"var(--font-mono)"}}>{i+1}</span>
                            <span className="text-slate-300 text-xs truncate" style={{fontFamily:"var(--font-body)"}}>{item.title}</span>
                          </div>
                          <span className="text-purple-400 text-xs font-semibold flex-shrink-0" style={{fontFamily:"var(--font-mono)"}}>{item.views}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base mb-3" style={{fontFamily:"var(--font-display)"}}>Recent Activity</h3>
                    <div className="space-y-2">
                      {recentActivity.map((item,i) => {
                        const dotColor = item.status==="live"?"#22c55e":item.status==="report"?"#a855f7":item.status==="approved"?"#f97316":"#64748b";
                        return (
                          <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg" style={{background:"rgba(147,51,234,0.05)",border:"1px solid rgba(147,51,234,0.08)"}}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{backgroundColor:dotColor}}/>
                            <div className="flex-1 min-w-0">
                              <p className="text-slate-300 text-xs leading-snug" style={{fontFamily:"var(--font-body)"}}>{item.action}</p>
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

        <p className="text-center text-slate-500 text-xs md:text-sm mt-4 md:mt-5 leading-relaxed" style={{fontFamily:"var(--font-body)"}}>
          Representative mockup using real client data. Your actual dashboard reflects your live accounts, content performance, and growth — updated continuously.
        </p>
      </div>
    </section>
  );
}
