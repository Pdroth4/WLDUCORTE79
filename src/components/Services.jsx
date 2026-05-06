import { Scissors, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "../data/siteData.js";

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: index * 0.045 },
  }),
};

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-barber-black">
      <div className="container-site">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-barber-red">
            Serviços e preços
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
            Escolha seu próximo visual
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-barber-blue/70 hover:shadow-glowBlue"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-barber-blue/20 blur-2xl transition group-hover:bg-barber-red/20" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/35">
                  {index % 2 === 0 ? (
                    <Scissors className="h-6 w-6 text-barber-blue" />
                  ) : (
                    <Sparkle className="h-6 w-6 text-barber-red" />
                  )}
                </div>

                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-sm font-black text-white">
                  {service.price}
                </span>
              </div>

              <h3 className="relative mt-5 text-xl font-black uppercase leading-tight text-white">
                {service.name}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-white/58">
                Atendimento com acabamento caprichado e estilo WLDUCORTE79.
              </p>

              <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-barberGradient" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
