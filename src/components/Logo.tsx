// Временный логотип: годовые кольца + лист. Заменить на доработанный логотип клиента.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="var(--oak-100)" stroke="var(--oak-600)" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="12.5" fill="none" stroke="var(--oak-400)" strokeWidth="1.2" />
        <circle cx="20" cy="20" r="7" fill="none" stroke="var(--oak-400)" strokeWidth="1.2" />
        <path d="M20 30 C 12 24, 13 14, 20 9 C 27 14, 28 24, 20 30 Z" fill="var(--sage)" opacity="0.9" />
        <path d="M20 29 V 13" stroke="var(--birch)" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-2xl font-semibold tracking-wide text-walnut">Дриада</span>
    </span>
  );
}
