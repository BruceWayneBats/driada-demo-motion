import Link from "next/link";
import { ProductImage } from "./ProductImage";
import { Shared } from "./Page";
import type { Category, Product } from "@/content/catalog";

export function ProductCard({ product, category, index = 0 }: { product: Product; category: Category; index?: number }) {
  return (
    <Link
      href={`/catalog/${category.slug}/${product.slug}`}
      className="group block"
      data-reveal
      style={{ "--d": `${(index % 3) * 110}ms` } as React.CSSProperties}
    >
      <Shared name={`img-${product.slug}`}>
        <ProductImage
        src={product.images?.[0]}
        alt={product.name}
        kind={category.kind}
        seed={product.slug}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </Shared>
      <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-oak-700">{product.name}</h3>
      <p className="mt-1 text-sm text-walnut-soft">{product.summary}</p>
    </Link>
  );
}

export function CategoryCard({ category, count, index = 0 }: { category: Category; count: number; index?: number }) {
  return (
    <Link
      href={`/catalog/${category.slug}`}
      className="lift group block rounded-3xl border border-oak-100 bg-white/50 p-3 hover:border-oak-200 hover:bg-white"
      data-reveal
      style={{ "--d": `${(index % 3) * 110}ms` } as React.CSSProperties}
    >
      <ProductImage
        alt={category.name}
        kind={category.kind}
        seed={category.slug}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex items-baseline justify-between gap-3 px-2 pb-2 pt-4">
        <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-oak-700">{category.name}</h3>
        <span className="text-sm text-walnut-soft">{count} поз.</span>
      </div>
      <p className="px-2 pb-2 text-sm text-walnut-soft">{category.description}</p>
    </Link>
  );
}
