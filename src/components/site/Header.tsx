import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const NAV = [
  { to: "/" as const, label: "Beranda" },
  { to: "/suites" as const, label: "Suite" },
  { to: "/facilities" as const, label: "Fasilitas" },
  { to: "/gallery" as const, label: "Galeri" },
  { to: "/location" as const, label: "Lokasi" },
  { to: "/contact" as const, label: "Kontak" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-noir/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-[0.72rem] tracking-[0.25em] uppercase text-cream/80 transition hover:text-gold data-[status=active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex btn-outline-gold !px-5 !py-2 !text-[0.65rem]">
          Reserve
        </Link>
      </div>
      {/* Art Deco geometric line under menu */}
      <div className="pointer-events-none h-[6px] w-full"
           style={{ background: "linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent)", opacity: 0.5 }} />
      <div className="pointer-events-none h-[3px] w-full -mt-[3px]"
           style={{ background: "repeating-linear-gradient(90deg, transparent 0 12px, var(--gold) 12px 14px)", opacity: 0.4 }} />
    </header>
  );
}