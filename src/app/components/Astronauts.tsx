import React from "react";
import { Astronaut as apiAstronaut } from "@/app/interfaces/apiInterfacesAstronauts";

interface AstronautsProps {
  astronauts: apiAstronaut[];
}

export default function Astronauts({ astronauts }: AstronautsProps) {
  return astronauts.map((astronaut) => {
    return (
      <li key={astronaut.name} className="bg-black text-white text-center mt-1">
        {astronaut.name} in spacecraft {astronaut.craft}
      </li>
    );
  });
}
