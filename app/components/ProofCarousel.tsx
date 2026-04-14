"use client";
import { useEffect, useRef } from "react";

const images = Array.from({length: 28}, (_,i) => `/proof/proof-${String(i+1).padStart(2,"0")}.png`);
const allImages = [...images, ...images];

export default function ProofCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);

  useEffect(() => {
    const track = trackRef.current; if (!track) return;
    const animate = () => {
      if (!isDragging.current) {
        posRef.current += 1.4;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const clamp = (pos: number) => {
    const track = trackRef.current; if (!track) return pos;
    const half = track.scrollWidth / 2;
    return Math.max(0, Math.min(pos, half - 1));
  };

  const onMouseDown = (e: React.MouseEvent) => { isDragging.current=true; startX.current=e.clientX; startPos.current=posRef.current; };
  const onMouseMove = (e: React.MouseEvent) => { if(!isDragging.current) return; posRef.current=clamp(startPos.current+(startX.current-e.clientX)); if(trackRef.current)trackRef.current.style.transform=`translateX(-${posRef.current}px)`; };
  const onMouseUp = () => { isDragging.current=false; };
  const onTouchStart = (e: React.TouchEvent) => { isDragging.current=true; startX.current=e.touches[0].clientX; startPos.current=posRef.current; };
  const onTouchMove = (e: React.TouchEvent) => { if(!isDragging.current) return; posRef.current=clamp(startPos.current+(startX.current-e.touches[0].clientX)); if(trackRef.current)trackRef.current.style.transform=`translateX(-${posRef.current}px)`; };
  const onTouchEnd = () => { isDragging.current=false; };

  return (
    <section className="py-10 relative">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{background:"linear-gradient(90deg,#050510,transparent)"}}/>
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{background:"linear-gradient(270deg,#050510,transparent)"}}/>
        <div
          className="overflow-hidden px-4 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        >
          <div ref={trackRef} className="flex gap-4 will-change-transform py-3" style={{width:"max-content"}}>
            {allImages.map((src,i) => (
              <div key={i} className="flex-shrink-0 rounded-2xl overflow-hidden"
                style={{width:"min(480px,85vw)",height:"min(300px,53vw)",background:"#07071a",border:"1px solid rgba(168,85,247,0.55)",boxShadow:"0 0 12px rgba(147,51,234,0.2)"}}>
                <img src={src} alt={`Social media result ${(i%images.length)+1}`} className="w-full h-full object-contain" loading="lazy" draggable={false}/>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-slate-600 text-sm mt-4" style={{fontFamily:"var(--font-mono)"}}>Drag or swipe to browse — {images.length} screenshots from live accounts</p>
    </section>
  );
}
