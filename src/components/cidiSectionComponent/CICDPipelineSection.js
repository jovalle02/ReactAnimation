"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import CircleLoad from "../icons/CircleLoadSVG";
import Orbits      from "../icons/Orbits";

gsap.registerPlugin(
  DrawSVGPlugin,
  ScrollTrigger,
  MotionPathPlugin
);

export default function CICDPipelineSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const orbitIcons = [
      { id: "#github",  path: "#firstOrbit", start: 0   },
      { id: "#jenkins", path: "#sndOrbit",   start: 0.3 },
      { id: "#teams",   path: "#trdOrbit",   start: 0.6 },
      { id: "#slack",   path: "#outerOrbit", start: 0.2 },
      { id: "#xray",    path: "#outerOrbit", start: 0.8 },
    ];

    const ctx = gsap.context(() => {
      // initial setup for icons
      orbitIcons.forEach(({ id, path, start }) => {
        gsap.set(id, {
          opacity: 0,
          scale:   2,
          motionPath: { path, align: path, alignOrigin: [0.5,0.5], autoRotate: false, start, end: start }
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   "top top",
          end:     () => `+=${sectionRef.current.offsetHeight * 2}`,
          scrub:   true,
          pin:     true,
          pinSpacing: true,
        }
      });

      // 1) Fade in center circle
      tl.fromTo(
        "#circle-center",
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
        0
      );

      // 2) Mark the moment orbits start
      const od = 1.2;
      tl.addLabel("orbitsStart", ">");

      // 3) Draw all orbits (slightly staggered)
      tl.fromTo("#firstOrbit",
        { drawSVG: "0% 0%", opacity: 0.3 },
        { drawSVG: "0% 100%", opacity: 1, duration: od, ease: "power2.out" },
        "orbitsStart"
      )
      .fromTo("#sndOrbit",
        { drawSVG: "0% 0%", opacity: 0.3 },
        { drawSVG: "0% 100%", opacity: 1, duration: od, ease: "power2.out" },
        "orbitsStart+=0.2"
      )
      .fromTo("#trdOrbit",
        { drawSVG: "0% 0%", opacity: 0.3 },
        { drawSVG: "0% 100%", opacity: 1, duration: od, ease: "power2.out" },
        "orbitsStart+=0.4"
      )
      .fromTo("#outerOrbit",
        { drawSVG: "0% 0%", opacity: 0.3 },
        { drawSVG: "0% 100%", opacity: 1, duration: od, ease: "power2.out" },
        "orbitsStart+=0.6"
      );

      // 4) **Smooth in** text right at the same moment
      tl.from("#cicd-title", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out"
      }, "orbitsStart");

      tl.from("#cicd-desc", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out"
      }, "orbitsStart+=0.1");

      // 5) Launch icons around their paths
      tl.addLabel("iconsCruise", `orbitsStart+=${od * 0.8}`);
      orbitIcons.forEach(({ id, path, start }) => {
        tl.to(id, {
          opacity: 1,
          scale:   3.5,
          motionPath: { path, align: path, alignOrigin: [0.5,0.5], autoRotate: false, start, end: start + 0.3 },
          duration: 1,
        }, "iconsCruise");
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#4528ff] text-white overflow-hidden"
    >
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-24">
        <div className="w-full md:w-1/2 mb-16 md:mb-0">
          <h2 id="cicd-title" className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Slides into your{" "}
            <span className="text-orange-400">CI/CD pipeline</span> like a pro
          </h2>
          <p id="cicd-desc" className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-full sm:max-w-xl">
            TestResults plays nice with your tool stack—no extra fees, no fuss.
            Jira, XRay, Jenkins, Azure DevOps, GitLab CI/CD? Check, check, and
            check. Plus, we’re BFFs with over 3,000 other tools via REST & Zapier.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative aspect-square w-full">
            <Orbits className="absolute inset-0 w-[110%] h-[110%] top-[-5%] left-[-5%]" />
            <CircleLoad
              id="circle-center"
              className="absolute inset-0 w-[20%] h-[20%] top-[40%] left-[40%]"
            />
            {/* icon wrappers with responsive sizes */}
            <div id="github"  className="absolute w-[2vw] h-[2vw] sm:w-[1vw] sm:h-[1vw]">
              <img src="/icons/github.png"  alt="GitHub"  className="w-full h-full object-contain" />
            </div>
            <div id="jenkins" className="absolute w-[2vw] h-[2vw] sm:w-[1vw] sm:h-[1vw]">
              <img src="/icons/jenkins.png" alt="Jenkins" className="w-full h-full object-contain" />
            </div>
            <div id="teams"   className="absolute w-[2vw] h-[2vw] sm:w-[1vw] sm:h-[1vw]">
              <img src="/icons/teams.png"   alt="Teams"   className="w-full h-full object-contain" />
            </div>
            <div id="slack"   className="absolute w-[2vw] h-[2vw] sm:w-[1vw] sm:h-[1vw]">
              <img src="/icons/slack.png"   alt="Slack"   className="w-full h-full object-contain" />
            </div>
            <div id="xray"    className="absolute w-[3vw] h-[3vw] sm:w-[2vw] sm:h-[2vw]">
              <img src="/icons/xray.png"    alt="XRay"    className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
