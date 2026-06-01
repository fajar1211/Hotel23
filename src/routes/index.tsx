import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Chandelier } from "@/components/site/Chandelier";
import heroLobby from "@/assets/hero-lobby.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VVIP Residence Singkawang — Art Deco Luxury Hotel" },
      { name: "description", content: "Sebuah suaka Art Deco ultra-premium di Singkawang, terinspirasi era 1920-an Gatsby. Marmer chevron, kristal, emas, dan velvet." },
      { property: "og:title", content: "VVIP Residence Singkawang" },
      { property: "og:description", content: "Hotel Art Deco ultra-premium — glamor Gatsby di Singkawang." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroLobby}
          alt="Lobi VVIP Residence Singkawang dengan lantai marmer chevron dan kristal gantung"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/40 to-noir" />
        <Chandelier className="absolute left-1/2 top-0 -translate-x-1/2" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 text-center fade-up">
          <p className="font-display text-xs tracking-[0.7em] text-gold/90">EST · 1925</p>
          <h1 className="mt-6 font-display text-5xl leading-tight md:text-8xl gold-shimmer">
            VVIP Residence
          </h1>
          <p className="mt-2 font-display text-2xl tracking-[0.4em] text-cream md:text-3xl">
            SINGKAWANG
          </p>
          <div className="deco-divider mt-10 w-72 mx-auto" />
          <p className="mt-8 max-w-2xl text-lg italic leading-relaxed text-cream/85 md:text-xl">
            “Sebuah istana emas di mana setiap malam dirayakan, dan setiap pagi
            terbangun dalam pelukan velvet & marmer.”
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/suites" className="btn-gold">Jelajahi Suite</Link>
            <Link to="/contact" className="btn-outline-gold">Reservasi</Link>
          </div>
        </div>

        {/* Chevron marble strip at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 chevron-marble opacity-60" />
      </section>

      {/* WELCOME */}
      <section className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.5em] text-gold">— SELAMAT DATANG —</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl gold-shimmer">
            Sebuah Era Yang Tak Pernah Pudar
          </h2>
          <div className="deco-divider mt-8 mx-auto max-w-md" />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-cream/80">
          Di balik pintu emas, malam dimulai dengan dentingan kristal dan berakhir
          dengan bisikan jazz. VVIP Residence Singkawang menghadirkan kemewahan
          Gatsby pada tanah Kalimantan — sebuah panggung pribadi bagi mereka yang
          memahami arti sebuah era.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            { n: "VI", t: "Suite Eksklusif", d: "Enam suite ditata dengan tangan, masing-masing sebuah karakter." },
            { n: "IV", t: "Fasilitas Privat", d: "Speakeasy tersembunyi, ballroom megah, spa marmer, kolam indoor." },
            { n: "XXIV", t: "Concierge", d: "Pelayanan klasik dua puluh empat jam, sopan dan diam." },
          ].map((b) => (
            <div key={b.n} className="group border border-gold/30 bg-card/40 p-10 text-center backdrop-blur transition hover:border-gold hover:shadow-[var(--shadow-gold)]">
              <div className="font-display text-5xl gold-shimmer">{b.n}</div>
              <h3 className="mt-4 font-display text-xl tracking-[0.2em] text-gold">{b.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative mx-auto mt-12 max-w-7xl px-6">
        <div className="deco-frame relative bg-noir p-12 text-center md:p-20">
          <p className="font-display text-xs tracking-[0.5em] text-gold/80">— PENAWARAN PERDANA —</p>
          <h3 className="mt-4 font-display text-3xl md:text-5xl gold-shimmer">Malam-malam Emas Menanti</h3>
          <p className="mx-auto mt-6 max-w-xl text-cream/75">
            Pesan tinggal anda kini dan terima sebotol champagne vintage di kamar,
            ditemani spa privat untuk dua orang.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/suites" className="btn-gold">Lihat Suite</Link>
            <Link to="/facilities" className="btn-outline-gold">Fasilitas Kami</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
