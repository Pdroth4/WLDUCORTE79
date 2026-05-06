import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Scissors, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createWhatsAppUrl, siteConfig } from "../data/siteData.js";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/5">
        {!hasLogoError && siteConfig.logo ? (
          <img
            src={siteConfig.logo}
            alt="Logo WLDUCORTE79"
            className="h-full w-full object-contain p-1"
            onError={() => setHasLogoError(true)}
          />
        ) : (
          <Scissors className="h-6 w-6 text-barber-blue" />
        )}
      </span>

      <strong className="text-base font-black tracking-[0.18em] text-white sm:text-lg">
        WLDUCORTE79
      </strong>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = createWhatsAppUrl();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999999,
          background: "radial-gradient(circle at top, #07172a 0%, #050914 45%, #000000 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-[0.16em] text-white/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-black transition hover:bg-barber-blue hover:text-white lg:inline-flex"
          >
            Agendar agora
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-transparent text-white lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "80px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999998,
              backgroundColor: "#050914",
              padding: "24px 16px",
              overflowY: "auto",
            }}
            className="lg:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 bg-black/70 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-barberGradient px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg"
              >
                Agendar agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}