// Логотип клиента: надпись «Dриаdа» на срезе дерева (вариант 4 «На срезе», без трещины).
// Исходники всех вариантов — logo-concepts/driada-combo/.
export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <span className="inline-flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${process.env.BASE_PATH || ""}/logo.svg`} alt="Дриада" width={568} height={548} className={className} />
    </span>
  );
}
