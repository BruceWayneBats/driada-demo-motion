import Link from "next/link";
import { Logo } from "./Logo";
import { mainPhone, nav, site, whatsappUrl } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-oak-100 bg-oak-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-walnut-soft">{site.description}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Меню в подвале">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-walnut-soft hover:text-oak-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 text-sm">
          <a href={`tel:${mainPhone.tel}`} className="block font-semibold hover:text-oak-700">
            {mainPhone.display}
          </a>
          {site.branches.map((b) => (
            <p key={b.city} className="text-walnut-soft">
              {b.city}, {b.address}
            </p>
          ))}
          <a href={`mailto:${site.email}`} className="block text-walnut-soft hover:text-oak-700">
            {site.email}
          </a>
          <a href={whatsappUrl()} target="_blank" rel="noopener" className="block text-walnut-soft hover:text-oak-700">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-oak-100 py-5 text-center text-xs text-walnut-soft">
        © 2004–{new Date().getFullYear()} {site.name}. {site.legal && `${site.legal}. `}Информация на сайте не является публичной офертой.
      </div>
    </footer>
  );
}

