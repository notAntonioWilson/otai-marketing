import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="border-t border-purple-900/15 py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-3">
              <Logo size={28}/>
              <span className="text-white font-semibold text-base" style={{fontFamily:"var(--font-display)"}}>OTAI <span className="text-purple-400">Marketing</span></span>
            </div>
            <p className="text-slate-600 text-sm" style={{fontFamily:"var(--font-body)"}}>Built for businesses that are done being invisible.</p>
          </div>
          <div className="flex items-center gap-7 text-sm text-slate-500" style={{fontFamily:"var(--font-body)"}}>
            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="https://www.otaisystems.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">OTAI Systems</a>
          </div>
          <p className="text-slate-600 text-sm" style={{fontFamily:"var(--font-body)"}}>© 2026 OTAI Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
