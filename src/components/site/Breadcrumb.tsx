import { Link } from "@tanstack/react-router";

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="mx-auto max-w-7xl px-6 pt-10 pb-2 text-xs tracking-[0.3em] uppercase text-cream/60">
      <Link to="/" className="hover:text-gold">Beranda</Link>
      <span className="mx-3 text-gold">◆</span>
      <span className="text-gold">{current}</span>
    </nav>
  );
}

export function PageTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-6 pb-12 text-center">
      {kicker && (
        <p className="font-display text-xs tracking-[0.5em] text-gold/80">{kicker}</p>
      )}
      <h1 className="mt-4 font-display text-5xl md:text-7xl gold-shimmer">{title}</h1>
      <div className="deco-divider mt-8 mx-auto max-w-md" />
    </div>
  );
}