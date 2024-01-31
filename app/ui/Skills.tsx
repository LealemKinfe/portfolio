"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  PhotoshopAnimation,
  IllustratorAnimation,
  IndesignAnimation,
  XdAnimation,
  FigmaAnimation,
} from "./Animations";
import styles from "./Skills.module.css";

const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // cleanup
    return () => {
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <section className="p-10 md:p-20">
      <div className="flex flex-col md:flex-row md:items-center gap-16 mx-auto">
        <Image
          src="/assets/about/Skills.png"
          width={140}
          height={210}
          alt="about image"
          className="md:hidden rotate-90 -mt-20 ml-[90px]"
        />

        <Image
          src="/assets/about/Skills.png"
          width={140}
          height={210}
          alt="skills image"
          className="hidden md:block"
        />

        {/* Skill Animations */}
        <div ref={containerRef} className="grow -mt-24 md:mt-0">
          <div className="p-2 flex items-center gap-5">
            <PhotoshopAnimation />
            <div className="border p-1 border-[#2F2F2F] xl:w-3/5 w-4/5">
              <div
                className={
                  isVisible
                    ? `bg-[#2F2F2F] ${styles.ps} w-1/5 duration-1000 ease-in py-[10px]`
                    : "bg-[#2F2F2F] w-1/5 duration-1000 ease-in py-[10px]"
                }
              ></div>
            </div>
          </div>

          <div className="p-2 flex items-center gap-5">
            <IllustratorAnimation />
            <div className="border p-1 border-[#2F2F2F] xl:w-3/5 w-4/5">
              <div
                className={
                  isVisible
                    ? `bg-[#2F2F2F] ${styles.il} w-[30%] duration-1000 ease-in py-[10px]`
                    : "bg-[#2F2F2F] w-[30%] duration-1000 ease-in py-[10px]"
                }
              ></div>
            </div>
          </div>

          <div className="p-2 flex items-center gap-5">
            <IndesignAnimation />
            <div className="border p-1 border-[#2F2F2F] xl:w-3/5 w-4/5">
              <div
                className={
                  isVisible
                    ? `bg-[#2F2F2F] ${styles.id} w-[10%] duration-1000 ease-in py-[10px]`
                    : "bg-[#2F2F2F] w-[10%] duration-1000 ease-in py-[10px]"
                }
              ></div>
            </div>
          </div>

          <div className="p-2 flex items-center gap-5">
            <XdAnimation />
            <div className="border p-1 border-[#2F2F2F] xl:w-3/5 w-4/5">
              <div
                className={
                  isVisible
                    ? `bg-[#2F2F2F] ${styles.xd} w-[28%] duration-1000 ease-in py-[10px]`
                    : "bg-[#2F2F2F] w-[26%] duration-1000 ease-in py-[10px]"
                }
              ></div>
            </div>
          </div>

          <div className="p-2 flex items-center gap-5">
            <FigmaAnimation />
            <div className="border p-1 border-[#2F2F2F] xl:w-3/5 w-4/5">
              <div
                className={
                  isVisible
                    ? `bg-[#2F2F2F] ${styles.figma} w-[15%] duration-1000 ease-in py-[10px]`
                    : "bg-[#2F2F2F] w-[15%] duration-1000 ease-in py-[10px]"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
