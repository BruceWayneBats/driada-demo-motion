import Image from "next/image";
import { WoodArt } from "./WoodArt";
import type { CategoryKind } from "@/content/catalog";

export function ProductImage({
  src,
  alt,
  kind,
  seed,
  sizes,
  priority,
}: {
  src?: string;
  alt: string;
  kind: CategoryKind;
  seed: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="zoom relative aspect-[4/3] overflow-hidden rounded-2xl bg-oak-50">
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <WoodArt kind={kind} seed={seed} className="h-full w-full" />
      )}
    </div>
  );
}
