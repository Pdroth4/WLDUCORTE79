import { useMemo, useState } from "react";
import { CalendarCheck, Send, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { createWhatsAppUrl, services, siteConfig } from "../data/siteData.js";

const initialForm = {
  name: "",
  phone: "",
  service: services[0]?.name ?? "",
  date: "",
  time: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);

  const message = useMemo(() => {
    return [
      "Olá, quero agendar um horário na WLDUCORTE79.",
      "",
      `Nome: ${form.name || "Não informado"}`,
      `Telefone: ${form.phone || "Não informado"}`,
      `Serviço: ${form.service || "Não informado"}`,
      `Data: ${form.date || "Não informada"}`,
      `Horário: ${form.time || "Não informado"}`,
    ].join("\n");
  }, [form]);

  const whatsappUrl = createWhatsAppUrl(message);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="agendamento"
      className="section-padding relative overflow-hidden bg-barber-dark"
    >
      <div className="absolute inset-0 bg-darkRadial opacity-70" />

      <div className="container-site relative grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-black uppercase tracking-[0.32em] text-barber-blue">
            Agendamento
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
            Marque seu horário pelo WhatsApp
          </h2>
          <p className="mt-4 text-base leading-8 text-white/65">
            Preencha seus dados e confirme. O WhatsApp será aberto com a
            mensagem pronta para enviar.
          </p>

          <div className="mt-7 grid gap-3">
            <a
              href={createWhatsAppUrl(siteConfig.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="gradient-button w-full sm:w-fit"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Agendar pelo WhatsApp
            </a>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start gap-3">
                <CalendarCheck className="mt-1 h-6 w-6 shrink-0 text-barber-red" />
                <p className="text-sm leading-7 text-white/65">
                  Dica: toque no botão, envie a mensagem e aguarde a confirmação
                  do horário disponível.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-card p-4 sm:p-6"
        >
          <div className="barber-stripes mb-5 h-2 rounded-full" />

          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Nome
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="min-h-14 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-barber-blue"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Telefone
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(79) 99999-9999"
                className="min-h-14 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-barber-blue"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                Serviço desejado
              </span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="min-h-14 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition focus:border-barber-blue"
              >
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} — {service.price}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                  Data
                </span>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="min-h-14 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition focus:border-barber-blue"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-white/75">
                  Horário
                </span>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="min-h-14 rounded-2xl border border-white/10 bg-black/35 px-4 text-base text-white outline-none transition focus:border-barber-blue"
                />
              </label>
            </div>

            <button type="submit" className="gradient-button mt-2 w-full">
              Confirmar agendamento
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
