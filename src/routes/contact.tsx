import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumb, PageTitle } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak & Reservasi — VVIP Residence Singkawang" },
      { name: "description", content: "Reservasi VVIP Residence Singkawang — formulir Art Deco, jam operasional, kontak langsung." },
      { property: "og:title", content: "Kontak & Reservasi — VVIP Residence" },
      { property: "og:description", content: "Reservasi pribadi, sopan dan diam. Hubungi concierge kami." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb current="Kontak & Reservasi" />
      <PageTitle kicker="— A LINE BEFORE MIDNIGHT —" title="Reservasi" />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-3">
        {/* Form */}
        <div className="deco-frame bg-noir p-10 lg:col-span-2">
          <h2 className="font-display text-2xl text-gold">Formulir Reservasi</h2>
          <p className="mt-2 font-mono text-xs tracking-[0.2em] text-cream/60">— DIKETIK DENGAN MESIN TIK 1925 —</p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-8 grid gap-6 sm:grid-cols-2 font-mono"
          >
            <Field label="Nama Lengkap" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Telepon" name="phone" />
            <Field label="Jumlah Tamu" name="guests" type="number" />
            <Field label="Check-In"  name="in"  type="date" />
            <Field label="Check-Out" name="out" type="date" />

            <div className="sm:col-span-2">
              <label className="mb-2 block font-display text-[0.65rem] tracking-[0.3em] text-gold">PESAN</label>
              <textarea
                rows={4}
                className="w-full border border-gold/40 bg-transparent px-4 py-3 text-cream outline-none transition focus:border-gold focus:shadow-[0_0_0_1px_var(--gold)]"
                placeholder="Permintaan khusus, perayaan, atau pesan untuk concierge…"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-xs text-cream/50">Concierge akan membalas dalam 1 jam kerja.</p>
              <button type="submit" className="btn-gold">
                {sent ? "Terkirim ◆" : "Reservasi Sekarang"}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="border border-gold/30 bg-card/50 p-6">
            <h3 className="font-display text-sm tracking-[0.3em] text-gold">JAM OPERASIONAL</h3>
            <ul className="mt-4 space-y-2 font-mono text-sm text-cream/80">
              <li className="flex justify-between"><span>Concierge</span><span>24 jam</span></li>
              <li className="flex justify-between"><span>Speakeasy</span><span>18:00 — 02:00</span></li>
              <li className="flex justify-between"><span>Spa</span><span>09:00 — 22:00</span></li>
              <li className="flex justify-between"><span>Ballroom</span><span>By Appointment</span></li>
            </ul>
          </div>
          <div className="border border-gold/30 bg-card/50 p-6">
            <h3 className="font-display text-sm tracking-[0.3em] text-gold">HUBUNGI LANGSUNG</h3>
            <ul className="mt-4 space-y-3 font-mono text-sm text-cream/85">
              <li>+62 562 1929 1925</li>
              <li>concierge@vvip-singkawang.id</li>
              <li>Jl. Diponegoro 1920, Singkawang</li>
            </ul>
          </div>
          {/* Vintage map */}
          <div className="border border-gold/30 bg-card/50 overflow-hidden">
            <iframe
              title="Peta Lokasi"
              className="h-56 w-full"
              style={{ filter: "sepia(0.5) hue-rotate(-10deg) saturate(0.7) contrast(0.95)" }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=108.97%2C0.89%2C109.01%2C0.92&layer=mapnik"
              loading="lazy"
            />
          </div>
        </aside>
      </section>

      {/* Floating vintage phone */}
      <a
        href="https://wa.me/6256219291925"
        target="_blank" rel="noreferrer"
        aria-label="Hubungi via WhatsApp"
        className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-noir shadow-[var(--shadow-gold)] hover:bg-gold hover:text-noir transition group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" className="phone-ring text-gold group-hover:text-noir" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.5 11.5 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.6 1 1 0 0 1-.24 1.02l-2.21 2.17Z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-display text-[0.65rem] tracking-[0.3em] text-gold">
        {label.toUpperCase()}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-gold/40 bg-transparent px-4 py-3 text-cream outline-none transition focus:border-gold focus:shadow-[0_0_0_1px_var(--gold)]"
      />
    </div>
  );
}