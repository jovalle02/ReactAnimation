"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import CircleLoad from "../icons/CircleLoadSVG";
import Orbits from "../icons/Orbits";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, MotionPathPlugin);

export default function CICDPipelineSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const orbitIcons = [
      { id: "#github",  path: "#firstOrbit", start: 0    },
      { id: "#jenkins", path: "#sndOrbit",   start: 0.3  },
      { id: "#teams",   path: "#trdOrbit",   start: 0.6  },
      { id: "#slack",   path: "#outerOrbit", start: 0.2  },
      { id: "#xray",    path: "#outerOrbit", start: 0.8  },
    ];

    const ctx = gsap.context(() => {
      // 1) Set up initial icon positions (locked at their 'start' angle)
      orbitIcons.forEach(({ id, path, start }) => {
        gsap.set(id, {
          opacity: 0,
          scale: 2,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start,
            end: start,       // lock at that exact point
          },
        });
      });

      // 2) Build a scroll-scrubbed timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start:  "top top",
          end:    () => `+=${sectionRef.current.offsetHeight * 2}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // 3) Animate center circle
      tl.fromTo(
        "#circle-center",
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      // 4) Draw each orbit ring
      const orbitDuration = 1.2;
      tl.fromTo(
        "#firstOrbit",
        { drawSVG: "0% 0%", opacity: 0.3 },
        { drawSVG: "0% 100%", opacity: 1, duration: orbitDuration, ease: "power2.out" },
        "-=0.4"
      )
        .fromTo(
          "#sndOrbit",
          { drawSVG: "0% 0%", opacity: 0.3 },
          { drawSVG: "0% 100%", opacity: 1, duration: orbitDuration, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          "#trdOrbit",
          { drawSVG: "0% 0%", opacity: 0.3 },
          { drawSVG: "0% 100%", opacity: 1, duration: orbitDuration, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          "#outerOrbit",
          { drawSVG: "0% 0%", opacity: 0.3 },
          { drawSVG: "0% 100%", opacity: 1, duration: orbitDuration, ease: "power2.out" },
          "-=1"
        );

      // 5) As soon as the rings start appearing, bring in each icon
      tl.addLabel("iconsStart", `-=${orbitDuration * 0.8}`);
      orbitIcons.forEach(({ id, path, start }) => {
        tl.to(
          id,
          {
            opacity: 1,
            scale:   3.5,
            motionPath: {
              path,
              align:       path,
              alignOrigin: [0.5, 0.5],
              autoRotate:  false,
              start,               // same entry point
              end:   start + 0.3,    // one full lap
            },
            duration: 1,
          },
          "iconsStart"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#4528ff] text-white flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-24"
    >
      <div className="w-full md:w-1/2 mb-16 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Slides into your <span className="text-orange-400">CI/CD pipeline</span> like a pro
        </h2>
        <p className="mt-6 text-lg text-white/90 max-w-xl">
          TestResults plays nice with your tool stack – no extra fees, no fuss.
          Jira, XRay, Jenkins, Azure DevOps, GitLab CI/CD? Check, check, and
          check. Plus, we’re BFFs with over 3,000 other tools via REST & Zapier.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative aspect-square w-full">
          <Orbits className="absolute inset-0 w-[110%] h-[110%] top-[-5%] left-[-5%]" />
          <CircleLoad id="circle-center" className="absolute inset-0 w-[20%] h-[20%] top-[40%] left-[40%]" />

          <div id="github"  className="absolute w-6 h-6"><img src="/icons/github.png"  alt="GitHub"  /></div>
          <div id="jenkins" className="absolute w-6 h-6"><img src="/icons/jenkins.png" alt="Jenkins" /></div>
          <div id="teams"   className="absolute w-6 h-6"><img src="/icons/teams.png"   alt="Teams"   /></div>
          <div id="slack"   className="absolute w-6 h-6"><img src="/icons/slack.png"   alt="Slack"   /></div>
          <div id="xray"    className="absolute w-10 h-10"><img src="/icons/xray.png"    alt="XRay"    /></div>
        </div>
      </div>
    </section>
  );
}
