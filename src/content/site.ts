// Контакты и общие данные компании: content/settings/site.json (правятся в админке).
// TODO: единый номер и мессенджеры — клиент пока не прислал; реквизиты юрлица — тоже.

import { readJson, toTel } from "./load";

export type Phone = { label: string; display: string; tel: string };
export type Branch = {
  city: string;
  address: string;
  hours: string;
  phone: Phone;
  mapUrl: string;
};

type SiteFile = {
  name: string;
  slogan: string;
  tagline: string;
  description: string;
  email: string;
  whatsapp: string;
  mainPhone: string;
  branches: { city: string; address: string; hours: string; phone: string }[];
  legal?: string;
};

const data = readJson<SiteFile>("settings/site.json");

const map = (q: string) => `https://yandex.ru/maps/?text=${encodeURIComponent(q)}`;

const branches: Branch[] = data.branches.map((b) => ({
  city: b.city,
  address: b.address,
  hours: b.hours,
  phone: { label: b.city, display: b.phone, tel: toTel(b.phone) },
  mapUrl: map(`${b.city}, ${b.address}`),
}));

export const site = {
  name: data.name,
  slogan: data.slogan,
  tagline: data.tagline,
  description: data.description,
  url: process.env.SITE_URL || "https://driada-demo.vercel.app",
  email: data.email,
  // Номер для WhatsApp — только цифры
  whatsapp: toTel(data.whatsapp).slice(1),
  mainPhone: { label: "Единый номер", display: data.mainPhone, tel: toTel(data.mainPhone) } satisfies Phone,
  phones: branches.map((b) => b.phone),
  branches,
  legal: data.legal ?? "",
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
