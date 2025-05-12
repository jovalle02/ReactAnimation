"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeader from "../bankAnimationComponent/AnimatedHeader";

gsap.registerPlugin(ScrollTrigger);

export default function TestResultsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    el.querySelectorAll(".fade-in-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold fade-in">
          Don’t test like a human
          <br />
          <span>test</span><span className="text-orange-300"> for humans</span>
        </h1>

        <p className="text-lg text-gray-300 fade-in">
          Humans get tired and bored. They overlook critical details and lack consistency in testing,
          making results difficult to compare. Your users expect flawless experience across the entire user flows.
        </p>

        <p className="text-lg text-gray-400 fade-in">
          From the user interface to back-office systems, batch processing, peripheral systems, and
          two-factor authentication—even when time for testing was limited.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-8">
        <div className="flex justify-center items-center w-full h-full mt-5">
          <div className="w-full max-w-[700px] aspect-square ml-[20%] animated-header-trigger">
            <AnimatedHeader />
          </div>
        </div>

        <div className="flex flex-col gap-9 mt-[8%] ">
          <p className="fade-in-item flex items-start gap-3">
            <span className="text-orange-400 mt-1 fade-in">✔</span>
            <span className="text-lg text-gray-400 fade-in">
              TestResults tests every test case, no shortcuts. Get the desired testing coverage every single time, regardless of time constraints.
            </span>
          </p>
          <p className="fade-in-item flex items-start gap-3">
            <span className="text-orange-400 mt-1 fade-in">✔</span>
            <span className="text-lg text-gray-400 fade-in">
              Scale your testing efficiency. Through simultaneous test case executions, you run all tests concurrently and obtain results much faster.
            </span>
          </p>
          <p className="fade-in-item flex items-start gap-3">
            <span className="text-orange-400 mt-1 fade-in">✔</span>
            <span className="text-lg text-gray-400 fade-in">
              Beyond hard-coded waits and element identifiers. TestResults leverages behavioral psychology to capture the entire customer flow, just like a human would.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
