"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SMS from "../icons/Sms"; 
import SMSNotificationLttr from "../icons/SMSNotificationLttr";

export default function AnimatedSMS() {
  const smsRef = useRef(null);

  useEffect(() => {
    const root = smsRef.current;
    if (!root) return;

    const tl = gsap.timeline().delay(1);

    tl.from(root.querySelector("#SMS__phone"), {
      opacity: 0,
      x: -15,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        root.querySelector("#SMS__securecodescreen"),
        {
          opacity: 0,
          scale: 0.85,
          transformOrigin: "center center",
          duration: 0.5,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#SMS__Vector"),
        {
          opacity: 0,
          x: -10,
          duration: 0.4,
          ease: "sine.out",
        },
        "-=0.3"
      )
      .from(
        root.querySelector("#smsLttr"),
        {
          opacity: 0,
          y: 10,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .add(() => {
        gsap.to("#SMS__phone", {
          y: "-=4",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#SMS__securecodescreen", {
          y: "-=4",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        gsap.to("#SMS__Vector", {
          y: "-=4",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

  }, []);

  return (
    <div ref={smsRef} className="flex flex-col items-center">
      <SMS className="z-[1]"/>
        <div className="absolute w-[83%] h-[83%] top-[25%] left-[20%] aspect-square origin-center">
          <SMSNotificationLttr className="w-[100%] h-[100%]"/>
        </div>
    </div>
  );
}
