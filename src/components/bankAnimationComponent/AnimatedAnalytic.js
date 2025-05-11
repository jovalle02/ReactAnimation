"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Analytic from "../icons/Analytic"; // Ajusta la ruta si es necesario
import AnalyticLttr from "../icons/AnalyticsLttr";

export default function AnimatedAnalytic() {
  const analyticRef = useRef(null);

  useEffect(() => {
    const root = analyticRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#Analytic__phoneanalytic"), {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#Analytic__dashanalytic"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power1.out",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#Analytic__backcurve"),
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "sine.out",
        },
        "-=0.2"
      )
      .from(
        root.querySelector("#Analytic__thrdcurve"),
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "sine.out",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#Analytic__sndcurve"),
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "sine.out",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#Analytic__frontcurve"),
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "sine.out",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#Analytic__axis"),
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#Analytic__piechart"),
        {
          opacity: 0,
          scale: 0,
          transformOrigin: "center center",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#analyticsLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {

        gsap.to("#Analytic__piechart", {
          y: "-=1",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#Analytic__dashanalytic", {
          y: "-=1",
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });


        gsap.to("#Analytic__backcurve", {
          y: "-=1",
          duration: 1.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#Analytic__thrdcurve", {
          y: "-=1",
          duration: 1.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#Analytic__sndcurve", {
          y: "-=1",
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#Analytic_frontcurve", {
          y: "-=1",
          duration: 1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });


      });

      const dash = root.querySelector("#Analytic__Analytic");
      dash.addEventListener("mouseenter", () => {
        gsap.to(dash, {
          filter: "drop-shadow(0 0 2px #ffffff)",
          duration: 0.3,
        });
      });
      dash.addEventListener("mouseleave", () => {
        gsap.to(dash, {
          filter: "none",
          duration: 0.3,
        });
      });
  }, []);

  return (
    <div ref={analyticRef} className="flex flex-col items-center">
      <Analytic className="z-[1]"/>
        <div className=" absolute w-[50%] h-[50%] top-[48%] left-[60%] aspect-square  origin-center">
          <AnalyticLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
