// Каталог. Категории — из анкеты клиента; товары — ДЕМО-примеры (породы клиента:
// лиственница, липа, сосна, ель). Фото: положить в public/products/ и указать в images.

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

export const categories: Category[] = [
  { slug: "mebel", name: "Мебель", description: "Столы, стулья, скамьи и полки из массива.", kind: "furniture" },
  { slug: "bannaya-mebel", name: "Банная мебель", description: "Полки, лавки, подголовники и ковши из липы и лиственницы.", kind: "bath" },
  { slug: "pogonazh", name: "Погонаж", description: "Плинтус, наличник, раскладка, уголки.", kind: "moulding" },
  { slug: "obreznoy-material", name: "Обрезной материал", description: "Доска, брус и рейка камерной сушки.", kind: "lumber" },
  { slug: "mebelnye-shchity", name: "Мебельные щиты", description: "Клеёные щиты для столешниц, полок и ступеней.", kind: "board" },
  { slug: "panno", name: "Панно", description: "Декоративные панно и стеновые панели.", kind: "panel" },
  { slug: "lestnichnye-elementy", name: "Лестничные элементы", description: "Ступени, балясины, поручни, столбы.", kind: "stairs" },
  { slug: "masla", name: "Масла", description: "Масла и воски для защиты древесины.", kind: "finish" },
  { slug: "kraski", name: "Краски", description: "Краски и лазури для дерева внутри и снаружи.", kind: "paint" },
];

