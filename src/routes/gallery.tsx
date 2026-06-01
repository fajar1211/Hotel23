import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb, PageTitle } from "@/components/site/Breadcrumb";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galeri — VVIP Residence Singkawang" },
      { name: "description", content: "Galeri hitam-putih dengan aksen emas — momen Art Deco di VVIP Residence." },
      { property: "og:title", content: "Galeri — VVIP Residence" },
      { property: "og:description", content: "Hitam, putih, dan emas. Setiap bingkai sebuah kisah." },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; cat: "Kamar" | "Ballroom" | "Lounge"; cap: string };
const ITEMS: Item[] = [
  { src: g1, cat: "Lounge",   cap: "The Flapper, 1925" },
  { src: g2, cat: "Ballroom", cap: "The Grand Staircase" },
  { src: g3, cat: "Ballroom", cap: "Charleston Until Dawn" },
  { src: g4, cat: "Kamar",    cap: "Velvet & Silence" },
  { src: g5, cat: "Lounge",   cap: "The Bartender's Hour" },
  { src: g6, cat: "Kamar",    cap: "A Thousand Tiny Suns" },
];
const FILTERS = ["Semua", "Kamar", "Ballroom", "Lounge"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Semua");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const filtered = filter === "Semua" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb current="Galeri" />
      <PageTitle kicker="— BLACK · WHITE · GOLD —" title="Galeri" />

      {/* Filter */}
      <div className="mx-auto mb-12 flex max-w-7xl flex-wrap justify-center gap-3 px-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative inline-flex items-center gap-3 border px-6 py-2 font-display text-xs tracking-[0.3em] transition
              ${filter === f ? "border-gold bg-gold text-noir" : "border-gold/40 text-cream/70 hover:border-gold hover:text-gold"}`}
          >
            {filter === f && <span className="diamond-shimmer !h-2 !w-2" />}
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((it) => (
          <button
            key={it.cap}
            onClick={() => setLightbox(it)}
            className="group relative block overflow-hidden border border-gold/30 hover:border-gold"
          >
            <img
              src={it.src}
              alt={it.cap}
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />
            {/* gold shimmer overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
                 style={{ background: "linear-gradient(120deg, transparent 30%, oklch(0.78 0.13 85 / 0.25) 50%, transparent 70%)" }} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-noir via-noir/60 to-transparent p-5">
              <div className="font-mono text-[0.65rem] tracking-[0.3em] text-gold">{it.cat.toUpperCase()}</div>
              <div className="font-display text-lg text-cream">{it.cap}</div>
            </div>
          </button>
        ))}
      </section>

      {/* Diamond nav dots */}
      <div className="mb-16 flex justify-center gap-4">
        {filtered.map((_, i) => <span key={i} className="diamond-shimmer" style={{ animationDelay: `${i * 0.2}s` }} />)}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-6 backdrop-blur"
        >
          <div className="deco-frame relative max-h-[88vh] max-w-4xl bg-noir p-3">
            <img src={lightbox.src} alt={lightbox.cap} className="max-h-[80vh] w-auto object-contain" />
            <div className="mt-2 text-center font-display text-gold">{lightbox.cap}</div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}