import { Page } from "@/components/Page";
import type { Metadata } from "next";
import { CallButton, Container, PageTitle } from "@/components/ui";
import { promos } from "@/content/promo";

export const metadata: Metadata = {
  title: "Акции",
  description: "Действующие акции и специальные предложения компании «Дриада».",
};

export default function PromoPage() {
  return (
    <Page>
    <Container>
      <PageTitle title="Акции" lead="Условия уточняйте у менеджера по телефону." />
      {promos.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {promos.map((p, n) => (
            <article
              key={p.title}
              data-reveal
              style={{ "--d": `${n * 140}ms` } as React.CSSProperties}
              className="lift rounded-3xl border border-oak-200 bg-white/50 p-8">
              {p.until && (
                <span className="inline-block rounded-full bg-oak-100 px-3 py-1 text-xs font-semibold text-oak-700">
                  {p.until}
                </span>
              )}
              <h2 className="mt-4 font-serif text-2xl font-semibold leading-snug">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-walnut-soft">{p.text}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-walnut-soft">Сейчас действующих акций нет.</p>
      )}
      <div className="mt-14 text-center">
        <CallButton />
      </div>
    </Container>
    </Page>
  );
}
