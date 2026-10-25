import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "./Icons";
import { mainPhone, whatsappUrl } from "@/content/site";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function PageTitle({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="pb-10 pt-12 sm:pt-16" data-hero>
      <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      {lead && <p style={{ "--i": 1 } as React.CSSProperties} className="mt-4 max-w-2xl text-lg leading-relaxed text-walnut-soft">{lead}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Навигация" className="pt-8 text-sm text-walnut-soft">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-oak-400">/</span>}
            {it.href ? (
              <Link href={it.href} className="hover:text-oak-700">
                {it.label}
              </Link>
            ) : (
              <span className="text-walnut">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${mainPhone.tel}`}
      className={`btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-oak-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-oak-700 ${className}`}
    >
      <PhoneIcon />
      Позвонить <span className="max-[359px]:hidden">{mainPhone.display}</span>
    </a>
  );
}

export function WhatsAppButton({ text, className = "" }: { text?: string; className?: string }) {
  return (
    <a
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener"
      className={`btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-oak-200 bg-white/60 px-6 py-3.5 font-semibold text-walnut transition-colors hover:border-oak-400 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 text-[#25a35a]" />
      Написать в WhatsApp
    </a>
  );
}
