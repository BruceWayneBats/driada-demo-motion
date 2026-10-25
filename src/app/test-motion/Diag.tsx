"use client";

import { useEffect, useState } from "react";

// Диагностика анимаций на устройстве (страница не в меню, только для проверки)
export function Diag() {
  const [rows, setRows] = useState<[string, string][]>([]);

  useEffect(() => {
    const mm = (q: string) => (window.matchMedia(q).matches ? "да" : "нет");
    const id = requestAnimationFrame(() =>
      setRows([
      ["Уменьшение движения (prefers-reduced-motion)", mm("(prefers-reduced-motion: reduce)")],
      ["View Transitions (переходы страниц)", "startViewTransition" in document ? "есть" : "нет"],
      ["view-transition-class", CSS.supports("view-transition-class: a") ? "есть" : "нет"],
      ["IntersectionObserver (появление при прокрутке)", "IntersectionObserver" in window ? "есть" : "нет"],
      ["Классы html", document.documentElement.className.replace(/__\S+/g, "").trim() || "—"],
      ["Наведение мышью (hover)", mm("(hover: hover)")],
        ["Браузер", navigator.userAgent],
      ]),
    );
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="font-serif text-3xl font-semibold">Проверка анимаций</h1>
      <p className="mt-2 text-walnut-soft">Сделайте скриншот этой страницы и пришлите.</p>
      <div className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-oak-200 border-t-oak-600" style={{ animation: "spin 1s linear infinite" }} />
        <p>Если кружок крутится — CSS-анимации на устройстве работают.</p>
      </div>
      <dl className="mt-8 divide-y divide-oak-100 border-y border-oak-100 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-3">
            <dt className="text-walnut-soft">{k}</dt>
            <dd className="break-all text-right font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <style>{"@keyframes spin{to{transform:rotate(360deg)}}"}</style>
    </div>
  );
}
