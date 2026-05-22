"use client";

import { motion } from "framer-motion";
import { Compass, LayoutPanelTop, Smartphone, Users } from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Aumenta il coinvolgimento dei visitatori",
    text: "Dai ai visitatori un motivo per esplorare, osservare i dettagli e trascorrere più tempo sul posto."
  },
  {
    icon: Users,
    title: "Attrae famiglie e giovani turisti",
    text: "Offri un prodotto moderno, pensato per lo smartphone, naturale per i più giovani e utile per i genitori."
  },
  {
    icon: Smartphone,
    title: "Aggiunge valore senza infrastrutture",
    text: "QbaDoo è progettato per esistere direttamente sullo smartphone del visitatore, evitando la necessità di costose installazioni fisiche."
  },
  {
    icon: LayoutPanelTop,
    title: "Crea un'esperienza distintiva",
    text: "Usa storie locali, folklore, personaggi e oggetti del luogo per rendere il tuo sito memorabile."
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-band">
      <div className="section-wrap section-padding section-path">
        <p className="eyebrow-label">Vantaggi</p>
        <h2 className="section-title mt-5">Perché è importante per il tuo sito</h2>
        <p className="section-lead max-w-3xl">
          Progettato per migliorare il coinvolgimento sul posto, restando pratico e vantaggioso per le istituzioni che gestiscono gli spazi del patrimonio.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className="parchment-panel p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <div className="ar-icon-wrap">
                <benefit.icon className="h-5 w-5 text-qbadoo-clay" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-qbadoo-brown" style={{ fontFamily: "var(--font-headline)" }}>
                {benefit.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-[#543624]">{benefit.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
