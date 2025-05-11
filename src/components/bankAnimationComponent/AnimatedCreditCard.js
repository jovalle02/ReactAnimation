"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CreditCardss } from "../icons";
import CreditLttr from "../icons/CreditLttr";

export default function AnimatedCreditCard() {
  const creditRef = useRef(null);

  useEffect(() => {
    const root = creditRef.current;

    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#CreditCardss__3card"), {
      opacity: 0,
      x: -30,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#CreditCardss__2card"),
        {
          opacity: 0,
          x: -20,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        root.querySelector("#CreditCardss__1card"),
        {
          opacity: 0,
          x: -10,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.out",
        },
        "+=0.1"
      ).from(
        root.querySelector("#CreditCardss__frontcard"),
        {
          opacity: 0,
          x: -10,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.1"
      )
      .from(
        root.querySelector("#creditLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#CreditCardss__1card", {
          y: "-=5",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#CreditCardss__2card", {
          y: "-=3",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#CreditCardss__3card", {
          y: "-=3",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#CreditCardss__frontcard", {
          y: "-=3",
          duration: 1.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const dash = root.querySelector("#CreditCardss__CreditCardss");
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
    <div ref={creditRef} className="flex flex-col items-center">
      <CreditCardss className="z-[1]"/>
        <div className="absolute w-[35%] h-[33%] top-[80%] left-[3%] aspect-square origin-center">
          <CreditLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
