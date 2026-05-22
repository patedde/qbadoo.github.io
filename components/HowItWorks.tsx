"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="pilot" className="section-band-alt">
      <div className="section-wrap section-padding section-path section-path-left">
        <p className="eyebrow-label">Come funziona il progetto pilota</p>
        <h2 className="section-title mt-5">Come nasce e viene validata un'esperienza QbaDoo</h2>
        <p className="section-lead max-w-3xl">
          Un processo pilota mirato, dalla definizione narrativa ai test con i visitatori, pensato per una collaborazione affidabile con gli enti coinvolti.
        </p>
        <motion.div
          className="mt-10 parchment-panel p-4 sm:p-5"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="/assets/process.png"
            alt="Processo QbaDoo"
            className="w-full rounded-xl border border-qbadoo-stone/20 bg-white object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
