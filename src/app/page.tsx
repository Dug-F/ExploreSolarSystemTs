import Image from "next/image";
import { planetsData } from "./data/planetDataCache";
import { astronautsData } from "./data/astronautDataCache";
import Astronauts from "@/app/components/Astronauts";
import HomeImage from "@/app/components/HomeImage";
import { hotspots } from "@/app/constants/constants"

export default async function Home() {
  const astronautData = await astronautsData();

  return (
    <main>
      <HomeImage hotspots={hotspots} imageUrl="/planets.png" />
      <p className="text-white text-4xl text-center mt-10 mb-5">People In Space Right Now: {astronautData.number}</p>
      <ul>
        <Astronauts astronauts={astronautData.people} />
      </ul>
    </main>
  );
}
