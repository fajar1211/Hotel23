import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb, PageTitle } from "@/components/site/Breadcrumb";
import { DecoFan } from "@/components/site/DecoFan";
import pool from "@/assets/facility-pool.jpg";
import bar from "@/assets/facility-bar.jpg";
import ballroom from "@/assets/facility-ballroom.jpg";
import spa from "@/assets/facility-spa.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Fasilitas — VVIP Residence Singkawang" },
      { name: "description", content: "Kolam marmer indoor, speakeasy tersembunyi, ballroom megah, dan spa Art Deco." },
      { property: "og:title", content: "Fasilitas — VVIP Residence" },
      { property: "og:description", content: "Kolam marmer, speakeasy, ballroom, spa — semua dalam balutan Art Deco." },
    ],
  }),
  component: FacilitiesPage,
});

const ITEMS = [
  { img: pool,     name: "Onyx Marble Pool",     blurb: "Kolam indoor marmer hitam dengan langit-langit kubah emas, diapit kolom bermotif kipas." },
  { img: bar,      name: "The Hidden Speakeasy", blurb: "Bar tersembunyi di balik panel kayu — koktail klasik, jazz, dan cerita yang tidak akan keluar dari ruangan." },
  { img: ballroom, name: "Gatsby Grand Ballroom", blurb: "Ballroom dengan sunburst plafon, tujuh kristal gantung, dan lantai parket emas." },
  { img: spa,      name: "Auric Spa & Hammam",   blurb: "Spa dengan mosaik emas, marmer hangat, dan ritual pijat 1920-an yang langka." },
];

function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb current="Fasilitas" />
      <PageTitle kicker="— SANCTUARIES IN GOLD —" title="Fasilitas" />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 md:grid-cols-2">
        {ITEMS.map((it) => (
          <article key={it.name} className="group relative overflow-hidden border border-gold/30 bg-card/40 transition hover:border-gold">
            <div className="relative h-80 overflow-hidden">
              <img
                src={it.img}
                alt={it.name}
                width={1280}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
              {/* fan icon — opens on hover */}
              <div className="absolute right-6 top-6 text-gold">
                <DecoFan />
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl gold-shimmer">{it.name}</h3>
              <div className="deco-divider my-4 max-w-[200px]" />
              <p className="text-cream/75 leading-relaxed">{it.blurb}</p>
              <p className="mt-6 font-mono text-xs tracking-[0.3em] text-cream/50 opacity-0 transition group-hover:opacity-100">
                — OPEN DAILY · BY APPOINTMENT —
              </p>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}