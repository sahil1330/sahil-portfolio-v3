"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MotionController() {
  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".site-header > *", {
          y: -18,
          autoAlpha: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
        });

        gsap.from("[data-hero-line]", {
          yPercent: 110,
          rotate: 1.5,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
        });

        gsap.from("[data-hero-support]", {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          delay: 0.35,
          stagger: 0.08,
          ease: "power3.out",
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 42,
            autoAlpha: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".project-placeholder").forEach((visual) => {
          gsap.fromTo(
            visual,
            { clipPath: "inset(12% 0 12% 0)" },
            {
              clipPath: "inset(0% 0 0% 0)",
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top 92%",
                end: "top 48%",
                scrub: 0.6,
              },
            },
          );
        });
      });

      media.add(
        "(min-width: 781px) and (prefers-reduced-motion: no-preference)",
        () => {
          const phaseLabels = gsap.utils.toArray<HTMLElement>("[data-hero-phase]");
          const heroCopy = document.querySelector<HTMLElement>(".hero__copy");
          const avatarPoses = gsap.utils.toArray<HTMLElement>("[data-avatar-pose]");
          const narrativeLayers = gsap.utils.toArray<HTMLElement>("[data-narrative-layer]");
          const productElements = gsap.utils.toArray<HTMLElement>("[data-product-element]");
          const infrastructureElements = gsap.utils.toArray<HTMLElement>("[data-infrastructure-element]");
          const narrativeProgress = document.querySelector<HTMLElement>("[data-narrative-progress]");

          if (
            !heroCopy ||
            phaseLabels.length !== 2 ||
            avatarPoses.length !== 3 ||
            narrativeLayers.length !== 2
          ) return;

          gsap.set(phaseLabels, { autoAlpha: 0, y: 28 });
          gsap.set(avatarPoses.slice(1), { autoAlpha: 0 });
          gsap.set(narrativeLayers, { autoAlpha: 0 });

          const ramp = (progress: number, start: number, end: number) =>
            gsap.utils.clamp(0, 1, (progress - start) / (end - start));
          const chapterOpacity = (
            progress: number,
            enterStart: number,
            enterEnd: number,
            exitStart: number,
            exitEnd: number,
          ) =>
            Math.min(
              ramp(progress, enterStart, enterEnd),
              1 - ramp(progress, exitStart, exitEnd),
            );

          ScrollTrigger.create({
            trigger: ".hero-chapter",
            start: "top top",
            end: "bottom bottom",
            onUpdate: ({ progress }) => {
              const systemsOpacity = chapterOpacity(progress, 0.22, 0.3, 0.54, 0.62);
              const deliveryOpacity = ramp(progress, 0.55, 0.66);
              const introOpacity = 1 - ramp(progress, 0.2, 0.3);

              gsap.set(heroCopy, {
                autoAlpha: introOpacity,
                y: -36 * (1 - introOpacity),
              });
              gsap.set(phaseLabels[0], {
                autoAlpha: systemsOpacity,
                y: 28 * (1 - systemsOpacity),
              });
              gsap.set(phaseLabels[1], {
                autoAlpha: deliveryOpacity,
                y: 28 * (1 - deliveryOpacity),
              });

              gsap.set(avatarPoses[0], {
                autoAlpha: introOpacity,
                scale: 1 - 0.025 * (1 - introOpacity),
                xPercent: -4 * (1 - introOpacity),
              });
              gsap.set(avatarPoses[1], {
                autoAlpha: systemsOpacity,
                scale: 0.97 + 0.03 * systemsOpacity,
                xPercent: -5 + 5 * systemsOpacity,
              });
              gsap.set(avatarPoses[2], {
                autoAlpha: deliveryOpacity,
                scale: 0.97 + 0.03 * deliveryOpacity,
                xPercent: 5 - 5 * deliveryOpacity,
              });
              gsap.set(narrativeLayers[0], { autoAlpha: systemsOpacity });
              gsap.set(narrativeLayers[1], { autoAlpha: deliveryOpacity });

              productElements.forEach((element, index) => {
                gsap.set(element, {
                  autoAlpha: systemsOpacity,
                  y: (18 + index * 5) * (1 - systemsOpacity),
                });
              });
              infrastructureElements.forEach((element, index) => {
                gsap.set(element, {
                  autoAlpha: deliveryOpacity,
                  x: (-14 - index * 4) * (1 - deliveryOpacity),
                });
              });

              if (narrativeProgress) {
                narrativeProgress.style.setProperty("--narrative-progress", `${progress}`);
              }
            },
          });
        },
      );

      ScrollTrigger.refresh();
    }, document.body);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return null;
}
