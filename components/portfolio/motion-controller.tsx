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

          gsap.set(phaseLabels, { autoAlpha: 0, yPercent: -50, y: 28 });
          gsap.set(avatarPoses[0], { autoAlpha: 1, scale: 1, xPercent: 0 });
          gsap.set(avatarPoses[1], { autoAlpha: 0, scale: 0.97, xPercent: -5 });
          gsap.set(avatarPoses[2], { autoAlpha: 0, scale: 0.97, xPercent: 5 });
          gsap.set(narrativeLayers, { autoAlpha: 0 });
          gsap.set(productElements, { autoAlpha: 0, y: 18 });
          gsap.set(infrastructureElements, { autoAlpha: 0, x: -18 });
          if (narrativeProgress) {
            gsap.set(narrativeProgress, { "--narrative-progress": 0 });
          }

          const heroTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".hero-chapter",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });

          if (narrativeProgress) {
            heroTimeline.to(
              narrativeProgress,
              { "--narrative-progress": 1, duration: 1 },
              0,
            );
          } else {
            heroTimeline.to({}, { duration: 1 }, 0);
          }

          heroTimeline
            .to(heroCopy, { autoAlpha: 0, y: -36, duration: 0.1 }, 0.2)
            .to(
              avatarPoses[0],
              { autoAlpha: 0, scale: 0.975, xPercent: -4, duration: 0.1 },
              0.2,
            )
            .to(
              phaseLabels[0],
              { autoAlpha: 1, yPercent: -50, y: 0, duration: 0.08 },
              0.22,
            )
            .to(
              avatarPoses[1],
              { autoAlpha: 1, scale: 1, xPercent: 0, duration: 0.08 },
              0.22,
            )
            .to(narrativeLayers[0], { autoAlpha: 1, duration: 0.08 }, 0.22)
            .to(
              productElements,
              { autoAlpha: 1, y: 0, duration: 0.07, stagger: 0.012 },
              0.23,
            )
            .to(
              productElements,
              { autoAlpha: 0, y: -10, duration: 0.06, stagger: 0.008 },
              0.53,
            )
            .to(phaseLabels[0], { autoAlpha: 0, y: -20, duration: 0.08 }, 0.54)
            .to(avatarPoses[1], { autoAlpha: 0, scale: 0.98, duration: 0.08 }, 0.54)
            .to(narrativeLayers[0], { autoAlpha: 0, duration: 0.08 }, 0.54)
            .to(
              phaseLabels[1],
              { autoAlpha: 1, yPercent: -50, y: 0, duration: 0.11 },
              0.55,
            )
            .to(
              avatarPoses[2],
              { autoAlpha: 1, scale: 1, xPercent: 0, duration: 0.11 },
              0.55,
            )
            .to(narrativeLayers[1], { autoAlpha: 1, duration: 0.11 }, 0.55)
            .to(
              infrastructureElements,
              { autoAlpha: 1, x: 0, duration: 0.09, stagger: 0.012 },
              0.56,
            );
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
