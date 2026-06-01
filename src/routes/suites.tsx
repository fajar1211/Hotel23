import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb, PageTitle } from "@/components/site/Breadcrumb";
import suitePresidential from "@/assets/suite-presidential.jpg";
import suiteDeluxe from "@/assets/suite-deluxe.jpg";
import suiteRoyal from "@/assets/suite-royal.jpg";

export const Route = createFileRoute("/suites")({
  head: () => ({
    meta: [
      { title: "Suite & Kamar — VVIP Residence Singkawang" },
      { name: "description", content: "Suite Art Deco velvet & marmer dengan kristal gantung — Presidential, Royal, dan Deluxe Gatsby Suite." },
      { property: "og:title", content: "Suite & Kamar — VVIP Residence" },
      { property: "og:description", content: "Suite Art Deco velvet & marmer dengan kristal gantung." },
    ],
  }),
  component: SuitesPage,
});

const SUITES = [
  {
    name: "Royal Gatsby Suite",
    img: suiteRoyal,
    price: "Rp 18.500.000",
    sub: "/ malam",
    features: ["120 m² dengan ruang tamu pribadi", "Kristal Bohemia & marmer hitam", "Butler 24 jam", "Champagne welcome"],
  },
  {
    name: "Presidential Velvet Suite",
    img: suitePresidential,
    price: "Rp 12.800.000",
    sub: "/ malam",
    features: ["Headboard velvet merah handmade", "Bathtub marmer & shower kristal", "Konsierje pribadi", "View kota"],
  },
  {
    name: "Deluxe Chevron Room",
    img: suiteDeluxe,
    price: "Rp 6.200.000",
    sub: "/ malam",
    features: ["Parket chevron & emas trim", "Kristal sconce vintage", "Sarapan continental", "Akses lounge"],
  },
];

function SuitesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb current="Suite & Kamar" />
      <PageTitle kicker="— ENAM KARAKTER, SATU LEGENDA —" title="Suite & Kamar" />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-20">
          {SUITES.map((s, i) => (
            <article
              key={s.name}
              className={`group relative grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              style={{ direction: "ltr" }}
            >
              {/* Image with animated chevron border */}
              <div className="relative" style={{ direction: "ltr" }}>
                <div className="pointer-events-none absolute -inset-4 chevron-anim opacity-40 group-hover:opacity-80 transition" />
                <div className="deco-frame relative overflow-hidden bg-noir">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="h-[440px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div style={{ direction: "ltr" }} className="px-2">
                <p className="font-display text-xs tracking-[0.5em] text-gold/80">SUITE NO. {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl gold-shimmer">{s.name}</h2>
                <div className="deco-divider my-6 max-w-xs" />
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-cream/80">
                      <span className="mt-1 inline-block h-2 w-2 rotate-45 bg-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <div className="font-mono text-xs tracking-[0.3em] text-cream/50">MULAI DARI</div>
                    <div className="font-display text-3xl text-gold">{s.price}<span className="text-base text-cream/60">{s.sub}</span></div>
                  </div>
                  <button className="btn-gold">Book Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}