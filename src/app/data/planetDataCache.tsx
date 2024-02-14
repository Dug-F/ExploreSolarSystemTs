import {Bodies as ApiBodies, Body as ApiBody, Moon as ApiMoon} from "@/app/interfaces/apiInterfacesPlanets"
import {Planet} from "@/app/classes/Planet"
import {Moon} from "@/app/classes/Moon"
import {supplementaryData} from "@/app/data/supplementaryData";
import { SupplementaryDataInterfaceObject } from "../interfaces/supplementaryDataInterfaces";

let planetsDataCache: {[key: string]: Planet} = {};
const moons: {[key: string]: ApiBody} = {};

export const planetsData = async () => {
  // return existing object if it has already been populated
  if (Object.keys(planetsDataCache).length > 0) {
    return planetsDataCache;
  }

  console.log("Fetching planets data from api");

  // Perform the initial data fetch here
  const response = await fetch("https://api.le-systeme-solaire.net/rest/bodies");
  const data: ApiBodies = await response.json();

  // extract moons from fetched data
  for (let body of data.bodies) {
    if (body.bodyType === "Moon") {
      moons[body.name] = body;
    }
  }

  // extract each planet and the moons for that planet
  for (let body of data.bodies) {
    if (body.isPlanet) {
      const planetMoons: Moon[] = [];
      for (let moon of body?.moons ?? []) {
        const planetMoon: ApiBody = moons[moon.moon];
        planetMoons.push(new Moon(planetMoon.englishName, planetMoon.discoveredBy, planetMoon.discoveryDate));
      }
      const planet: Planet = new Planet(body.englishName);
      planet.moons = planetMoons;
      planetsDataCache[body.englishName] = planet;
      planetsDataCache[body.englishName].addSupplementaryData(supplementaryData[body.englishName] as SupplementaryDataInterfaceObject);
    }
  }

  console.log("PlanetsDataCache: ", planetsDataCache);

  return planetsDataCache;
};
