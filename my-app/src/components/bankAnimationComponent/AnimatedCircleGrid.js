"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CircleGridSVG from "../icons/CircleGrid";

export default function AnimatedIsoGrid() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const grid = root.querySelector("#iso_grid");
    if (!grid || typeof grid.getTotalLength !== "function") return;

    const length = grid.getTotalLength();

    grid.style.strokeDasharray = length;
    grid.style.strokeDashoffset = length;

    gsap.fromTo(
      grid,
      {
        strokeDashoffset: length,
        opacity: 1,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
        delay: 1,
      }
    );
  }, []);


  

  return (
    <div ref={ref}>
      <CircleGridSVG />
    </div>
  );
}
