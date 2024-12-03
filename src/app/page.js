"use client";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/sections/HeroSection"), {
  ssr: false,
});
const SkillsSection = dynamic(
  () => import("./components/sections/SkillsSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <Container className="flex flex-col items-center p-5 ">
        <HeroSection />
        <SkillsSection />
        <Divider sx={{ my: 4, color: "secondary.main" }} />       
      </Container>
    </main>
  );
}
