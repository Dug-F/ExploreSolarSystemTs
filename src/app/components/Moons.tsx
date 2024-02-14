import React from "react";
import {Moon} from "@/app/classes/Moon"

interface MoonsDataProps {
  moonsData: Moon[]
}

export default function Moons({ moonsData }: MoonsDataProps) {
  if (moonsData.length > 0) {
    const moons = moonsData.map(moon => {
      return (
        <div key={moon.name} className="flex flex-1 w-4/5 justify-center align-middle text-center py-1 mx-auto">
          <p className="moonName w-1/3"> {moon.name}</p>
          <p className="w-1/3">{moon.discoveredBy ?? "unknown"}</p>
          <p className="w-1/3">{moon.discoveryDate ?? "unknown"}</p>
        </div>
      );
    });
    return (
      <div className="flex flex-col align-middle mb-3">
        <h2 className="text-3xl text-center mt-8 mb-2">Moons</h2>
        <div className="flex flex-1 w-4/5 justify-center align-middle text-center py-1 mx-auto text-xl font-bold">
          <p className="moonName w-1/3">Name</p>
          <p className="w-1/3">Discovered By</p>
          <p className="w-1/3">Discovered Date</p>
        </div>
        {moons}
      </div>
    );
  }
  return (
    <h2 key="no-moons" className="text-2xl text-center mt-8 mb-2">
      No Moons
    </h2>
  );
}
