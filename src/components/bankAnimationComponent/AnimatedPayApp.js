"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import PayApp from "../icons/PayApp"; // Ajusta el path si es necesario
import MobilePaymentLttr from "../icons/MobilePaymentLttr";

export default function AnimatedPayApp() {
  const payAppRef = useRef(null);

  useEffect(() => {
    const root = payAppRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#PayApp__cc3"), {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#PayApp__cc2"),
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#PayApp__cc1"),
        {
          opacity: 0,
          y: 5,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#PayApp__creditcard"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "sine.out",
        },
        "-=0.4"
      )
      .from(
        root.querySelector("#PayApp__inputmoney"),
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#PayApp__paybtn"),
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "center center",
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .from(
        root.querySelector("#mobileLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#PayApp__creditcard", {
          y: "-=1",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#PayApp__paybtn", {
          y: "-=3",
          duration: 1.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#PayApp__inputmoney", {
          y: "-=2",
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#PayApp__cc3", {
          y: "-=2",
          duration: 1.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#PayApp__cc2", {
          y: "-=2",
          duration: 1.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#PayApp__cc1", {
          y: "-=2",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const dash = root.querySelector("#PayApp__PayApp");
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
    <div ref={payAppRef} className="flex flex-col items-center">
      <PayApp className="z-[1]"/>
        <div className="absolute w-[70%] h-[70%] top-[35%] left-[50%] aspect-square origin-center">
          <MobilePaymentLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
