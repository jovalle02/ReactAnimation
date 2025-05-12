"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CentralLettersSVG from "../icons/CentralLetters";

export default function AnimatedCentralLetters() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const online = root.querySelector("#OnlineLttrs");
    const banking = root.querySelector("#BankingLttrs");
    if (!online || !banking) return;

    gsap.fromTo(
      online,
      {
        opacity: 0,
        y: 5,
        transformOrigin: "bottom center",
      },
      {
        y:0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 1.2,
      }
    );

    gsap.fromTo(
      banking,
      {
        opacity: 0,
        y: 5,
        transformOrigin: "bottom center",
      },
      {
        y:0,
        opacity: 1,
        duration: 1.6,
        ease: "power4.out",
        delay: 1.3,
      }
    );

  }, []);

  return (
    <div ref={ref}>
      <CentralLettersSVG />
    </div>
  );
}
