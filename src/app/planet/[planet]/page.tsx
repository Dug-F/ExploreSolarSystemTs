import React from "react";
import Moons from "@/app/components/Moons";
import { planetsData } from "@/app/data/planetDataCache";

interface Params {
  planet: string
}

const Planet = async ({ params }: {params: Params}) => {
  const planetData = await planetsData();
  let planet = planetData[params.planet];

  return (
    <>
      <h1 className="text-4xl text-center mt-12 mb-10">{planet.name}</h1>
      <p className="mx-16 mb-8">{planet.description}</p>

      {/* <Image className="planet-image" src={plntData.image} alt={`image of ${plntData.name}`}></Image> */}
      <img
        className="mx-auto"
        src={planet.image}
        alt={`image of ${planet.name}`}
        style={{ width: "60%" }} // Adjust the width value accordingly
      />

      <ul className="facts mx-auto mt-8 text-center">
        <li className="distance">Distance: {planet.distance}</li>
        <li className="radius">Radius: {planet.radius}</li>
        <li className="temperature">Temperature: {planet.temperature}</li>
        <li className="day">Day: {planet.day}</li>
        <li className="year">Year: {planet.year}</li>
        <li className="moons">Number of moons: {planet.moonsCount}</li>
      </ul>

      <Moons moonsData={planet.moons} />
    </>
  );
};

export default Planet;
