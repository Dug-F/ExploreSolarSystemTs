export interface Astronaut {
  name: string;
  craft: string;
}

export interface Astronauts {
    message: string;
    number: number;
    people: Astronaut[];
}