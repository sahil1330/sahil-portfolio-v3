"use client";

import {
  Component,
  lazy,
  Suspense,
  type ReactNode,
} from "react";

const HeroScene = lazy(() =>
  import("@/components/portfolio/hero-scene").then((module) => ({
    default: module.HeroScene,
  })),
);

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // The HTML/CSS portrait underneath remains visible if WebGL fails.
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function LazyHeroScene() {
  return (
    <SceneErrorBoundary>
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
    </SceneErrorBoundary>
  );
}
