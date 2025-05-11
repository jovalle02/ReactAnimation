"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CloudBanks from "../icons/CloudBanks"; // Adjust path if needed

export default function AnimatedCloudBanks() {
  const cloudRef = useRef(null);

  useEffect(() => {
    const root = cloudRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#CloudBanks__cloud"), {
      opacity: 0,
      y: -10,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#CloudBanks__banksign"),
        {
          opacity: 0,
          x: -5,
          duration: 0.9,
          ease: "back.out(1.7)",
        },
        "+=0.1"
      ).add(() => {
        gsap.to("#CloudBanks__cloud", {
          y: "-=1",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const dash = root.querySelector("#CloudBanks__CloudBanks");
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
    <div ref={cloudRef} className="flex flex-col items-center">
      <CloudBanks />
    </div>
  );
}
