"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section id="problem" className="section-band">
      <div className="section-wrap section-padding section-path">
        <p className="eyebrow-label">Il problema</p>
        <motion.h2
          className="section-title mt-5 max-w-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          I siti culturali sono pieni di storie. I visitatori non sempre riescono a coglierle.
        </motion.h2>
        <motion.div
          className="mt-7 grid gap-5 md:max-w-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.45 }}
        >
          <p className="text-lg leading-relaxed text-[#543624]">
            Molti siti archeologici e del patrimonio custodiscono una storia straordinaria, ma famiglie,
            bambini e giovani turisti non sempre si connettono appieno con ciò che stanno vedendo.
            Pannelli, visite guidate e brochure restano strumenti preziosi, ma l'esperienza può comunque
            risultare passiva.
          </p>
          <p className="text-lg leading-relaxed text-[#543624]">
            QbaDoo aggiunge un livello digitale coinvolgente che aiuta i visitatori ad apprezzare i dettagli, a
            esplorare con curiosità e a ricordare il luogo con maggiore chiarezza.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
