import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { Page, Shared } from "@/components/Page";
import { PhoneIcon } from "@/components/Icons";
import { Breadcrumbs, CallButton, Container, WhatsAppButton } from "@/components/ui";
import { getCategory, getProduct, getProducts, products } from "@/content/catalog";
import { mainPhone } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, product: p.slug }));
}

export async function generateMetadata(props: PageProps<"/catalog/[category]/[product]">): Promise<Metadata> {
  const { category, product } = await props.params;
  const p = getProduct(category, product);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProductPage(props: PageProps<"/catalog/[category]/[product]">) {
  const { category: cSlug, product: pSlug } = await props.params;
  const category = getCategory(cSlug);
  const product = getProduct(cSlug, pSlug);
  if (!category || !product) notFound();

  const images = product.images?.length ? product.images : [undefined];
  const related = getProducts(cSlug).filter((p) => p.slug !== pSlug).slice(0, 3);

  return (
    <Page>
      <Container>
        <Breadcrumbs
          items={[
            { href: "/catalog", label: "Каталог" },
            { href: `/catalog/${category.slug}`, label: category.name },
            { label: product.name },
          ]}
        />

        <div className="grid gap-10 pt-8 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {images.map((src, i) => {
              const img = (
                <ProductImage
                  key={i}
                  src={src}
                  alt={`${product.name}${i ? `, фото ${i + 1}` : ""}`}
                  kind={category.kind}
                  seed={i ? product.slug + i : product.slug}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={i === 0}
                />
              );
              return i === 0 ? (
                <Shared key={i} name={`img-${product.slug}`}>
                  {img}
                </Shared>
              ) : (
                img
              );
            })}
          </div>

          <div className="md:sticky md:top-24 md:self-start" data-hero>
            <h1 style={{ "--i": 0 } as React.CSSProperties} className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              {product.name}
            </h1>
            <p style={{ "--i": 1 } as React.CSSProperties} className="mt-5 text-lg leading-relaxed text-walnut-soft">
              {product.description}
            </p>

            {product.specs && (
              <dl style={{ "--i": 2 } as React.CSSProperties} className="mt-8 divide-y divide-oak-100 border-y border-oak-100">
                {product.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3 text-[15px]">
                    <dt className="text-walnut-soft">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div style={{ "--i": 3 } as React.CSSProperties} className="mt-8 rounded-3xl bg-oak-50 p-6">
              <p className="font-semibold">Узнать наличие, сроки и стоимость</p>
              <p className="mt-1 text-sm text-walnut-soft">Ответим на вопросы и поможем с выбором.</p>
              <div className="mt-5 flex flex-col gap-3">
                <CallButton />
                <WhatsAppButton text={`Здравствуйте! Интересует: ${product.name}`} />
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 data-reveal className="font-serif text-2xl font-semibold">Ещё в разделе «{category.name}»</h2>
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, n) => (
                <ProductCard key={p.slug} product={p} category={category} index={n} />
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Липкая кнопка звонка на телефонах */}
      <div className="callbar fixed inset-x-0 bottom-0 z-20 border-t border-oak-100 bg-birch/95 p-3 backdrop-blur md:hidden">
        <a
          href={`tel:${mainPhone.tel}`}
          className="flex items-center justify-center gap-2.5 rounded-full bg-oak-600 py-3.5 font-semibold text-white"
        >
          <PhoneIcon /> Позвонить
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </Page>
  );
}
