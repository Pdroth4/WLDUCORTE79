import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, siteConfig } from "../data/siteData.js";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center bg-barber-black bg-darkRadial pt-28"
    >
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="barber-stripes absolute -right-24 top-28 h-72 w-72 rotate-12 rounded-full blur-3xl" />
        <div className="barber-stripes absolute -bottom-24 -left-24 h-72 w-72 -rotate-12 rounded-full blur-3xl" />
      </div>

      <div className="container-site section-padding grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 lg:mx-0">
            <Sparkles className="h-4 w-4 text-barber-blue" />
            Barbearia premium urbana
          </div>

          <p className="mb-3 text-sm font-black uppercase tracking-[0.38em] text-white/45">
            {siteConfig.name}
          </p>

          <h1 className="text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white min-[375px]:text-6xl sm:text-7xl lg:text-8xl">
            Seu estilo{" "}
            <span className="bg-gradient-to-r from-zinc-400 via-white to-zinc-500 bg-clip-text text-transparent">
              começa aqui
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-8 text-white/70 sm:text-lg lg:mx-0">
            Cortes, barba, pigmentação, luzes e muito mais com qualidade e
            estilo.
          </p>

          <div className="mt-8 grid gap-3 min-[420px]:grid-cols-2 lg:flex">
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-black/80 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-white hover:text-black lg:w-auto"
            >
              Agendar pelo WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black lg:w-auto"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {["Cortes atuais", "Barba alinhada", "Atendimento profissional"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/45 p-3 text-sm font-semibold text-white/70"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-barber-blue" />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="absolute inset-4 rounded-[2rem] bg-barberGradient opacity-45 blur-3xl" />

          <div className="glass-card relative overflow-hidden p-4">
            <div className="barber-stripes h-3 rounded-full" />

            <div className="grid place-items-center px-5 py-10 text-center">
              <div className="mb-6 grid h-36 w-36 place-items-center rounded-[2rem] border border-white/15 bg-black/55 p-3 shadow-glowBlue">
                <img
                  src={siteConfig.logo}
                  alt="Logo WLDUCORTE79"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>

              <h2 className="text-4xl font-black uppercase tracking-[-0.04em] text-white">
                WLDUCORTE79
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
                Visual moderno, acabamento limpo e atendimento pensado para você.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-barber-red" />
              <div className="h-2 rounded-full bg-white" />
              <div className="h-2 rounded-full bg-barber-blue" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}