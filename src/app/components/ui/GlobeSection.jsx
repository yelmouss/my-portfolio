"use client";
import Box from "@mui/material/Box";
import { sampleArcs } from "@/data/sampleArcs";
import dynamic from "next/dynamic";
const World = dynamic(() => import("./globe"), {
  ssr: false,
});

export default function GlobeSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#393E46",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(0, 173, 181, 0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#222831",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  return (
    <Box width={420} height={400}>
      <World data={sampleArcs} globeConfig={globeConfig} />
    </Box>
  );
}
