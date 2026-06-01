import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb, PageTitle } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Lokasi — VVIP Residence Singkawang" },
      { name: "description", content: "Lokasi VVIP Residence di jantung Singkawang — peta vintage 1920-an, tempat-tempat terdekat." },
      { property: "og:title", content: "Lokasi — VVIP Residence" },
      { property: "og:description", content: "Di jantung Singkawang, dikelilingi sejarah dan pesona." },
    ],
  }),
  component: LocationPage,
});

const NEARBY = [
  { name: "Vihara Tri Dharma Bumi Raya", dist: "0.4 km", time: "5 min walk" },
  { name: "Pasar Hong Kong",              dist: "0.8 km", time: "10 min walk" },
  { name: "Pantai Pasir Panjang",         dist: "11 km",  time: "20 min drive" },
  { name: "Gunung Poteng",                dist: "9 km",   time: "18 min drive" },
  { name: "Bandara Singkawang",           dist: "23 km",  time: "30 min drive" },
  { name: "Bukit Bougenville",            dist: "4 km",   time: "12 min drive" },
];

function LocationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb current="Lokasi" />
      <PageTitle kicker="— A MAP TO PARADISE —" title="Lokasi Kami" />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-5">
        {/* Vintage map */}
        <div className="lg:col-span-3">
          <div className="deco-frame relative overflow-hidden bg-[oklch(0.92_0.04_85)] aspect-[4/3]">
            {/* Sepia parchment */}
            <div className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at center, oklch(0.94 0.05 80) 0%, oklch(0.78 0.08 70) 100%)",
              }}
            />
            {/* Streets — abstract grid */}
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
              <g stroke="oklch(0.35 0.08 60 / 0.5)" strokeWidth="1.2" fill="none">
                <path d="M 0 80 Q 100 90 200 60 T 400 100" />
                <path d="M 0 160 Q 120 180 200 150 T 400 180" />
                <path d="M 0 230 L 400 230" strokeDasharray="6 4" />
                <path d="M 80 0 L 110 300" />
                <path d="M 220 0 Q 230 150 200 300" />
                <path d="M 320 0 L 310 300" strokeDasharray="6 4" />
              </g>
              {/* Compass rose */}
              <g transform="translate(340 40)" stroke="oklch(0.55 0.11 75)" fill="oklch(0.55 0.11 75)" strokeWidth="1">
                <circle r="22" fill="none" />
                <path d="M0 -22 L4 0 L0 22 L-4 0 Z" />
                <path d="M-22 0 L0 4 L22 0 L0 -4 Z" opacity="0.6" />
                <text y="-26" textAnchor="middle" fontSize="8" fontFamily="serif">N</text>
              </g>
              {/* Hotel marker */}
              <g transform="translate(200 150)">
                <circle r="10" fill="oklch(0.38 0.14 25)" stroke="oklch(0.78 0.13 85)" strokeWidth="2" />
                <circle r="3" fill="oklch(0.95 0.16 85)" />
              </g>
              <text x="200" y="140" textAnchor="middle" fontSize="9" fill="oklch(0.2 0.05 60)" fontFamily="serif" fontStyle="italic">
                VVIP Residence
              </text>
            </svg>

            {/* Champagne bubbles rising from marker */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="champagne-bubble"
                  style={{
                    left: `${(i - 4) * 6}px`,
                    width: `${4 + (i % 3) * 2}px`,
                    height: `${4 + (i % 3) * 2}px`,
                    animationDuration: `${3 + (i % 4)}s`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-xs tracking-[0.3em] text-cream/50">
            — A CARTOGRAPHER'S RENDERING, EST. 1925 —
          </p>
        </div>

        {/* Nearby list */}
        <aside className="lg:col-span-2">
          <h2 className="font-display text-2xl gold-shimmer">Di Sekitar</h2>
          <div className="deco-divider my-5 max-w-[160px]" />
          <ul className="space-y-5 font-mono text-sm">
            {NEARBY.map((n) => (
              <li key={n.name} className="flex items-start justify-between gap-4 border-b border-gold/15 pb-4">
                <div>
                  <div className="text-cream">{n.name}</div>
                  <div className="mt-1 text-xs tracking-widest text-cream/50">{n.time.toUpperCase()}</div>
                </div>
                <div className="font-display text-gold">{n.dist}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-gold/30 bg-card/50 p-6">
            <div className="font-display text-xs tracking-[0.3em] text-gold">ALAMAT</div>
            <p className="mt-3 font-mono text-sm leading-relaxed text-cream/85">
              Jl. Diponegoro No. 1920<br />
              Singkawang Tengah<br />
              Kalimantan Barat, 79123
            </p>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}