export const products: Product[] = [
  {
    slug: "stol-obedennyj-sosna",
    category: "mebel",
    name: "Стол обеденный из сосны",
    summary: "Массив сосны, покрытие маслом.",
    description:
      "Обеденный стол из массива сосны для дома, дачи и кафе. Столешница покрыта натуральным маслом с воском. Возможен выбор размера и тона.",
    specs: [
      ["Порода", "Сосна"],
      ["Размер", "1600 × 900 × 750 мм"],
      ["Покрытие", "Масло с воском"],
      ["Изготовление", "Под заказ, 2–3 недели"],
    ],
  },
  {
    slug: "skamya-sadovaya",
    category: "mebel",
    name: "Скамья садовая",
    summary: "Лиственница, для улицы.",
    description: "Скамья из лиственницы со скруглёнными кромками. Лиственница не боится влаги и подходит для улицы.",
    specs: [
      ["Порода", "Лиственница"],
      ["Длина", "1500 мм"],
      ["Покрытие", "Атмосферостойкое масло"],
    ],
  },
  {
    slug: "polka-nastennaya",
    category: "mebel",
    name: "Полка настенная",
    summary: "Сосна, скрытый крепёж.",
    description: "Лаконичная настенная полка из сосны со скрытым креплением.",
    specs: [
      ["Порода", "Сосна"],
      ["Размер", "800 × 200 × 30 мм"],
    ],
  },
  {
    slug: "lavka-bannaya-lipa",
    category: "bannaya-mebel",
    name: "Лавка банная",
    summary: "Липа, не нагревается и не даёт смолы.",
    description:
      "Лавка из липы для парной и комнаты отдыха. Липа почти не нагревается, не выделяет смолу и приятно пахнет.",
    specs: [
      ["Порода", "Липа"],
      ["Длина", "1500 мм"],
      ["Покрытие", "Без покрытия"],
    ],
  },
  {
    slug: "podgolovnik",
    category: "bannaya-mebel",
    name: "Подголовник для бани",
    summary: "Анатомическая форма.",
    description: "Подголовник из липы для полка в парной.",
    specs: [
      ["Порода", "Липа"],
      ["Размер", "400 × 250 мм"],
    ],
  },
  {
    slug: "plintus-napolnyj",
    category: "pogonazh",
    name: "Плинтус напольный",
    summary: "Сосна, сорт «Экстра».",
    description: "Напольный плинтус из сосны без сучков. Подходит под покраску и тонировку.",
    specs: [
      ["Порода", "Сосна, сорт «Экстра»"],
      ["Сечение", "15 × 45 мм"],
      ["Длина", "2,0–3,0 м"],
    ],
  },
  {
    slug: "nalichnik-dvernoj",
    category: "pogonazh",
    name: "Наличник дверной",
    summary: "Липа, классический профиль.",
    description: "Наличник из липы с классическим профилем для межкомнатных дверей.",
    specs: [
      ["Порода", "Липа"],
      ["Сечение", "15 × 70 мм"],
      ["Длина", "2,2 м"],
    ],
  },
  {
    slug: "doska-obreznaya",
    category: "obreznoy-material",
    name: "Доска обрезная",
    summary: "Сосна и ель, камерная сушка.",
    description: "Обрезная доска камерной сушки для строительства и столярных работ.",
    specs: [
      ["Порода", "Сосна, ель"],
      ["Сечение", "25–50 × 100–200 мм"],
      ["Длина", "3,0 / 6,0 м"],
      ["Влажность", "10–12%"],
    ],
  },
  {
    slug: "brus-strogannyj",
    category: "obreznoy-material",
    name: "Брус строганный",
    summary: "Ровная геометрия, четыре стороны.",
    description: "Строганный брус для каркасов, перекрытий и мебельного производства.",
    specs: [
      ["Порода", "Сосна, ель"],
      ["Сечение", "50 × 50 – 150 × 150 мм"],
      ["Длина", "3,0 / 6,0 м"],
    ],
  },
  {
    slug: "shchit-sosna-cellolamelnyj",
    category: "mebelnye-shchity",
    name: "Щит мебельный, сосна",
    summary: "Цельноламельный, сорт А.",
    description: "Клеёный мебельный щит из сосны для столешниц, полок, подоконников и ступеней.",
    specs: [
      ["Порода", "Сосна"],
      ["Толщина", "18 / 28 / 40 мм"],
      ["Размер", "до 3000 × 600 мм"],
    ],
  },
  {
    slug: "shchit-listvennica",
    category: "mebelnye-shchity",
    name: "Щит мебельный, лиственница",
    summary: "Сращённый, плотная древесина.",
    description: "Мебельный щит из лиственницы — прочный и влагостойкий.",
    specs: [
      ["Порода", "Лиственница"],
      ["Толщина", "20 / 40 мм"],
    ],
  },
  {
    slug: "panno-derevo-zhizni",
    category: "panno",
    name: "Панно «Древо жизни»",
    summary: "Ручная резьба по липе.",
    description: "Декоративное резное панно из липы. Изготавливается вручную, возможны индивидуальные размеры.",
    specs: [
      ["Порода", "Липа"],
      ["Размер", "600 × 900 мм"],
      ["Покрытие", "Масло, патина"],
    ],
  },
  {
    slug: "stupen-listvennica",
    category: "lestnichnye-elementy",
    name: "Ступень из лиственницы",
    summary: "Цельноламельная.",
    description: "Ступень из лиственницы для межэтажных лестниц. Изготовление по размерам заказчика.",
    specs: [
      ["Порода", "Лиственница"],
      ["Толщина", "40 мм"],
      ["Длина", "до 1500 мм"],
    ],
  },
  {
    slug: "balyasina-tochenaya",
    category: "lestnichnye-elementy",
    name: "Балясина точёная",
    summary: "Классический профиль.",
    description: "Точёная балясина из сосны для лестничных ограждений.",
    specs: [
      ["Порода", "Сосна"],
      ["Сечение", "50 × 50 мм"],
      ["Высота", "900 мм"],
    ],
  },
  {
    slug: "maslo-dlya-polkov",
    category: "masla",
    name: "Масло для полков",
    summary: "Для бань и саун.",
    description: "Масло для защиты полков и лавок в парной. Не липнет и не выделяет запаха при нагреве.",
    specs: [
      ["Объём", "0,75 / 2,5 л"],
      ["Расход", "до 15 м² / л"],
    ],
  },
  {
    slug: "maslo-terrasnoe",
    category: "masla",
    name: "Масло террасное",
    summary: "Для настилов и фасадов.",
    description: "Масло для террасной доски и садовой мебели из лиственницы.",
    specs: [
      ["Объём", "1 / 2,5 л"],
      ["Расход", "до 12 м² / л"],
    ],
  },
  {
    slug: "kraska-fasadnaya",
    category: "kraski",
    name: "Краска фасадная для дерева",
    summary: "Укрывная, атмосферостойкая.",
    description: "Укрывная краска для деревянных фасадов, заборов и беседок.",
    specs: [
      ["Объём", "0,9 / 2,7 / 9 л"],
      ["Расход", "8–10 м² / л"],
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProducts = (category: string) => products.filter((p) => p.category === category);

export const getProduct = (category: string, slug: string) =>
  products.find((p) => p.category === category && p.slug === slug);
