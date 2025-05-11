"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import LockCard from "../icons/LockCard";
import PaymentSecurityLttr from "../icons/PaymentSecurityLttr";

export default function AnimatedLockCard() {
  const lockCardRef = useRef(null);

  useEffect(() => {
    const root = lockCardRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#LockCard__debitcard"), {
      opacity: 0,
      x: -25,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
      .from(
        root.querySelector("#LockCard__Group\\ 1"),
        {
          opacity: 0,
          y: -20,
          rotation: -15,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#paymentLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#LockCard__Group\\ 1", {
          y: "-=3",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const dash = root.querySelector("#LockCard__LockCard");
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
    <div ref={lockCardRef} className="flex flex-col items-center overflow-visible">
      <LockCard className="z-[1]"/>
        <div className="absolute w-[80%] h-[80%] top-[32%] left-[0%] aspect-square origin-center">
          <PaymentSecurityLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
