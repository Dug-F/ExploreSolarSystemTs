export interface Hotspot {
  id: number;
  x: number;
  y: number;
  label: string;
  sizePercentage: number;
  link: string;
}

export type Hotspots = Hotspot[];

export const hotspots = [
  { id: 1, x: 49.1, y: 87.1, label: "Mercury", sizePercentage: 7, link: "/planet/Mercury" },
  { id: 2, x: 49, y: 78, label: "Venus", sizePercentage: 9.5, link: "/planet/Venus" },
  { id: 3, x: 48.9, y: 67.55, label: "Earth", sizePercentage: 9.7, link: "/planet/Earth" },
  { id: 4, x: 49, y: 56.7, label: "Mars", sizePercentage: 6.5, link: "planet/Mars" },
  { id: 5, x: 49, y: 44.7, label: "Jupiter", sizePercentage: 19, link: "/planet/Jupiter" },
  { id: 6, x: 49.6, y: 26.8, label: "Saturn", sizePercentage: 10.5, link: "planet/Saturn" },
  { id: 7, x: 49.1, y: 14.18, label: "Uranus", sizePercentage: 6.8, link: "planet/Uranus" },
  { id: 8, x: 48.9, y: 4.45, label: "Neptune", sizePercentage: 8, link: "planet/Neptune" },
];
