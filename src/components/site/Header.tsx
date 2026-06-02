import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Pathway", href: "#pathway" },
  { label: "Coaches", href: "#coaches" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-navy/95 backdrop-blur border-b border-white/10" : "bg-navy/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-10 sm:h-12 w-auto drop-shadow" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-white tracking-wider text-lg">WE ARE SOCCER</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-silver/80">Academy</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-display uppercase text-sm tracking-widest text-white/80 hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-green font-display uppercase tracking-wider text-sm px-5 py-2.5 rounded-md"
          >
            Book a Trial Session
          </a>
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase tracking-widest text-sm text-white/90 py-3 border-b border-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-green text-center font-display uppercase tracking-wider text-sm px-5 py-3 rounded-md mt-3"
            >
              Book a Trial Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
