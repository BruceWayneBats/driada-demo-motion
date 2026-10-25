// Контакты и общие данные компании (из анкеты клиента).
// TODO: единый номер и мессенджеры — клиент пока не прислал; реквизиты юрлица — тоже.

export type Phone = { label: string; display: string; tel: string };
export type Branch = {
  city: string;
  address: string;
  hours: string;
  phone: Phone;
  mapUrl: string;
};

const map = (q: string) => `https://yandex.ru/maps/?text=${encodeURIComponent(q)}`;

const branches: Branch[] = [
  {
    city: "Набережные Челны",
    address: "Казанский проспект, 234А, стр. 43",
    hours: "8:00–17:00",
    phone: { label: "Набережные Челны", display: "+7 (8552) 44-88-00", tel: "+78552448800" },
    mapUrl: map("Набережные Челны, Казанский проспект, 234А"),
  },
  {
    city: "Нижнекамск",
    address: "ул. Вокзальная, 5Б",
    hours: "8:00–17:00",
    phone: { label: "Нижнекамск", display: "+7 (8555) 84-27-27", tel: "+78555842727" },
    mapUrl: map("Нижнекамск, ул. Вокзальная, 5Б"),
  },
  {
    city: "Елабуга",
    address: "Окружное шоссе, 11В",
    hours: "8:00–17:00",
    phone: { label: "Елабуга", display: "+7 (8555) 72-66-00", tel: "+78555726600" },
    mapUrl: map("Елабуга, Окружное шоссе, 11В"),
  },
];

export const site = {
  name: "Дриада",
  slogan: "Дерево для жизни",
  tagline: "Деревообрабатывающее предприятие с 2004 года",
  description:
    "Изделия из лиственницы, липы, сосны и ели: мебель, банная мебель, погонаж, обрезной материал, мебельные щиты, панно и лестничные элементы.",
  url: process.env.SITE_URL || "https://driada-demo.vercel.app",
  email: "driada2004@rambler.ru",
  // ДЕМО: единый номер для WhatsApp / Telegram / MAX — заглушка
  whatsapp: "79000000000",
  // ДЕМО: единый номер с переадресацией по городам ещё не создан — пока главный номер Челнов
  mainPhone: { label: "Единый номер", display: "+7 (8552) 44-88-00", tel: "+78552448800" } satisfies Phone,
  phones: branches.map((b) => b.phone),
  branches,
  // ДЕМО: реквизиты юрлица — запросить у клиента
  legal: "",
};

export const mainPhone = site.mainPhone;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О компании" },
  { href: "/promo", label: "Акции" },
  { href: "/contacts", label: "Контакты" },
];
