export const siteConfig = {
  name: "WLDUCORTE79",
  slogan: "WLDUCORTE79 — Estilo, qualidade e atitude.",
  logo: "/logo.png",

  // Coloque aqui o número da barbearia com DDI e DDD, somente números.
  // Exemplo Aracaju/SE: "5579999999999"
  whatsappNumber: "557991374070",

  whatsappMessage: "Olá, quero agendar um horário na WLDUCORTE79.",
  instagram: "@wl_ducorte79",
  instagramUrl: "https://www.instagram.com/wl_ducorte79?igsh=MWEzMXM4ejY3NGVvMg==",
  address: "Adicione aqui o endereço da barbearia",
  openingHours: "Segunda a sexta, 08:00 - 18:00; Sábado, 07:30 - 16:00; Domingo, fechado",
};

export const services = [
  { name: "Barba completa", price: "R$ 15,00" },
  { name: "Bigode + pezinho", price: "R$ 15,00" },
  { name: "Corte + barba", price: "R$ 40,00" },
  { name: "Corte + pigmentação", price: "R$ 30,00" },
  { name: "Corte americano", price: "R$ 20,00" },
  { name: "Corte degradê", price: "R$ 25,00" },
  { name: "Corte moicano", price: "R$ 25,00" },
  { name: "Corte social", price: "R$ 20,00" },
  { name: "Luzes + corte e sobrancelha", price: "R$ 65,00" },
  { name: "Nevou + corte e sobrancelha", price: "R$ 75,00" },
  { name: "Reflexo + corte e sobrancelha", price: "R$ 65,00" },
];

export const galleryImages = [
  {
    src: "/fotos/foto1.jpg",
    title: "Foto 01",
    text: "Espaço reservado para imagem da barbearia",
  },
  {
    src: "/fotos/foto2.jpg",
    title: "Foto 02",
    text: "Cortes modernos e acabamento profissional",
  },
  {
    src: "/fotos/foto3.jpg",
    title: "Foto 03",
    text: "Barba, pezinho e detalhes no estilo",
  },
  {
    src: "/fotos/foto4.jpg",
    title: "Foto 04",
    text: "Atendimento com qualidade",
  },
  {
    src: "/fotos/foto5.jpg",
    title: "Foto 05",
    text: "Visual urbano e masculino",
  },
  {
    src: "/fotos/foto6.jpg",
    title: "Foto 06",
    text: "Pigmentação, luzes e reflexo",
  },
];

export function createWhatsAppUrl(message = siteConfig.whatsappMessage) {
  const encodedMessage = encodeURIComponent(message);
  const number = siteConfig.whatsappNumber.trim();

  if (!number) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${number}?text=${encodedMessage}`;
}
