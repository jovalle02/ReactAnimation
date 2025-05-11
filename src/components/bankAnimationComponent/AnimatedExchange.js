"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Exchange from "../icons/Exchange"; // Adjust path as needed

export default function AnimatedExchange() {
  const exchangeRef = useRef(null);

  useEffect(() => {
    const root = exchangeRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    // Coins drop in
    tl.from(root.querySelector("#Exchange__coins"), {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Arrow slides in
    tl.from(
      root.querySelector("#Exchange__arrow"),
      {
        y: -10,
        opacity: 0,
        duration: 0.2,
        ease: "sine.out",
      },
      "-=0.2"
    );

    // Card rises in
    tl.from(
      root.querySelector("#Exchange__ccbigcard"),
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.1"
    );

    tl.add(() => {
      gsap.to("#Exchange__arrow", {
        y: "-=2",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    tl.add(() => {
      gsap.to("#Exchange__ccbigcard", {
        y: "-=1.5",
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    tl.add(() => {
      gsap.to("#Exchange__coins", {
        y: "-=2",
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    const dash = root.querySelector("#Exchange__Exchange");
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
    <div ref={exchangeRef} className="flex flex-col items-center overflow-visible">
      <Exchange />
    </div>
  );
}
