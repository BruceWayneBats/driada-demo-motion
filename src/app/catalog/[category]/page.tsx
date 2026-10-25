import { Page } from "@/components/Page";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs, CallButton, Container, PageTitle } from "@/components/ui";
import { categories, getCategory, getProducts } from "@/content/catalog";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(props: PageProps<"/catalog/[category]">): Promise<Metadata> {
  const { category } = await props.params;
  const c = getCategory(category);
  return c ? { title: c.name, description: c.description } : {};
}

export default async function CategoryPage(props: PageProps<"/catalog/[category]">) {
  const { category: slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = getProducts(slug);

  return (
    <Page>
    <Container>
      <Breadcrumbs items={[{ href: "/catalog", label: "Каталог" }, { label: category.name }]} />
      <PageTitle title={category.name} lead={category.description} />

      <div data-reveal className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/catalog/${c.slug}`}
            className={`btn shrink-0 rounded-full border px-4 py-2 text-sm ${
              c.slug === slug
                ? "border-walnut bg-walnut text-birch"
                : "border-oak-200 text-walnut-soft hover:border-oak-400"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {items.length > 0 ? (
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, n) => (
            <ProductCard key={p.slug} product={p} category={category} index={n} />
          ))}
        </div>
      ) : (
        <p className="text-walnut-soft">Раздел наполняется. Позвоните — расскажем о наличии.</p>
      )}

      <div data-reveal className="mt-16 rounded-3xl bg-oak-50 p-8 text-center">
        <p className="text-lg">Не нашли нужное? Изготовим по вашим размерам.</p>
        <CallButton className="mt-5" />
      </div>
    </Container>
    </Page>
  );
}
