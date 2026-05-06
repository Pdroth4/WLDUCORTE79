import { AtSign, Clock, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, siteConfig } from "../data/siteData.js";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Fale direto para agendar seu horário.",
    action: "Chamar no WhatsApp",
    href: createWhatsAppUrl(),
  },
  {
    icon: AtSign,
    title: "Instagram",
    text: siteConfig.instagram,
    action: "Ver perfil",
    href: siteConfig.instagramUrl,
  },
  {
    icon: MapPin,
    title: "Endereço",
    text: siteConfig.address,
    action: "Atualizar endereço",
    href: "#contato",
  },
  {
    icon: Clock,
    title: "Funcionamento",
    text: siteConfig.openingHours,
    action: "Ver horários",
    href: "#agendamento",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="section-padding bg-barber-black">
      <div className="container-site">
        <div className="mb-8 text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-barber-red">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
            Chegue na régua
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Entre em contato, veja o endereço e acompanhe a barbearia nas redes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="glass-card p-5"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/40">
                  <Icon className="h-6 w-6 text-barber-blue" />
                </div>

                <h3 className="text-xl font-black uppercase text-white">
                  {card.title}
                </h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-white/60">
                  {card.text}
                </p>

                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-2xl border border-white/10 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-barber-blue hover:bg-white/5 active:scale-95"
                >
                  {card.action}
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1778106363658!6m8!1m7!1skE4kXNF1jTDBKBvCztbnDw!2m2!1d-10.87252853880279!2d-37.05726115601932!3f201.08!4f0!5f0.7820865974627469"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
