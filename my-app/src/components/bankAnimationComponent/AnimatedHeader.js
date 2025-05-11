"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedCreditCard from "./AnimatedCreditCard";
import AnimatedCloudBanks from "./AnimatedCloudBanks";
import AnimatedAnalytic from "./AnimatedAnalytic";
import AnimatedPayApp from "./AnimatedPayApp";
import AnimatedFundManagement from "./AnimatedFundManagement";
import AnimatedSMS from "./AnimatedSMS";
import AnimatedMac from "./AnimatedMac";
import AnimatedLockCard from "./AnimatedLockCard";
import AnimatedExchange from "./AnimatedExchange";
import AnimatedDigitalWallet from "./AnimatedDigitalWallet";
import AnimatedPathsSVG from "./AnimatedPaths";
import AnimatedCentraLetters from "./AnimatedCentraLetters";
import AnimatedCircleGrid from "./AnimatedCircleGrid";

function PositionedIcon({ innerRef, top, left, scale, children }) {
  return (
    <div
      ref={innerRef}
      className="absolute w-[25%] h-[25%] flex flex-col items-center z-2"
      style={{ top, left }}
    >
      <div
        className="w-[100%] h-[100%] top-0 left-0 origin-center"
      >
        {children}
      </div>
    </div>
  );
}

export default function AnimatedHeader() {
  const refs = {
    analytic: useRef(null),
    credit: useRef(null),
    mobile: useRef(null),
    lock: useRef(null),
    mac: useRef(null),
    fund: useRef(null),
    sms: useRef(null),
    cloud: useRef(null),
    exchange: useRef(null),
    wallet: useRef(null),
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(refs.analytic.current, { opacity: 0, y: -30, duration: 0.6 })
      .from(refs.credit.current, { opacity: 0, scale: 0.5, duration: 0.5 }, 0)
      .from(refs.mobile.current, { opacity: 0, x: 50, duration: 0.5 }, 0)
      .from(refs.lock.current, { opacity: 0, y: 30, duration: 0.5 }, 0)
      .from(refs.mac.current, { opacity: 0, y: -30, duration: 0.5 }, 0)
      .from(refs.fund.current, { opacity: 0, scale: 0.5, duration: 0.5 }, 0)
      .from(refs.sms.current, { opacity: 0, x: -30, duration: 0.5 }, 0)
      .from(refs.cloud.current, { opacity: 0, y: 40, duration: 0.5 }, 0)
      .from(refs.exchange.current, { opacity: 0, scale: 0, duration: 0.6 }, 0)
      .from(refs.wallet.current, { opacity: 0, scale: 0.8, duration: 0.6 }, 0);
  }, []);

  return (
    <div className="relative w-full h-full">

      <PositionedIcon innerRef={refs.analytic} top="35%" left="5%" >
        <AnimatedAnalytic />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.credit} top="-6%" left="-5%" >
        <AnimatedCreditCard />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.mobile} top="-3%" left="23%" >
        <AnimatedPayApp />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.lock} top="17%" left="-5%" >
        <AnimatedLockCard />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.mac} top="-5%" left="50%" >
        <AnimatedMac />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.fund} top="55%" left="25%" >
        <AnimatedFundManagement />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.sms} top="55%" left="53%" >
        <AnimatedSMS />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.cloud} top="35%" left="48%" >
        <AnimatedCloudBanks />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.exchange} top="17%" left="50%" >
        <AnimatedExchange />
      </PositionedIcon>

      <PositionedIcon innerRef={refs.wallet} top="55%" left="-5%" >
        <AnimatedDigitalWallet />
      </PositionedIcon>

      <div className="absolute top-[-36%] left-[-39%] inset-0 z-0 flex items-center justify-center">
        <div className="w-[70%] h-[70%] aspect-square top-0 left-0 origin-center">
          <AnimatedPathsSVG />
        </div>
      </div>


      <div className="absolute w-[55%] h-[55%] top-[9%] left-[6.5%] flex flex-col items-center z-[1]">
        <div className="w-[100%] h-[100%] aspect-square origin-center top-0 left-0 origin-center">
          <AnimatedCentraLetters />
        </div>
      </div>

      <div className="absolute w-[140%] h-[140%]  top-[-28%] left-[-32%] flex items-center justify-center z-[0]">
        <div className="w-[100%] h-[100%] aspect-square top-0 left-0 origin-center">
          <AnimatedCircleGrid className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
