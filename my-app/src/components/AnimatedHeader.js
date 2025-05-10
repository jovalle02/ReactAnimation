"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Analytic, CloudBanks, CreditCardss, DigitalWallet,
  Exchange, FundManagement, LockCard, Mac, PayApp, Sms
} from "./icons";
import AnimatedCreditCard from "./AnimatedCreditCard";
import AnimatedCloudBanks from "./AnimatedCloudBanks";
import AnimatedAnalytic from "./AnimatedAnalytic";
import AnimatedPayApp from "./AnimatedPayApp";

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
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(refs.analytic.current, { opacity: 0, y: -30, duration: 0.6 })
      .from(refs.credit.current, { opacity: 0, scale: 0.5, duration: 0.5 }, "+=0.1")
      .from(refs.mobile.current, { opacity: 0, x: 50, duration: 0.5 }, "+=0.2")
      .from(refs.lock.current, { opacity: 0, y: 30, duration: 0.5 }, "+=0.15")
      .from(refs.mac.current, { opacity: 0, y: -30, duration: 0.5 }, "+=0.1")
      .from(refs.fund.current, { opacity: 0, scale: 0.5, duration: 0.5 }, "+=0.1")
      .from(refs.sms.current, { opacity: 0, x: -30, duration: 0.5 }, "+=0.2")
      .from(refs.cloud.current, { opacity: 0, y: 40, duration: 0.5 }, "+=0.2")
      .from(refs.exchange.current, { opacity: 0, scale: 0, duration: 0.6 }, "+=0.15");
  }, []);

  return (
    <div className="relative w-[700px] h-[700px] mx-auto mt-12 text-white">
      <div ref={refs.analytic} className="absolute top-[5%] left-[10%] flex flex-col items-center">
        <AnimatedAnalytic />
        <span className="text-xs mt-1">ANALYTICS</span>
      </div>
      <div ref={refs.credit} className="absolute top-[5%] left-[40%]">
        <AnimatedCreditCard />
      </div>
      <div ref={refs.mobile} className="absolute top-[5%] right-[10%] flex flex-col items-center">
        <AnimatedPayApp />
        <span className="text-xs mt-1">MOBILE PAYMENT</span>
      </div>
      <div ref={refs.lock} className="absolute top-[35%] left-[5%] flex flex-col items-center">
        <LockCard />
        <span className="text-xs mt-1 text-center">PAYMENT SECURITY</span>
      </div>
      <div ref={refs.mac} className="absolute top-[35%] right-[5%] flex flex-col items-center">
        <Mac />
        <span className="text-xs mt-1 text-center">ACCOUNT PROTECTION</span>
      </div>
      <div ref={refs.fund} className="absolute bottom-[10%] left-[10%] flex flex-col items-center">
        <FundManagement />
        <span className="text-xs mt-1 text-center">FUND MANAGEMENT</span>
      </div>
      <div ref={refs.sms} className="absolute bottom-[10%] left-[40%] flex flex-col items-center">
        <Sms />
        <span className="text-xs mt-1 text-center">SMS NOTIFICATION</span>
      </div>
      <div ref={refs.cloud} className="absolute bottom-[10%] right-[10%] flex flex-col items-center">
        <AnimatedCloudBanks />
        <span className="text-xs mt-1 text-center">FINANCIAL CLOUD</span>
      </div>
      <div ref={refs.exchange} className="absolute bottom-[30%] right-[10%] flex flex-col items-center">
        <Exchange />
        <span className="text-xs mt-1 text-center">CURRENCY TRANSFER</span>
      </div>

      {/* Center title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-lg leading-tight">
        ONLINE<br />BANKING
      </div>
    </div>
  );
}
