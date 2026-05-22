"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BerrittaSection() {
  const [hasBerritta, setHasBerritta] = useState(true);

  return (
    <section id="berritta" className="section-band-alt">
      <div className="section-wrap section-padding section-path section-path-left grid gap-8 md:grid-cols-[1fr_0.95fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="eyebrow-label">Ecco Berritta</p>
          <h2 className="section-title mt-5">Lui è Berritta, la tua guida locale</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#543624]">
            Berritta è il compagno narrativo di QbaDoo: una guida calorosa ed eccentrica che aiuta i
            visitatori a scoprire i segreti nascosti del luogo. Porta umorismo, curiosità e sapore locale
            all'esperienza.
          </p>
        </motion.div>

        <motion.div
          className="parchment-panel relative p-5"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ar-ring right-[-10px] top-[-10px] h-20 w-20" />
          <div className="ar-glow-circle left-[-24px] top-10 h-20 w-20" />
          {hasBerritta ? (
            <img
              src="/assets/berritta.png"
              alt="Berritta, la guida locale"
              className="h-[500px] w-full rounded-2xl border border-qbadoo-stone/20 bg-white object-cover object-top"
              onError={() => setHasBerritta(false)}
            />
          ) : (
            <div className="flex h-[300px] w-full flex-col items-center justify-center rounded-2xl border border-qbadoo-stone/20 bg-white/95 px-6 text-center">
              <p className="text-2xl font-semibold text-qbadoo-brown" style={{ fontFamily: "var(--font-headline)" }}>
                Berritta
              </p>
              <p className="mt-2 text-sm text-[#5f3f2b]">La guida locale</p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b4a36]">
                Un personaggio caloroso e curioso che aiuta i visitatori a seguire indizi e scoprire storie nascoste.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
