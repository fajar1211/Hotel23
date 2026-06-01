import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/30 bg-noir/90">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="deco-divider mb-12" />
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl tracking-[0.2em] text-gold">VVIP</div>
            <div className="font-display text-xs tracking-[0.4em] text-cream/60">RESIDENCE — SINGKAWANG</div>
            <p className="mt-6 text-sm leading-relaxed text-cream/70">
              An ultra-premium Art Deco sanctuary inspired by the gilded age. Every detail
              hand-crafted for the discerning traveler.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.3em] text-gold">JELAJAHI</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><Link to="/" className="hover:text-gold">Beranda</Link></li>
              <li><Link to="/suites" className="hover:text-gold">Suite & Kamar</Link></li>
              <li><Link to="/facilities" className="hover:text-gold">Fasilitas</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">Galeri</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.3em] text-gold">PERTEMUAN</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li><Link to="/location" className="hover:text-gold">Lokasi</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Reservasi</Link></li>
              <li><a className="hover:text-gold" href="#">Concierge 24/7</a></li>
              <li><a className="hover:text-gold" href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-[0.3em] text-gold">HUBUNGI</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70 font-mono">
              <li>Jl. Diponegoro 1920</li>
              <li>Singkawang, Kalimantan Barat</li>
              <li>+62 562 1929 1925</li>
              <li>concierge@vvip-singkawang.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 deco-divider" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs tracking-[0.2em] text-cream/40 md:flex-row">
          <p>© 1925—{new Date().getFullYear()} VVIP RESIDENCE SINGKAWANG · ALL RIGHTS RESERVED</p>
          <p className="font-display text-gold/70">— A LEGEND IN GOLD —</p>
        </div>
      </div>
    </footer>
  );
}