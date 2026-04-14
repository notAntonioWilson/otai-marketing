"use client";

const pains = [
  {icon:"👻",title:"You're invisible to the people who need you",body:"If your business isn't showing up consistently on social media, your competitors are. Every week you're not posting is a week someone else is building the audience that could be yours."},
  {icon:"⏳",title:"You don't have time to do it right",body:"Running a business is a full-time job. Creating content, scheduling posts, and analyzing performance on top of that — something always gets cut. It's always the marketing."},
  {icon:"📉",title:"Inconsistency kills momentum",body:"Posting once then disappearing for three weeks tells the algorithm and your audience the same thing — you're not serious. Consistency is the only strategy that works."},
  {icon:"🤷",title:"You don't know what's actually working",body:"Without data, you're guessing what to post, when, and who you're talking to. Most businesses post and hope. We post with a strategy and optimize based on what the numbers say."},
];

export default function Problem() {
  return (
    <section id="problem" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-800/25 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"/>
            <span className="text-red-400 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>The Reality</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Every Day Without a <span className="text-red-400">Social Presence</span>
            <br/>Is a Day Your Competitor Owns That Attention
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pains.map((pain,i) => (
              <div key={i} className="pain-card p-5 md:p-6 reveal">
                <div className="text-2xl mb-3">{pain.icon}</div>
                <h3 className="text-white text-base font-semibold mb-2 leading-snug" style={{fontFamily:"var(--font-display)"}}>{pain.title}</h3>
                <p className="text-slate-400 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>{pain.body}</p>
              </div>
            ))}
          </div>
          <div className="pain-card p-6 md:p-8 flex flex-col justify-center reveal">
            <div className="text-red-400 text-xs tracking-widest uppercase mb-3" style={{fontFamily:"var(--font-mono)"}}>The compounding cost</div>
            <div className="text-4xl md:text-5xl font-bold text-red-400 mb-3" style={{fontFamily:"var(--font-display)"}}>90 Days</div>
            <p className="text-slate-200 font-semibold text-base mb-3" style={{fontFamily:"var(--font-display)"}}>Without consistent content</p>
            <p className="text-slate-400 text-sm md:text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
              Your audience forgets you exist. Your competitors build trust. The algorithm deprioritizes your account. Rebuilding from zero costs more than staying consistent ever would have.
            </p>
          </div>
        </div>
        <p className="mt-6 text-slate-400 text-base leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
          Social media isn't optional anymore.{" "}
          <span className="text-white font-medium">It's where your customers decide whether to trust you before they ever call.</span>
        </p>
      </div>
    </section>
  );
}
