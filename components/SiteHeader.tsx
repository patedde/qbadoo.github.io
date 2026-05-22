"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Landmark, Menu, Sparkles } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Cos'è", href: "#what-is" },
  { label: "Vantaggi", href: "#benefits" },
  { label: "Visitatori", href: "#visitors" },
  { label: "Pilota", href: "#pilot" },
  { label: "Contatti", href: "#contact" }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-4 z-40 mx-auto w-[calc(100%-1rem)] max-w-6xl rounded-2xl border border-[#d8b58d]/65 bg-qbadoo-parchment/90 shadow-soft backdrop-blur"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 md:px-7">
        <a href="#" className="flex items-center gap-2 text-qbadoo-brown">
          <Landmark className="h-5 w-5 text-qbadoo-terracotta" />
          <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-headline)" }}>
            QbaDoo
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-qbadoo-stone/20 bg-white/70 p-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#5b3a27] transition hover:bg-white hover:text-qbadoo-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qbadoo-cobalt/45"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="cta-primary hidden px-4 py-2 md:inline-flex">
            <Sparkles className="h-4 w-4" />
            Parliamo di un pilota
          </a>
          <button
            type="button"
            aria-label="Apri menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-qbadoo-stone/25 text-qbadoo-stone md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-qbadoo-stone/20 bg-qbadoo-parchment/95 px-4 pb-4 pt-3 md:hidden"
          >
            <div className="grid gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-qbadoo-stone/15 bg-white/70 px-3 py-2 text-sm font-medium text-[#5b3a27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qbadoo-cobalt/45"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="cta-primary mt-1" onClick={() => setOpen(false)}>
                Parliamo di un pilota
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
