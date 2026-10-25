import { Page } from "@/components/Page";
import type { Metadata } from "next";
import { CategoryCard } from "@/components/ProductCard";
import { Container, PageTitle } from "@/components/ui";
import { categories, getProducts } from "@/content/catalog";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Каталог изделий из дерева: мебель, погонаж, обрезной материал, панно, лестничные элементы.",
};

export default function CatalogPage() {
  return (
    <Page>
    <Container>
      <PageTitle title="Каталог" lead="Выберите раздел. Наличие и сроки изготовления уточняйте по телефону." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, n) => (
          <CategoryCard key={c.slug} category={c} count={getProducts(c.slug).length} index={n} />
        ))}
      </div>
    </Container>
    </Page>
  );
}
