// Акции: content/settings/promos.json (правятся в админке).

import { readJson } from "./load";

export type Promo = {
  title: string;
  text: string;
  until?: string;
};

export const promos: Promo[] = readJson<{ promos?: Promo[] }>("settings/promos.json").promos ?? [];
