"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CloudBanks from "./icons/CloudBanks"; // Adjust path if needed

export default function AnimatedCloudBanks() {
  const cloudRef = useRef(null);

  useEffect(() => {
    const root = cloudRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(5); // optional delay before start

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
      );
  }, []);

  return (
    <div ref={cloudRef} className="flex flex-col items-center">
      <CloudBanks />
      <span className="text-xs mt-1 text-white">FINANCIAL CLOUD</span>
    </div>
  );
}
