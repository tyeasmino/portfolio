"use client";

import Image from "next/image";
import { GiClockwork } from "react-icons/gi";
import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RocketIcon } from "lucide-react";

const timeline = [
  {
    year: "July 2017 – Dec 2017",
    title: "Internship at Shohid Sarwarardi Uddan Hospital",
    description:
      "Completed 4.5-month internship in Medical Technology within the Histopathology Department as part of a diploma program.",
    logo: "/experience/Asset-3.png",
  },
  {
    year: "Nov 2017 – Apr 2022",
    title: "Medical Technologist at HistoBioZone",
    description:
      "Worked under Prof. Moinuddin Chisty in Histopathology. Continued working through COVID-19 while maintaining full awareness and safety protocols.",
    logo: "/experience/only-logo-COcGSfTm.png",
  },
  {
    year: "Feb 2022 – Present",
    title: "Medical Technologist (Histopathology Department)",
    description:
      "Ongoing role under same professor. Utilized Power BI for market analysis and account insights in addition to lab diagnostics.",
    logo: "/experience/only-logo-COcGSfTm.png",
  },
  {
    year: "Sep 2024 – Jan 2025",
    title: "Training: Digital Entrepreneurship & Innovation",
    description:
      "Completed 160-hour free training under ICT Division. Learned HTML, CSS, JavaScript, Tailwind CSS, and React basics. Certificate pending.",
    logo: "/experience/riseuplabs.svg",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const [lineHeight, setLineHeight] = useState(0);

  const lineRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (lineRef.current) {
      setLineHeight(lineRef.current.offsetHeight);
    }
  }, []);
  const rocketY = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <section id="experiences"
      ref={sectionRef}
      className="scroll-mt-24 relative bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8 md:my-10"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-black dark:text-white flex items-center justify-center gap-2">
          <GiClockwork className="w-8 h-8 animate-pulse" />
          My Experiences
        </h2>
      </div>

      {/* Line behind the rocket */}
      <div
        ref={lineRef}
        className="absolute left-1/2 transform -translate-x-1/2 top-40 bottom-16 w-[2px] bg-gray-700 z-0"
      />

      {/* 🚀 Rocket Animation */}
      <motion.div
        style={{ translateY: rocketY }}
        className="absolute left-[calc(50%-20px)] z-10 top-40"
      >
        <div className="bg-black border border-gray-500 rounded-full p-2">
          <RocketIcon className="rotate-135 text-white w-7 h-7" />
        </div>
      </motion.div>

      {/* Timeline Items */}
      <div className="relative z-10 space-y-24">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            {/* Timeline Logo Dot */}
            <div className="w-14 h-14 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-md border border-gray-300 dark:border-white absolute left-1/2 transform -translate-x-1/2 -top-7 z-10">
              <Image
                src={item.logo}
                alt="Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>

            {/* Card */}
            <div className="w-full md:w-1/2 px-4 md:px-10 mt-10 md:mt-0">
              <div
                className={`
                          hover-border-card relative rounded-xl shadow-md group
                          bg-white text-black dark:bg-black dark:text-white
                          transition-colors duration-1000
                          hover:bg-black hover:text-white
                          dark:hover:bg-white dark:hover:text-black
                          px-6 pb-6 pt-12 md:p-6 dark:shadow-white
                        `}
              >
                {/* Borders */}
                <span className="border-top"></span>
                <span className="border-right"></span>
                <span className="border-bottom"></span>
                <span className="border-left"></span>

                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{item.year}</p>
                <h3 className="md:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>



          </motion.div>
        ))}
      </div>
    </section>
  );
}
