"use client";
import { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "otai-s.m.-marketing", {origin:"https://app.cal.com"});
      Cal.ns["otai-s.m.-marketing"]("inline", {
        elementOrSelector:"#my-cal-inline-otai-s-m--marketing",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "otai-systems/otai-s.m.-marketing",
      });
      Cal.ns["otai-s.m.-marketing"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="book" className="py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,rgba(147,51,234,.3),transparent)"}}/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{background:"radial-gradient(circle,rgba(147,51,234,.04) 0%,transparent 70%)"}}/>

      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-7 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-700/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
            <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>Next Step</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4"
            style={{fontFamily:"var(--font-display)",fontWeight:800}}>
            Let's Build Your{" "}
            <span className="text-purple-400">Social Presence</span>
          </h2>
          <p className="text-slate-400 text-base md:text-xl leading-[1.7]" style={{fontFamily:"var(--font-body)"}}>
            We audit your current presence, show you the strategy we'd build for your business, and you leave with a clear picture of what consistent content looks like for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-7 md:mb-8 reveal">
          {[
            {icon:"🔍",label:"Audit your presence",desc:"We review your current accounts, content, and where the biggest growth opportunities are"},
            {icon:"📋",label:"Show you the strategy",desc:"We map out your content pillars, platforms, and posting cadence before we start"},
            {icon:"🚀",label:"Define the scope",desc:"Deliverables, timeline, add-ons, and what we need from you to get started"},
          ].map(item => (
            <div key={item.label} className="gradient-border p-5 text-center flex flex-col items-center">
              <div className="text-2xl mb-3">{item.icon}</div>
              <p className="text-white font-semibold text-sm md:text-base mb-1.5" style={{fontFamily:"var(--font-display)"}}>{item.label}</p>
              <p className="text-slate-400 text-sm leading-[1.6]" style={{fontFamily:"var(--font-body)"}}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal rounded-2xl overflow-hidden border border-purple-900/20" style={{background:"#0a0a18"}}>
          <div id="my-cal-inline-otai-s-m--marketing" style={{width:"100%",minHeight:"620px",overflow:"auto"}}/>
        </div>
      </div>
    </section>
  );
}
