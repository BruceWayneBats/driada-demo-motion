import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";
import { mainPhone, nav } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-oak-100 bg-birch/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Дриада — на главную">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="navlink text-[15px] text-walnut-soft hover:text-oak-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${mainPhone.tel}`}
            className="hidden items-center gap-2 font-semibold text-walnut hover:text-oak-700 lg:flex"
          >
            <PhoneIcon className="h-4 w-4 text-oak-600" />
            {mainPhone.display}
          </a>
          <a
            href={`tel:${mainPhone.tel}`}
            className="btn flex h-10 w-10 items-center justify-center rounded-full bg-oak-600 text-white lg:hidden"
            aria-label={`Позвонить ${mainPhone.display}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>

          {/* Мобильное меню без JS */}
          <details className="group relative md:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-oak-200"
              aria-label="Меню"
            >
              <span className="flex flex-col gap-1.5 group-open:hidden">
                <span className="block h-0.5 w-5 bg-walnut" />
                <span className="block h-0.5 w-5 bg-walnut" />
              </span>
              <span className="hidden text-xl leading-none group-open:block">×</span>
            </summary>
            <nav
              className="absolute right-0 top-12 w-56 rounded-2xl border border-oak-100 bg-birch p-2 shadow-lg shadow-oak-700/10"
              aria-label="Мобильное меню"
            >
              <Link href="/" className="block rounded-xl px-4 py-3 hover:bg-oak-50">
                Главная
              </Link>
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 hover:bg-oak-50">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
