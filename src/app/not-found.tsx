import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="font-serif text-4xl font-semibold">Страница не найдена</h1>
      <Link href="/catalog" className="mt-6 inline-block text-oak-700 hover:underline">
        Перейти в каталог
      </Link>
    </Container>
  );
}
