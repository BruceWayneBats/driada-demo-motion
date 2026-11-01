// Каталог: категории и товары из content/categories и content/products (правятся в админке).

import { asset, readFolder, toSlug } from "./load";

export type CategoryKind = "furniture" | "bath" | "moulding" | "lumber" | "board" | "panel" | "stairs" | "finish" | "paint";

export type Category = {
  slug: string;
  name: string;
  description: string;
  kind: CategoryKind;
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  summary: string;
  description: string;
  specs?: [string, string][];
  images?: string[];
};

type CategoryFile = Omit<Category, "slug"> & { order?: number };
type ProductFile = Omit<Product, "slug" | "specs"> & { specs?: { name: string; value: string }[] };

export const categories: Category[] = readFolder<CategoryFile>("categories")
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  .map(({ id, name, description, kind }) => ({ slug: toSlug(id), name, description: description ?? "", kind }));

export const products: Product[] = readFolder<ProductFile>("products")
  .map((p) => ({
    slug: toSlug(p.id),
    category: toSlug(p.category ?? ""),
    name: p.name,
    summary: p.summary ?? "",
    description: p.description ?? "",
    specs: (p.specs ?? []).filter((s) => s.name && s.value).map((s): [string, string] => [s.name, s.value]),
    images: (p.images ?? []).filter(Boolean).map(asset),
  }))
  .filter((p) => categories.some((c) => c.slug === p.category));

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProducts = (category: string) => products.filter((p) => p.category === category);

export const getProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);
