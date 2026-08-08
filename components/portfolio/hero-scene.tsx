"use client";

import { ContactShadows, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group, Mesh } from "three";

gsap.registerPlugin(ScrollTrigger);

function InterfacePanel({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh>
        <boxGeometry args={[2.2, 1.35, 0.035]} />
        <meshStandardMaterial
          color="#252b30"
          emissive="#ff5a36"
          emissiveIntensity={0.04}
          metalness={0.7}
          roughness={0.34}
          transparent
          opacity={0.72}
        />
      </mesh>
      <mesh position={[-0.58, 0.34, 0.03]}>
        <boxGeometry args={[0.72, 0.08, 0.02]} />
        <meshBasicMaterial color="#ff5a36" />
      </mesh>
      <mesh position={[-0.2, 0.04, 0.03]}>
        <boxGeometry args={[1.48, 0.035, 0.02]} />
        <meshBasicMaterial color="#71777d" />
      </mesh>
      <mesh position={[-0.45, -0.16, 0.03]}>
        <boxGeometry args={[0.98, 0.035, 0.02]} />
        <meshBasicMaterial color="#4d5358" />
      </mesh>
    </group>
  );
}

function Mannequin() {
  const group = useRef<Group>(null);
  const head = useRef<Mesh>(null);
  const panels = useRef<Group>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (head.current) {
      head.current.rotation.y = Math.sin(elapsed * 0.55) * 0.08;
      head.current.position.y = 1.72 + Math.sin(elapsed * 0.9) * 0.015;
    }
  });

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      "(min-width: 781px) and (prefers-reduced-motion: no-preference)",
      () => {
        if (!group.current || !panels.current) return;

        gsap.set(panels.current.children, { scale: 0.01 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero-chapter",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        timeline
          .to(group.current.rotation, { y: -0.45, duration: 0.28, ease: "sine.inOut" }, 0.08)
          .to(group.current.position, { x: 0.32, y: -0.08, duration: 0.28, ease: "sine.inOut" }, 0.08)
          .to(panels.current.children, {
            scale: 1,
            duration: 0.2,
            stagger: 0.035,
            ease: "power3.out",
          }, 0.23)
          .to(group.current.rotation, { y: 0.5, duration: 0.34, ease: "sine.inOut" }, 0.52)
          .to(group.current.position, { x: -0.2, y: 0.05, duration: 0.34, ease: "sine.inOut" }, 0.52)
          .to(panels.current.rotation, { y: -0.42, z: 0.05, duration: 0.34, ease: "sine.inOut" }, 0.52)
          .to(panels.current.position, { z: -0.7, duration: 0.34, ease: "sine.inOut" }, 0.52)
          .to(group.current.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 0.22, ease: "sine.inOut" }, 0.78);
      },
    );

    return () => media.revert();
  }, []);

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      <group ref={panels} position={[0, 0.4, -1.4]}>
        <InterfacePanel position={[-1.55, 0.72, 0.1]} rotation={[0.02, 0.32, -0.02]} scale={[1, 1, 1]} />
        <InterfacePanel position={[1.52, 0.38, -0.2]} rotation={[0, -0.34, 0.025]} scale={[0.9, 0.9, 0.9]} />
        <InterfacePanel position={[0.1, -0.85, -0.55]} rotation={[-0.05, 0.06, 0]} scale={[0.78, 0.78, 0.78]} />
      </group>

      <Float speed={1.1} rotationIntensity={0.025} floatIntensity={0.08}>
        <group>
          <mesh ref={head} position={[0, 1.72, 0]} scale={[0.82, 1, 0.86]} castShadow>
            <sphereGeometry args={[0.52, 28, 28]} />
            <meshStandardMaterial color="#9b6d53" roughness={0.78} />
          </mesh>
          <mesh position={[0, 2.02, -0.02]} scale={[0.84, 0.45, 0.88]} castShadow>
            <sphereGeometry args={[0.54, 24, 24]} />
            <meshStandardMaterial color="#14171a" roughness={0.92} />
          </mesh>
          <mesh position={[0, 0.48, 0]} castShadow>
            <capsuleGeometry args={[0.62, 1.42, 10, 20]} />
            <meshStandardMaterial color="#1e2328" metalness={0.12} roughness={0.72} />
          </mesh>
          <mesh position={[0, 0.68, 0.61]} castShadow>
            <boxGeometry args={[0.42, 0.1, 0.03]} />
            <meshStandardMaterial color="#ff5a36" emissive="#ff5a36" emissiveIntensity={0.24} />
          </mesh>
          <mesh position={[-0.78, 0.52, 0]} rotation={[0, 0, -0.12]} castShadow>
            <capsuleGeometry args={[0.18, 1.2, 8, 14]} />
            <meshStandardMaterial color="#252b30" roughness={0.72} />
          </mesh>
          <mesh position={[0.78, 0.52, 0]} rotation={[0, 0, 0.12]} castShadow>
            <capsuleGeometry args={[0.18, 1.2, 8, 14]} />
            <meshStandardMaterial color="#252b30" roughness={0.72} />
          </mesh>
          <mesh position={[-0.34, -1.12, 0]} rotation={[0, 0, 0.03]} castShadow>
            <capsuleGeometry args={[0.21, 1.4, 8, 14]} />
            <meshStandardMaterial color="#121518" roughness={0.8} />
          </mesh>
          <mesh position={[0.34, -1.12, 0]} rotation={[0, 0, -0.03]} castShadow>
            <capsuleGeometry args={[0.21, 1.4, 8, 14]} />
            <meshStandardMaterial color="#121518" roughness={0.8} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 5, 4]} intensity={2.4} color="#fff3e7" castShadow />
      <pointLight position={[-3, 1, 2]} intensity={12} distance={7} color="#ff5a36" />
      <Mannequin />
      <ContactShadows position={[0, -2.05, 0]} opacity={0.5} scale={6} blur={2.8} far={4} color="#000000" />
    </>
  );
}

export function HeroScene() {
  const container = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [canRenderWebgl, setCanRenderWebgl] = useState(false);

  useEffect(() => {
    if (!container.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "160px" },
    );

    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const testCanvas = document.createElement("canvas");
        const context =
          testCanvas.getContext("webgl2") ?? testCanvas.getContext("webgl");
        setCanRenderWebgl(Boolean(context));
      } catch {
        setCanRenderWebgl(false);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="hero-scene" ref={container} aria-hidden="true">
      {canRenderWebgl ? (
        <Canvas
          dpr={[1, 1.5]}
          frameloop={isVisible ? "always" : "never"}
          camera={{ position: [0, 0.15, 5.5], fov: 42 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          shadows
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}
