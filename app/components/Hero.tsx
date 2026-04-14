"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const p: {x:number;y:number;vx:number;vy:number;size:number;opacity:number}[] = [];
    for (let i = 0; i < 50; i++) p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,size:Math.random()*1.2+.3,opacity:Math.random()*.4+.05});
    let id: number;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      p.forEach(pt => {pt.x+=pt.vx;pt.y+=pt.vy;if(pt.x<0||pt.x>canvas.width)pt.vx*=-1;if(pt.y<0||pt.y>canvas.height)pt.vy*=-1;ctx.beginPath();ctx.arc(pt.x,pt.y,pt.size,0,Math.PI*2);ctx.fillStyle=`rgba(147,51,234,${pt.opacity})`;ctx.fill();});
      for (let i=0;i<p.length;i++) for (let j=i+1;j<p.length;j++) {const dx=p[i].x-p[j].x,dy=p[i].y-p[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.moveTo(p[i].x,p[i].y);ctx.lineTo(p[j].x,p[j].y);ctx.strokeStyle=`rgba(147,51,234,${.06*(1-d/100)})`;ctx.lineWidth=.5;ctx.stroke();}}
      id=requestAnimationFrame(draw);
    };
    draw();
    const r=()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;};
    window.addEventListener("resize",r);
    return()=>{cancelAnimationFrame(id);window.removeEventListener("resize",r);};
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-texture overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"/>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{background:"radial-gradient(circle,rgba(147,51,234,.06) 0%,transparent 65%)"}}/>
      </div>

      <div className="absolute top-28 right-12 hidden lg:block animate-float opacity-25" style={{animationDelay:"0s"}}>
        <StatTag label="2M views — single post" color="#a855f7"/>
      </div>
      <div className="absolute bottom-40 right-24 hidden lg:block animate-float opacity-25" style={{animationDelay:"2s"}}>
        <StatTag label="4.8M views this month" color="#22c55e"/>
      </div>
      <div className="absolute top-48 left-10 hidden lg:block animate-float opacity-25" style={{animationDelay:"3.5s"}}>
        <StatTag label="+449% follower growth" color="#f97316"/>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-10 text-center pt-28 pb-10">
        <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-800/40 rounded-full px-4 py-2 mb-5">
          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"/>
          <span className="text-purple-300 text-xs tracking-widest uppercase" style={{fontFamily:"var(--font-mono)"}}>3+ Years · 30M+ Views · Real Results</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-4 tracking-tight"
          style={{fontFamily:"var(--font-display)",fontWeight:800}}>
          Your Business Is <span style={{color:"#ef4444"}}>Invisible</span> Online.
          <br/>
          <span className="text-purple-400 glow-text">We Fix That.</span>
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-[1.7]"
          style={{fontFamily:"var(--font-body)"}}>
          We build your social media strategy, create AI-powered content, and post consistently across every platform — so your brand grows, your reach expands, and your business stays top of mind without you lifting a finger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <a href="#book" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 glow-purple" style={{fontFamily:"var(--font-body)"}}>
            Book a Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2.5l5.5 5.5L8 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#proof" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-purple-600 hover:border-purple-400 hover:bg-purple-950/40 text-purple-300 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200" style={{fontFamily:"var(--font-body)"}}>
            See the Results
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 5.5l4.5 2.5-4.5 2.5V5.5z" fill="currentColor"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {[
            {value:"30M+",label:"Total lifetime views across platforms and clients"},
            {value:"3+ Years",label:"Of organic social media marketing — no paid ads"},
            {value:"2M",label:"Views on a single piece of content"},
          ].map(stat => (
            <div key={stat.label} className="gradient-border px-5 py-5 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1.5" style={{fontFamily:"var(--font-display)",fontWeight:700}}>{stat.value}</div>
              <div className="text-sm text-slate-500 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatTag({label,color}:{label:string;color:string}) {
  return (
    <div className="bg-dark-200/70 border border-purple-900/30 rounded-lg px-3 py-2 flex items-center gap-2 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{backgroundColor:color}}/>
      <span className="text-xs text-slate-400" style={{fontFamily:"var(--font-mono)"}}>{label}</span>
    </div>
  );
}
