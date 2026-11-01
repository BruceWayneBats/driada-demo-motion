// Чтение контента из папки content/ при сборке. Эти файлы правит админка (/admin, Sveltia CMS).
import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";

const root = join(process.cwd(), "content");

export const readJson = <T>(file: string): T => JSON.parse(readFileSync(join(root, file), "utf8"));

// Все записи папки: имя файла (без .json) — идентификатор записи
export const readFolder = <T>(dir: string): (T & { id: string })[] =>
  readdirSync(join(root, dir))
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => ({ ...readJson<T>(join(dir, f)), id: basename(f, ".json") }));

const translit: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "j", к: "k",
  л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "c",
  ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

// Адрес страницы латиницей: админка может назвать файл по-русски («стол-из-сосны»)
export const toSlug = (s: string) =>
  s
    .toLowerCase()
    .split("")
    .map((ch) => translit[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// «+7 (8552) 44-88-00» → «+78552448800»; ведущая 8 у 11-значного номера → 7
export const toTel = (s: string) => {
  let d = s.replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("8")) d = "7" + d.slice(1);
  return d ? `+${d}` : "";
};

// Путь к загруженному файлу с учётом подпапки хостинга (BASE_PATH)
export const asset = (src: string) => (src.startsWith("/") ? `${process.env.BASE_PATH || ""}${src}` : src);
