"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="border-t border-qbadoo-cobalt/20 bg-gradient-to-br from-qbadoo-brown via-[#4e2c17] to-qbadoo-cobalt"
    >
      <div className="section-wrap section-padding">
        <motion.div
          className="rounded-2xl border border-white/25 bg-white/10 p-8 shadow-soft backdrop-blur md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: "var(--font-headline)" }}>
            Ti interessa creare un'esperienza per il tuo sito?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#fde6d2]">
            QbaDoo è alla ricerca di realtà archeologiche e culturali interessate a testare un prodotto AR
            coinvolgente con gruppi di visitatori reali e obiettivi chiari.
          </p>
          <div className="mt-8">
            <a href="mailto:info@qbadoo.world" className="cta-primary">
              <Mail className="h-4 w-4" />
              Contattaci per un progetto pilota
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-5 text-sm text-[#f3d7c0]">
            Adatto a parchi archeologici, centri storici, itinerari culturali e visite didattiche.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
