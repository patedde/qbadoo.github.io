const links = [
  { label: "Cos'è", href: "#what-is" },
  { label: "Vantaggi", href: "#benefits" },
  { label: "Pilota", href: "#pilot" },
  { label: "Contatti", href: "#contact" }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#d8b58d]/55 bg-qbadoo-parchment/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-[#6b4a36] md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="text-xl font-semibold text-qbadoo-brown" style={{ fontFamily: "var(--font-headline)" }}>
            QbaDoo
          </p>
          <p className="mt-1">Narrazione AR coinvolgente per il patrimonio culturale.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-[#5b3a27] transition hover:text-qbadoo-cobalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qbadoo-cobalt/45"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p>© {new Date().getFullYear()} QbaDoo. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
