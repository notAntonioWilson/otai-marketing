"use client";

const stats = [
  {value:"30M+",label:"Total lifetime views across platforms",color:"#a855f7"},
  {value:"7M+",label:"Views on a single account — organic only",color:"#a855f7"},
  {value:"2M",label:"Views on a single video — organic",color:"#22c55e"},
  {value:"4.8M",label:"Views in a 28-day period",color:"#22c55e"},
  {value:"1,620%",label:"View growth in one month",color:"#c084fc"},
  {value:"42,449",label:"Engagement on Facebook in one period",color:"#f97316"},
  {value:"+449%",label:"Instagram follower growth vs prior period",color:"#f97316"},
  {value:"3+",label:"Years of proven organic social media results",color:"#c084fc"},
];

export default function Proof() {
  return (
    <section id="proof" className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>Real Results</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Numbers From <span className="text-purple-400">Live Accounts</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            3+ years of organic social media marketing. Pulled directly from platform analytics — no inflated claims, no paid reach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 md:mb-10 reveal">
          {stats.map(s => (
            <div key={s.label} className="gradient-border p-4 md:p-5 text-center">
              <div className="text-xl md:text-3xl font-bold mb-2" style={{color:s.color,fontFamily:"var(--font-display)"}}>{s.value}</div>
              <div className="text-slate-500 text-xs md:text-sm leading-snug" style={{fontFamily:"var(--font-body)"}}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="gradient-border px-5 md:px-8 py-4 md:py-6 text-center mb-8 reveal">
          <p className="text-slate-300 text-sm md:text-base leading-[1.75]" style={{fontFamily:"var(--font-body)"}}>
            These results come from real accounts across contractors, trades, and service businesses.{" "}
            <span className="text-purple-400 font-semibold">Every number is verifiable.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
