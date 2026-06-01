export function Chandelier({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <div className="mx-auto w-px h-16 bg-gradient-to-b from-transparent to-gold/60" />
      <div className="chandelier-sway">
        <svg viewBox="0 0 200 220" className="crystal-glow mx-auto" width="200" height="220">
          <defs>
            <linearGradient id="goldgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.95 0.15 85)" />
              <stop offset="50%" stopColor="oklch(0.78 0.13 85)" />
              <stop offset="100%" stopColor="oklch(0.55 0.11 75)" />
            </linearGradient>
            <radialGradient id="crystalgrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="oklch(1 0 0 / 0.95)" />
              <stop offset="60%" stopColor="oklch(0.88 0.15 85 / 0.7)" />
              <stop offset="100%" stopColor="oklch(0.55 0.11 75 / 0.3)" />
            </radialGradient>
          </defs>
          <g stroke="url(#goldgrad)" fill="url(#goldgrad)">
            {/* Top cap */}
            <ellipse cx="100" cy="20" rx="22" ry="6" />
            <path d="M82 22 L70 60 L130 60 L118 22 Z" fillOpacity="0.4" />
            {/* Tiered crystal rings */}
            <ellipse cx="100" cy="70"  rx="50" ry="8" fill="url(#crystalgrad)" />
            <ellipse cx="100" cy="105" rx="70" ry="10" fill="url(#crystalgrad)" />
            <ellipse cx="100" cy="140" rx="55" ry="9" fill="url(#crystalgrad)" />
            {/* Drops */}
            {Array.from({ length: 14 }).map((_, i) => {
              const angle = (i / 14) * Math.PI;
              const x = 100 + Math.cos(angle) * 75;
              const y = 110 + Math.sin(angle) * 12;
              return (
                <path key={i} d={`M${x} ${y} L${x - 3} ${y + 30} L${x + 3} ${y + 30} Z`} fill="url(#crystalgrad)" />
              );
            })}
            {/* Center finial */}
            <path d="M100 145 L92 180 L100 200 L108 180 Z" fill="url(#crystalgrad)" />
            <circle cx="100" cy="205" r="8" fill="url(#goldgrad)" />
          </g>
        </svg>
      </div>
    </div>
  );
}