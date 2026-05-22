"use client";

import { motion } from "framer-motion";
import { GraduationCap, Smartphone, Users } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Famiglie",
    text: "Un modo per mantenere i bambini curiosi, coinvolti e attivi lungo la visita.",
    image: "/assets/families.png"
  },
  {
    icon: Smartphone,
    title: "Giovani turisti",
    text: "Un modo più moderno, condivisibile e pensato per lo smartphone per vivere il patrimonio culturale.",
    image: "/assets/young.png"
  },
  {
    icon: GraduationCap,
    title: "Scuole e gruppi educativi",
    text: "Un punto d'ingresso coinvolgente ad archeologia, storia, folklore e identità locale.",
    image: "/assets/schools.png"
  }
];

export default function VisitorsSection() {
  return (
    <section id="visitors" className="section-band">
      <div className="section-wrap section-padding section-path">
        <p className="eyebrow-label">Visitatori</p>
        <h2 className="section-title mt-5">Pensato per le persone che vuoi coinvolgere</h2>
        <p className="section-lead max-w-3xl">
          QbaDoo supporta profili eterogenei, con un formato che resta educativo, divertente e facile da seguire.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:auto-rows-fr">
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
              className={
                index === 0
                  ? "parchment-panel relative flex flex-col justify-center overflow-hidden p-6 sm:p-7 lg:col-span-7 lg:row-span-2"
                  : "parchment-panel relative overflow-hidden p-6 lg:col-span-5"
              }
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <img
                src={audience.image}
                alt={audience.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24160c]/70 via-[#24160c]/30 to-[#24160c]/50" />
              <div className={`relative z-10 ar-icon-wrap border-white/45 bg-white/80 ${index === 0 ? "mx-auto" : ""}`}>
                <audience.icon className="h-5 w-5 text-qbadoo-cobalt" />
              </div>
              <h3
                className={`relative z-10 mt-4 text-lg font-semibold text-white ${index === 0 ? "text-center" : ""}`}
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {audience.title}
              </h3>
              <p className={`relative z-10 mt-2 text-[0.95rem] leading-relaxed text-white/95 ${index === 0 ? "mx-auto max-w-2xl text-center" : ""}`}>
                {audience.text}
              </p>
              {index === 0 && (
                <p className="relative z-10 mx-auto mt-5 max-w-2xl text-center text-sm font-medium text-white/90">
                  Ideale per visite multi-età, dove coinvolgimento e ritmo sono essenziali.
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
