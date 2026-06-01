import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <svg width="38" height="38" viewBox="0 0 40 40" className="text-gold transition-transform duration-500 group-hover:rotate-180">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="20" cy="20" r="18" />
          <path d="M20 2 L24 20 L20 38 L16 20 Z" fill="currentColor" opacity="0.4" />
          <path d="M2 20 L20 16 L38 20 L20 24 Z" fill="currentColor" opacity="0.4" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
        </g>
      </svg>
      <div className="leading-none">
        <div className="font-display text-lg font-bold tracking-[0.25em] text-gold">VVIP</div>
        <div className="font-display text-[0.55rem] tracking-[0.4em] text-cream/70">RESIDENCE</div>
      </div>
    </Link>
  );
}