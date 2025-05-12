"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CloudBanks from "../icons/CloudBanks"; // Adjust path if needed
import FinancialCloudLttr from "../icons/FinancialCloudLttr";

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
      )
      .from(
        root.querySelector("#financialLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#CloudBanks__cloud", {
          y: "-=2",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

  }, []);


  return (
    <div ref={cloudRef} className="flex flex-col items-center">
      <CloudBanks className="z-[1]"/>
        <div className="absolute w-[74%] h-[74%] top-[25%] left-[26%] aspect-square origin-center">
          <FinancialCloudLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
