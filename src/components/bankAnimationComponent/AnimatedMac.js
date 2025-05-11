"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Mac from "../icons/Mac";

export default function AnimatedMac() {
  const macRef = useRef(null);

  useEffect(() => {
    const root = macRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#Mac__computer"), {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power3.out",
    })
      .from(
        root.querySelector("#Mac__onlinebankingscreen"),
        {
          opacity: 0,
          scaleY: 0.6,
          transformOrigin: "top center",
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#Mac__keyboard"),
        {
          opacity: 0,
          scaleY: 0.6,
          transformOrigin: "top center",
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      )
      .add(() => {
        gsap.to("#Mac__computer", {
          y: "-=4",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#Mac__keyboard", {
          y: "-=2",
          duration: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const dash = root.querySelector("#Mac__Mac");
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
    <div ref={macRef} className="flex flex-col items-center">
      <Mac />
    </div>
  );
}
