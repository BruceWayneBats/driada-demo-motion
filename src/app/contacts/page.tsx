import { Page } from "@/components/Page";
import type { Metadata } from "next";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { Container, PageTitle } from "@/components/ui";
import { mainPhone, site, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Телефоны, почта, WhatsApp и адреса филиалов компании «Дриада».",
};

export default function ContactsPage() {
  return (
    <Page>
    <Container>
      <PageTitle title="Контакты" lead="Один номер для всех городов — звонок переадресуется в ближайшую торговую базу." />

      <div className="grid gap-6 md:grid-cols-3">
        <div data-reveal className="lift rounded-3xl bg-oak-50 p-7">
          <PhoneIcon className="h-6 w-6 text-oak-600" />
          <div className="mt-4 space-y-3">
            {[mainPhone].map((p) => (
              <div key={p.tel}>
                <p className="text-sm text-walnut-soft">{p.label}</p>
                <a href={`tel:${p.tel}`} className="text-xl font-semibold hover:text-oak-700">
                  {p.display}
                </a>
              </div>
            ))}
          </div>
        </div>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          data-reveal
          style={{ "--d": "120ms" } as React.CSSProperties}
          className="lift rounded-3xl bg-oak-50 p-7 hover:bg-oak-100"
        >
          <WhatsAppIcon className="h-6 w-6 text-[#25a35a]" />
          <p className="mt-4 text-sm text-walnut-soft">WhatsApp</p>
          <p className="text-xl font-semibold">Написать сообщение</p>
        </a>
        <a
          href={`mailto:${site.email}`}
          data-reveal
          style={{ "--d": "240ms" } as React.CSSProperties}
          className="lift rounded-3xl bg-oak-50 p-7 hover:bg-oak-100"
        >
          <MailIcon className="h-6 w-6 text-oak-600" />
          <p className="mt-4 text-sm text-walnut-soft">Электронная почта</p>
          <p className="break-all text-xl font-semibold">{site.email}</p>
        </a>
      </div>

      <h2 data-reveal className="mt-16 font-serif text-3xl font-semibold">
        Торговые базы
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {site.branches.map((b, n) => (
          <div
            key={b.address}
            data-reveal
            style={{ "--d": `${n * 120}ms` } as React.CSSProperties}
            className="lift rounded-3xl border border-oak-200 p-7"
          >
            <PinIcon className="h-6 w-6 text-oak-600" />
            <h3 className="mt-4 text-lg font-semibold">{b.city}</h3>
            <p className="mt-1">{b.address}</p>
            <p className="mt-1 text-sm text-walnut-soft">{b.hours}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a href={`tel:${b.phone.tel}`} className="font-semibold text-oak-700 hover:underline">
                {b.phone.display}
              </a>
              <a href={b.mapUrl} target="_blank" rel="noopener" className="text-walnut-soft hover:text-oak-700">
                Открыть на карте →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </Page>
  );
}
