import type { Metadata } from "next";
import { Diag } from "./Diag";

export const metadata: Metadata = { title: "Проверка анимаций", robots: { index: false } };

export default function TestMotionPage() {
  return <Diag />;
}
