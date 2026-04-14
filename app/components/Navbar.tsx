"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Proof", href: "#proof" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo size={34} />
          <span className="text-white text-base font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            OTAI <span className="text-purple-400">Marketing</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(l => <a key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{l.label}</a>)}
        </div>
        <a href="#book" className="hidden md:inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 glow-purple" style={{ fontFamily: "var(--font-body)" }}>
          Book a Call
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? <path d="M5 5l12 12M5 17L17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> : <path d="M3 5.5h16M3 11h16M3 16.5h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-purple-900/20 px-8 py-5 flex flex-col gap-5">
          {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-purple-400 transition-colors text-sm font-medium">{l.label}</a>)}
          <a href="#book" className="text-purple-400 font-semibold text-sm">Book a Call →</a>
        </div>
      )}
    </nav>
  );
}
