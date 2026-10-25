import { Page } from "@/components/Page";
import type { Metadata } from "next";
import { WoodArt } from "@/components/WoodArt";
import { CallButton, Container, PageTitle } from "@/components/ui";
import { site } from "@/content/site";
import { CountUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "О компании",
  description: "Деревообрабатывающее предприятие «Дриада» — изделия из натурального дерева с 2004 года.",
};

const facts: [number, number, string][] = [
  [2004, 1990, "год основания"],
  [3, 0, "торговые базы"],
  [4, 0, "породы древесины"],
];

export default function AboutPage() {
  return (
    <Page>
    <Container>
      <PageTitle
        title="О компании"
        lead="Деревообрабатывающее предприятие «Дриада». С 2004 года занимаемся продажей изделий из натурального дерева."
      />

      <div className="grid gap-12 md:grid-cols-2" data-reveal>
        <div className="space-y-5 text-lg leading-relaxed text-walnut-soft">
          <p>
            Работаем с лиственницей, липой, сосной и елью. В ассортименте — мебель и банная мебель, погонаж, обрезной
            материал, мебельные щиты, панно, лестничные элементы, а также масла и краски для дерева.
          </p>
          <p>
            У нас три торговые базы — в Набережных Челнах, Нижнекамске и Елабуге. На их территории работают арендаторы,
            в основном магазины строительных товаров, поэтому всё нужное для стройки и ремонта можно купить в одном
            месте.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <WoodArt kind="lumber" seed="about" className="h-full w-full" animated />
        </div>
      </div>

      <dl className="mt-16 grid gap-6 border-y border-oak-100 py-10 sm:grid-cols-3">
        {facts.map(([n, from, label], k) => (
          <div key={label} className="text-center" data-reveal style={{ "--d": `${k * 140}ms` } as React.CSSProperties}>
            <dt className="sr-only">{label}</dt>
            <dd className="font-serif text-5xl font-semibold tabular-nums text-oak-600">
              <CountUp to={n} from={from} />
            </dd>
            <dd className="mt-2 text-walnut-soft">{label}</dd>
          </div>
        ))}
      </dl>

      <h2 data-reveal className="mt-16 font-serif text-3xl font-semibold">
        Наши торговые базы
      </h2>
      <ul className="mt-6 space-y-3 text-lg" data-reveal>
        {site.branches.map((b) => (
          <li key={b.city}>
            <span className="font-semibold">{b.city}</span>, {b.address} —{" "}
            <a href={`tel:${b.phone.tel}`} className="text-oak-700 hover:underline">
              {b.phone.display}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-16 text-center">
        <CallButton />
      </div>
    </Container>
    </Page>
  );
}
