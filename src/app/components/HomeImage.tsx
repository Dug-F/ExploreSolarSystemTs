"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { startResizeHandler, stopResizeHandler } from "@/app/functions/resizeHandler";
import { Hotspot, Hotspots } from "@/app/constants/constants";

interface HomeImageProps {
  hotspots: Hotspots;
  imageUrl: string;
}

const HomeImage = ({ hotspots, imageUrl }: HomeImageProps) => {
  const router = useRouter();

  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = startResizeHandler(setImageSize);

    return () => {
      stopResizeHandler(handleResize);
    };
  }, [startResizeHandler, stopResizeHandler]);

  const handleHotspotClick = (hotspot: Hotspot) => {
    router.push(hotspot.link);
  };

  return (
    <div className="mainImage relative w-4/5 max-w-custom mx-auto mt-24 overflow-hidden">
      <img id="hotspotImage" src={imageUrl} alt="Responsive Image" style={{ width: "100%", height: "auto" }} />

      {hotspots.map((hotspot) => {
        const width = `${(imageSize.width * hotspot.sizePercentage) / 100}px`;
        return (
          <div
            key={hotspot.id}
            className={`absolute cursor-pointer -translate-x-1/2 -translate-y-1/2`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              width: `${((imageSize.width * hotspot.sizePercentage) / 100) * 0.9}px`,
              height: `${((imageSize.width * hotspot.sizePercentage) / 100) * 0.9}px`,
            }}
            onClick={() => handleHotspotClick(hotspot)}
          >
            <button className="w-full h-full rounded-full hotspot" />
          </div>
        );
      })}
    </div>
  );
};

export default HomeImage;
