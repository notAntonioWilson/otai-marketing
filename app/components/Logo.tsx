export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="triG" x1="22" y1="2" x2="22" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc"/><stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
      </defs>
      <polygon points="22,3 3,41 41,41" fill="none" stroke="url(#triG)" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  );
}
