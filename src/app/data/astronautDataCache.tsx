import {Astronaut, Astronauts} from "@/app/interfaces/apiInterfacesAstronauts";

let astronautsDataCache: Astronauts = {
  message: "initial",
  people: [],
  number: 0
};

export const astronautsData = async () => {
  // return existing object if it has already been populated
  if (astronautsDataCache.message !== "initial") {
    return astronautsDataCache;
  }

  console.log("Fetching astronauts data from api");

  // Perform the initial data fetch here
  const res = await fetch("http://api.open-notify.org/astros.json");
  astronautsDataCache = await res.json();

  return astronautsDataCache;
};
