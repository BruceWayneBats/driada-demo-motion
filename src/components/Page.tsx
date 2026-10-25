import { ViewTransition } from "react";

// Плавная смена страниц: старая уходит вверх с растворением, новая поднимается снизу.
// Обёртка ставится в каждый page.tsx — layout между переходами не размонтируется.
export function Page({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}

// Общий элемент между страницами: картинка товара «перелетает» из карточки на страницу товара
export function Shared({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <ViewTransition name={name} share="morph" default="none">
      {children}
    </ViewTransition>
  );
}
