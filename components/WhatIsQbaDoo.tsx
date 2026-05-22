"use client";

import { motion } from "framer-motion";
import { Compass, MapPinned, ScrollText } from "lucide-react";

const cards = [
  {
    icon: ScrollText,
    title: "Visite AR basate sulla narrazione",
    text: "I visitatori seguono percorsi narrativi e indizi sul loro smartphone, così la tecnologia sostiene la visita invece di distrarre."
  },
  {
    icon: Compass,
    title: "Coinvolgente ma radicato nel territorio",
    text: "L'esperienza è leggera e coinvolgente, valorizzando identità locale, leggende e contesto storico."
  },
  {
    icon: MapPinned,
    title: "Formato flessibile, personalità riconoscibile",
    text: "Si adatta a siti archologici, borghi e percorsi mantenendo uno stile narrativo coerente che i visitatori ricordano."
  }
];

export default function WhatIsQbaDoo() {
  return (
    <section id="what-is" className="section-band-alt">
      <div className="section-wrap section-padding section-path section-path-left">
        <p className="eyebrow-label">Cos'è</p>
        <h2 className="section-title mt-5">Che cos'è QbaDoo?</h2>
        <p className="section-lead max-w-2xl">
          Un'esperienza in AR fruibile dal telefono del visitatore, incentrata sulla narrazione che rende le visite coinvolgenti e memorabili.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="rounded-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="ar-icon-wrap">
                <card.icon className="h-5 w-5 text-qbadoo-cobalt" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-qbadoo-brown" style={{ fontFamily: "var(--font-headline)" }}>
                {card.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[#543624]">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
