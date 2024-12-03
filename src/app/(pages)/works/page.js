import React from "react";
import dynamic from "next/dynamic";
const WorksSection = dynamic(
  () => import("../../components/sections/WorksSection"),
  {
    ssr: false,
  }
);
const worksPage = () => {
  return <WorksSection />;
};

export default worksPage;
