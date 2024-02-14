export interface SupplementaryDataInterfaceObject {
  id: string;
  name: string;
  distance: string;
  radius: string;
  temperature: string;
  day: string;
  year: string;
  moonsCount: string;
  image: string;
  description: string;
}

export interface SupplementaryDataInterface {
  [key: string]: SupplementaryDataInterfaceObject;
}
