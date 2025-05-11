"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import DigitalWallet from "../icons/DigitalWallet"; // Adjust path if needed

export default function AnimatedDigitalWallet() {
  const walletRef = useRef(null);

  useEffect(() => {
    const root = walletRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#DigitalWallet__keyboard"), {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    tl.from(
      root.querySelector("#DigitalWallet__screenlaptop"),
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.2"
    );

    tl.from(
      root.querySelector("#DigitalWallet__middlescreen"),
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.from(
      root.querySelector("#DigitalWallet__mainscreenwallet"),
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    tl.from(
      root.querySelector("#DigitalWallet__btnpaydigital"),
      {
        scale: 0.8,
        opacity: 0,
        transformOrigin: "center center",
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

    tl.add(() => {
      gsap.to("#DigitalWallet__btnpaydigital", {
        y: "-=2",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    const dash = root.querySelector("#DigitalWallet__DigitalWallet");
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
    <div ref={walletRef} className="flex flex-col items-center overflow-visible">
      <DigitalWallet />
    </div>
  );
}
