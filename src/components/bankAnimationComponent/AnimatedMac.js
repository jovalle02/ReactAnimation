"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Mac from "../icons/Mac";
import AccountProtectionLttr from "../icons/AccountProtectionLttr";

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
      .from(
        root.querySelector("#accountLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
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

  }, []);

  return (
    <div ref={macRef} className="flex flex-col items-center">
      <Mac className="z-[1]"/>
        <div className="absolute w-[83%] h-[83%] top-[17%] left-[50%] aspect-square origin-center">
          <AccountProtectionLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
