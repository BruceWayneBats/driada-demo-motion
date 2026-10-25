import Link from "next/link";
import { CategoryCard } from "@/components/ProductCard";
import { ArrowIcon } from "@/components/Icons";
import { Page } from "@/components/Page";
import { WoodArt } from "@/components/WoodArt";
import { CallButton, Container, WhatsAppButton } from "@/components/ui";
import { categories, getProducts } from "@/content/catalog";
import { promos } from "@/content/promo";
import { site } from "@/content/site";

const advantages = [
  ["С 2004 года", "Более 20 лет обрабатываем дерево и продаём изделия из натуральной древесины."],
  ["Натуральная древесина", "Лиственница, липа, сосна и ель — подбираем породу под задачу."],
  ["Три торговые базы", "Набережные Челны, Нижнекамск и Елабуга. На территории баз — магазины строительных товаров."],
];

const species = ["Лиственница", "Липа", "Сосна", "Ель", "Мебель", "Погонаж", "Мебельные щиты", "Банная мебель"];

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;
const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <Page>
      <section className="overflow-hidden border-b border-oak-100 bg-gradient-to-b from-oak-50 to-birch">
        <Container className="grid items-center gap-10 py-14 sm:py-20 md:grid-cols-2">
          <div data-hero>
            <p style={i(0)} className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
              {site.tagline}
            </p>
            <h1 style={i(1)} className="mt-4 font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              {site.name}.
              <span className="block text-oak-600">
                {site.slogan.split(" ").map((w, n) => (
                  <span key={n} className="word" style={{ "--w": n } as React.CSSProperties}>
                    {w}
                    {n < site.slogan.split(" ").length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            </h1>
            <p style={i(2)} className="mt-6 max-w-lg text-lg leading-relaxed text-walnut-soft">
              {site.description}
            </p>
            <div style={i(3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/catalog"
                className="btn arrow inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-walnut px-6 py-3.5 font-semibold text-birch hover:bg-oak-700"
              >
                Смотреть каталог <ArrowIcon />
              </Link>
              <CallButton className="bg-transparent !text-walnut ring-1 ring-oak-200 hover:!bg-oak-100" />
            </div>
          </div>
          <div data-hero-art className="hidden overflow-hidden rounded-[2rem] md:block">
            <WoodArt kind="furniture" seed="hero" className="h-full w-full" animated />
          </div>
        </Container>
      </section>

      {/* Бегущая строка с породами и разделами */}
      <div className="marquee border-b border-oak-100 py-4 text-walnut-soft" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center">
              {species.map((s) => (
                <span key={s} className="flex items-center font-serif text-xl">
                  <span className="px-6">{s}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <Container className="py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4" data-reveal>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Каталог</h2>
          <Link href="/catalog" className="arrow hidden items-center gap-2 text-oak-700 sm:flex">
            Все товары <ArrowIcon />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, n) => (
            <CategoryCard key={c.slug} category={c} count={getProducts(c.slug).length} index={n} />
          ))}
        </div>
      </Container>

      <section className="bg-oak-50">
        <Container className="grid gap-8 py-16 sm:grid-cols-3">
          {advantages.map(([title, text], n) => (
            <div key={title} data-reveal style={d(n * 140)}>
              <div className="grow-line mb-4 h-px w-12 bg-oak-400" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-walnut-soft">{text}</p>
            </div>
          ))}
        </Container>
      </section>

      {promos.length > 0 && (
        <Container className="py-16 sm:py-20">
          <div className="lift rounded-3xl border border-oak-200 p-8 sm:p-10" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">Акция</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">{promos[0].title}</h2>
            <p className="mt-3 max-w-2xl text-walnut-soft">{promos[0].text}</p>
            <Link href="/promo" className="arrow mt-6 inline-flex items-center gap-2 font-semibold text-oak-700">
              Все акции <ArrowIcon />
            </Link>
          </div>
        </Container>
      )}

      <Container className="pb-16 sm:pb-20">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl" data-reveal>
          Торговые базы
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {site.branches.map((b, n) => (
            <div key={b.city} className="lift rounded-3xl border border-oak-200 p-7" data-reveal style={d(n * 120)}>
              <h3 className="font-serif text-xl font-semibold">{b.city}</h3>
              <p className="mt-2 text-walnut-soft">{b.address}</p>
              <p className="mt-1 text-sm text-walnut-soft">{b.hours}</p>
              <a href={`tel:${b.phone.tel}`} className="mt-4 inline-block font-semibold text-oak-700 hover:underline">
                {b.phone.display}
              </a>
            </div>
          ))}
        </div>
      </Container>

      <Container className="text-center">
        <div data-reveal>
          <h2 className="font-serif text-3xl font-semibold">Подберём изделие под вашу задачу</h2>
          <p className="mx-auto mt-3 max-w-xl text-walnut-soft">
            Позвоните или напишите — расскажем о наличии, сроках и вариантах исполнения.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </Container>
    </Page>
  );
}
