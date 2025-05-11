"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import PathsSVG from "../icons/PathsSVG";

export default function AnimatedPaths() {
  const pathsRef = useRef(null);

  useEffect(() => {
    const root = pathsRef.current;
    if (!root) return;

    const makeTronPath = (selector, delay = 0) => {
      const el = root.querySelector(`#${selector}`);
      if (!el || !el.getTotalLength) return;

      const length = el.getTotalLength();
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;
      el.style.stroke = "#ffffff";
      el.style.strokeWidth = "0.7";
      el.style.filter = "drop-shadow(0 0 10px #ffffff)";
      el.style.transition = "none";

      gsap.fromTo(
        el,
        { strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          delay,
        }
      );
    };

    // Animate paths
    makeTronPath("CentralCircle", 0);
    makeTronPath("pathToCredit1P", 0.2);
    makeTronPath("pathToCredit2P", 0.3);
    makeTronPath("pathToLockP", 0.4);
    makeTronPath("pathCombined2P", 0.5);
    makeTronPath("pathToCloud2P", 0.6);
    makeTronPath("pathToCloud1P", 0.7);
    makeTronPath("pathToCurrency2P", 0.8);
    makeTronPath("pathToCurrency1P", 0.9);
    makeTronPath("pathCombined1P", 1.0);

    // Animate dots after delay
    const dotIds = [
      "pathToCredit2Dot",
      "pathCombined1Dot1",
      "pathCombined1Dot2",
      "pathToCurrency1Dot",
      "pathToCurrency2Dot",
      "pathToCloud1Dot",
      "pathToCloud2Dot",
      "pathCombied2Dot1",
      "pathCombied2Dot2",
      "pathCombied2Dot3",
      "pathCombied2Dot4",
      "pathToLockDot",
      "pathToCredit1Dot",
    ];

    dotIds.forEach((id, index) => {
      const dot = root.querySelector(`#${id}`);
      if (!dot) return;

      dot.style.opacity = "0";
      dot.style.filter = "drop-shadow(0 0 4px #ffffff)";
      dot.style.fill = "#ffffff";

      gsap.to(dot, {
        opacity: 1,
        delay: 1.6 + index * 0.05,
        duration: 0.3,
        onComplete: () => {
          gsap.to(dot, {
            scale: 1.2,
            transformOrigin: "center center",
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut",
          });
        },
      });
    });
  }, []);

  return (
    <div ref={pathsRef} className="flex flex-col items-center">
      <PathsSVG />
    </div>
  );
}
