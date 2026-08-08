"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () =>
    import("@/components/portfolio/hero-scene").then(
      (module) => module.HeroScene,
    ),
  {
    ssr: false,
    loading: () => null,
  },
);

export function LazyHeroScene() {
  return <HeroScene />;
}
