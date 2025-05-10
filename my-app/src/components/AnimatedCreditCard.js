"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CreditCardss } from "./icons"; // Adjust the import path as needed

export default function AnimatedCreditCard() {
  const creditRef = useRef(null);

  useEffect(() => {
    const root = creditRef.current;

    if (!root) return;

    const tl = gsap.timeline().delay(0.9);

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
      );
  }, []);

  return (
    <div ref={creditRef} className="flex flex-col items-center">
      <CreditCardss />
      <span className="text-xs mt-1 text-white">CREDIT</span>
    </div>
  );
}
