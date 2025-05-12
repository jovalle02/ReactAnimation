"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import DigitalWallet from "../icons/DigitalWallet"; // Adjust path if needed
import DigitalWalletLttr from "../icons/DigitalWalletLttr";

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

    tl.from(
        root.querySelector("#digitalLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
    );

    tl.add(() => {
      gsap.to("#DigitalWallet__btnpaydigital", {
        y: "-=3",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#DigitalWallet__mainscreenwallet", {
        y: "-=3",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#DigitalWallet__middlescreen", {
        y: "-=3",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#DigitalWallet__keyboard", {
        y: "-=3",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to("#DigitalWallet__screenlaptop", {
        y: "-=3",
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

  }, []);

  return (
    <div ref={walletRef} className="flex flex-col items-center overflow-visible">
      <DigitalWallet className="z-[1]"/>
        <div className="absolute w-[70%] h-[70%] top-[45%] left-[40%] aspect-square origin-center">
          <DigitalWalletLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
