import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Courses", href: "#courses-section" },
  { label: "Training Facility", href: "#courses-section" },
  { label: "Certification", href: "#courses-section" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavClick(href: string) {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-border shadow-card"
      data-ocid="navbar.header"
    >
      {/* Top accent bar */}
      <div className="h-0.5 bg-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-1 select-none"
            data-ocid="navbar.logo"
          >
            <img
              src="/assets/motofence-logo.png"
              alt="MotoFence"
              className="h-12 object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                className="text-foreground/70 hover:text-foreground font-body font-semibold text-sm uppercase tracking-widest transition-smooth hover:text-accent"
                onClick={() => handleNavClick(link.href)}
                data-ocid={`navbar.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground hover:text-accent transition-smooth"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-ocid="navbar.mobile_toggle"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              className="block w-full text-left text-foreground/70 hover:text-accent font-body font-semibold text-sm uppercase tracking-widest py-2 transition-smooth"
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
