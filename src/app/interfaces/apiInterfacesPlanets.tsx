export interface Bodies {
  bodies: Body[];
}

export interface Body {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons: [Moon];
  discoveredBy: string;
  discoveryDate: string;
  bodyType: string;
}

export interface Moon {
  moon: string;
  rel: string;
}

