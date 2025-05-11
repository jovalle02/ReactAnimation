"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FundManagement from "../icons/FundManagement"; // Adjust path if needed
import FundManagementLttr from "../icons/FundManagementLttr";

export default function AnimatedFundManagement() {
  const fundRef = useRef(null);

  useEffect(() => {
    const root = fundRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#FundManagement__thirdmanagementcard"), {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#FundManagement__secondmanagementcard"),
        {
          opacity: 0,
          x: -10,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#FundManagement__managementcard"),
        {
          opacity: 0,
          x: -5,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#fundLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#FundManagement__managementcard", {
          y: "-=2",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#FundManagement__secondmanagementcard", {
          y: "-=2",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#FundManagement__thirdmanagementcard", {
          y: "-=2",
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

      });

    const dash = root.querySelector("#FundManagement__FundManagement");
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
    <div ref={fundRef} className="flex flex-col items-center">
      <FundManagement className="z-[1]"/>
        <div className="absolute w-[84%] h-[84%] top-[27%] left-[20%] aspect-square origin-center">
          <FundManagementLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
