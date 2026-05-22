"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative mt-4 overflow-hidden border-b border-[#d8b58d]/55 pt-28 md:mt-6 md:pt-20">
      <img
        src="/assets/map.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full bg-[#f3dfbf] object-contain object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff4e0]/42 via-[#fff4e0]/16 to-transparent" />
      <div className="section-wrap relative z-10 flex min-h-[32rem] items-start py-10 sm:min-h-[36rem] sm:py-12 md:min-h-[40rem] md:py-14 lg:min-h-[44rem]">
        <motion.div
          className="max-w-[27rem] sm:max-w-[29rem] md:max-w-[31rem]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow-label">Pronto per un' esperienza AR?</p>
          <p className="mt-4 text-sm font-medium text-[#5a3b27]">
            Progettato per siti archeologici, centri storici e itinerari culturali.
          </p>
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-qbadoo-brown sm:text-3xl md:text-4xl" style={{ fontFamily: "var(--font-headline)" }}>
            Dai vita al tuo sito con la Realtà Aumentata
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3b1f0f] sm:text-base">
            Avventure in AR con indizi, personaggi e storie locali per famiglie, scuole e viaggiatori.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="cta-primary">
              Parliamo di un progetto pilota
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#pilot" className="cta-secondary">
              Scopri come funziona
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
