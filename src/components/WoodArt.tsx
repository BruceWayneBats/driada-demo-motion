import type { CategoryKind } from "@/content/catalog";

// Иллюстрация-заглушка вместо фото: текстура дерева + контур изделия.
// Используется, пока у товара нет фотографий.

const tones = [
  ["#f3e6d1", "#e7d2b2"],
  ["#efe0c6", "#dfc59d"],
  ["#f6ecdc", "#e9d6b8"],
  ["#f1e2cb", "#e2c9a3"],
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const shapes: Record<CategoryKind, React.ReactNode> = {
  furniture: (
    <g>
      <rect x="110" y="120" width="180" height="14" rx="3" />
      <path d="M125 134 V 210 M275 134 V 210 M140 134 L 160 175 M260 134 L 240 175" />
    </g>
  ),
  bath: (
    <g>
      <path d="M95 160 H 225 M95 172 H 225 M105 172 V 210 M215 172 V 210" />
      <path d="M250 140 H 310 L 300 205 H 260 Z M262 140 V 125 H 298 V 140" />
      <path d="M255 160 H 305" opacity="0.6" />
    </g>
  ),
  board: (
    <g>
      <rect x="90" y="105" width="220" height="100" rx="3" />
      <path d="M90 130 H 310 M90 155 H 310 M90 180 H 310" opacity="0.6" />
    </g>
  ),
  finish: (
    <g>
      <path d="M150 110 H 250 V 210 H 150 Z" />
      <path d="M150 110 C 150 95, 250 95, 250 110 M175 98 C 180 70, 220 70, 225 98" />
      <path d="M150 140 H 250 M150 185 H 250" opacity="0.6" />
      <path d="M200 152 C 190 165, 190 172, 200 175 C 210 172, 210 165, 200 152 Z" />
    </g>
  ),
  paint: (
    <g>
      <rect x="175" y="70" width="50" height="70" rx="4" />
      <path d="M185 140 V 160 H 215 V 140 M190 160 C 185 185, 190 205, 200 215 C 210 205, 215 185, 210 160" />
      <path d="M110 210 C 150 195, 250 225, 290 205" opacity="0.6" />
    </g>
  ),
  moulding: (
    <g>
      <path d="M90 200 V 110 H 130 C 130 130, 150 135, 160 150 C 170 165, 175 185, 200 190 H 310 V 200 Z" />
      <path d="M110 200 V 125" opacity="0.5" />
    </g>
  ),
  lumber: (
    <g>
      <rect x="90" y="175" width="220" height="24" rx="2" />
      <rect x="105" y="147" width="200" height="24" rx="2" />
      <rect x="120" y="119" width="180" height="24" rx="2" />
    </g>
  ),
  panel: (
    <g>
      <rect x="130" y="85" width="140" height="130" rx="4" />
      <rect x="145" y="100" width="110" height="100" rx="2" opacity="0.6" />
      <path d="M200 185 V 130 M200 150 C 185 140, 178 130, 180 118 M200 140 C 215 130, 222 122, 220 110" />
    </g>
  ),
  stairs: (
    <g>
      <path d="M95 210 H 145 V 180 H 195 V 150 H 245 V 120 H 295 V 90" />
      <path d="M150 180 V 120 M200 150 V 90 M250 120 V 60 M135 140 L 285 50" opacity="0.7" />
    </g>
  ),
};

export function WoodArt({
  kind,
  seed,
  className = "",
  animated = false,
}: {
  kind: CategoryKind;
  seed: string;
  className?: string;
  animated?: boolean;
}) {
  const h = hash(seed);
  const [a, b] = tones[h % tones.length];
  const shift = (h % 40) - 20;
  const id = `g${h}`;
  return (
    <svg viewBox="0 0 400 300" className={className} role="img" aria-label="Иллюстрация изделия">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <g fill="none" stroke="#c9a77c" strokeOpacity="0.35" strokeWidth="1.2" className={animated ? "wood-grain" : undefined}>
        {Array.from({ length: 9 }, (_, i) => {
          const y = 20 + i * 34;
          return (
            <path
              key={i}
              d={`M-10 ${y} C 100 ${y + shift}, 180 ${y - shift}, 260 ${y + shift / 2} S 380 ${y - shift}, 410 ${y}`}
            />
          );
        })}
      </g>
      <g fill="none" stroke="#8a5c33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
        <g className="wood-draw">{shapes[kind]}</g>
      </g>
    </svg>
  );
}
