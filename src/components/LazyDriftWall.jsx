"use client";

import dynamic from "next/dynamic";

import LazyOnView from "@/components/LazyOnView";

const DriftWall = dynamic(() => import("@/components/DriftWall"), { ssr: false });

export default function LazyDriftWall(props) {
  return (
    <LazyOnView>
      <DriftWall {...props} />
    </LazyOnView>
  );
}
