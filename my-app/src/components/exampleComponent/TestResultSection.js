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
          <span className="text-orange-300">test <strong>for humans</strong></span>
        </h1>

        <p className="text-lg text-gray-300 fade-in">
          Humans get tired and bored. They overlook critical details and lack consistency in testing,
          making results difficult to compare. Your users expect flawless experience across the entire user flows.
        </p>

        <p className="text-gray-400 fade-in">
          From the user interface to back-office systems, batch processing, peripheral systems, and
          two-factor authentication—even when time for testing was limited.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-8">
        {/* Text Block */}
        <div className="fade-in flex flex-col gap-10 mt-[15%] ">
          <p className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">✔</span>
            <span>
              TestResults tests every test case, no shortcuts. Get the desired testing coverage every single time, regardless of time constraints.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">✔</span>
            <span>
              Scale your testing efficiency. Through simultaneous test case executions, you run all tests concurrently and obtain results much faster.
            </span>
          </p>
          <p className="flex items-start gap-3">
            <span className="text-orange-400 mt-1">✔</span>
            <span>
              Beyond hard-coded waits and element identifiers. TestResults leverages behavioral psychology to capture the entire customer flow, just like a human would.
            </span>
          </p>
        </div>

        {/* Animated Illustration */}
        <div className="flex justify-center items-center w-full h-full mt-5">
          <div className="w-full max-w-[700px] aspect-square ml-[20%]">
            <AnimatedHeader />
          </div>
        </div>
      </div>
    </section>
  );
}
