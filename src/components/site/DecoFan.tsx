export function DecoFan({ className = "" }: { className?: string }) {
  // SVG art-deco fan that opens on hover (parent uses `group`)
  return (
    <svg viewBox="0 0 120 80" className={`deco-fan ${className}`} width="120" height="80">
      <defs>
        <linearGradient id="fangrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="oklch(0.88 0.15 85)" />
          <stop offset="100%" stopColor="oklch(0.55 0.11 75)" />
        </linearGradient>
      </defs>
      <g stroke="url(#fangrad)" strokeWidth="1.2" fill="none">
        {Array.from({ length: 11 }).map((_, i) => {
          const angle = -90 + (i * 18);
          const rad = (angle * Math.PI) / 180;
          const x2 = 60 + Math.cos(rad) * 55;
          const y2 = 78 + Math.sin(rad) * 55;
          return <line key={i} x1="60" y1="78" x2={x2} y2={y2} />;
        })}
        <path d="M5 78 A55 55 0 0 1 115 78" />
        <path d="M15 78 A45 45 0 0 1 105 78" opacity="0.7" />
        <path d="M25 78 A35 35 0 0 1 95 78"  opacity="0.5" />
        <circle cx="60" cy="78" r="5" fill="url(#fangrad)" />
      </g>
    </svg>
  );
}