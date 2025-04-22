"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { StaticImageData } from 'next/image';



import skillDesktop from "public/skill/desktop.jpg";
import tailorDesktop from "public/tailor/desktop.jpg";
import lmsDCSA from 'public/lms_dcsa.png';
import webScraping from 'public/webScraping.png';

import ws02 from 'public/webScraping/02.png';
import ws03 from 'public/webScraping/03.jpg';
import ws04 from 'public/webScraping/04.jpg';
import ws05 from 'public/webScraping/05.png';

import lms02 from 'public/lms_dcsa/02.png';
import lms03 from 'public/lms_dcsa/03.png';
import lms04 from 'public/lms_dcsa/04.jpg';
import lms05 from 'public/lms_dcsa/05.png';
import lms06 from 'public/lms_dcsa/06.jpg';
import lms07 from 'public/lms_dcsa/07.jpg';
import lms08 from 'public/lms_dcsa/08.jpg';
import lms09 from 'public/lms_dcsa/09.png';
import lms10 from 'public/lms_dcsa/10.png';

const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile App", "Others"];

const allProjects = [
    {
        title: "SkillCrafted - Freelancer Platform",
        category: "Fullstack",
        github: "https://github.com/tyeasmino/SkillCrafted-Frontend",
        live: "https://skill-crafted-frontend.vercel.app/",
        backend: "https://github.com/tyeasmino/SkillCrafted-Backend",
        images: [skillDesktop],
        description: "A full-stack freelance marketplace with user authentication, project filtering, reviews, and secure payment setup.",
        tech: ["React.js", "Tailwind", "Django Rest Framework"],
    },
    {
        title: "TailorHub - Tailor Management System",
        category: ['Frontend', 'Backend'],
        github: "https://github.com/tyeasmino/TailorHub-Frontend",
        live: "https://tailor-hub-frontend.vercel.app/",
        backend: "https://github.com/tyeasmino/TailorHub-Backend",
        images: [tailorDesktop],
        description: "A POS system with role-based login, inventory, order tracking, payments (Stripe/SSLCommerz), and printable receipts.",
        tech: ["React.js", "Tailwind", "DRF", "SSLCommerz"],
    },
    {
        title: 'E-Learning Management System (DCSA - BOU)',
        github: "https://github.com/tyeasmino/e-learning",
        category: ['Frontend', 'Backend'],
        images: [lmsDCSA, lms02, lms03, lms04, lms05, lms06, lms07, lms08, lms09, lms10],
        description: `Designed for a university course. Managed course contents, students, progress tracking using React.`,
        tech: ["Django", "Bootstrap", "CSV to Data Upload"],
    },
    {
        title: 'WebScrapper (Web Development Project)',
        github: "https://github.com/tyeasmino/JobScraping/",
        category: 'Frontend',
        images: [webScraping, ws02, ws03, ws04, ws05],
        description: `A tool that scrapes and analyzes data from websites for structured insights.`,
        tech: ["Django", "Bootstrap", "Beautiful Soup"],
    },
    {
        title: 'Pocket License (Mobile App)',
        category: 'Mobile App',
        images: [],
        description: `An app that stores and displays driving license info. UI built with mobile-first design principles.`
    },
    {
        title: 'EnDecoder (Encoder & Decoder Tool)',
        category: ['Frontend', 'Backend', 'Fullstack'],
        images: [],
        description: `A simple tool to encode/decode messages. Developed for educational/demo purposes.`,
        tech: ["Django", "Bootstrap", "algorithms implementation"],
    },
    {
        title: 'Patient Report Formatter (Word + Excel + Power BI)',
        category: 'Others',
        images: [],
        description: `Uses HTML/CSS + Django form to input diagnostic data. Auto-generates formatted Word reports and saves data to Excel. Excel connected to Power BI for dashboard analytics.`,
        tech: ["Django", "Bootstrap", "Form to word", "Form to excel", "Excel to PowerBI"],
    },
    {
        title: 'Word to PDF Splitter (EXE Tool)',
        category: 'Others',
        images: [],
        description: `A desktop EXE app that reads a 300-page Word file and splits it into 60+ PDFs based on headings while preserving headers/footers.`,
        tech: ["Python"],
    }
];

const ProjectCarousel = ({ images, title }: { images: StaticImageData[] | string[]; title: string }) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
        created(slider) {
            let timeout: NodeJS.Timeout;
            let mouseOver = false;

            const clearNextTimeout = () => clearTimeout(timeout);
            const nextTimeout = () => {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(() => slider.next(), 3000);
            };

            slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
            });

            nextTimeout();
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        },
    });

    return (
        <div ref={sliderRef} className="keen-slider h-[260px] rounded-lg overflow-hidden">
            {images.map((img, i) => (
                <div className="keen-slider__slide" key={i}>
                    <Image
                        src={img}
                        alt={`${title}-${i}`}
                        className="w-full h-[260px] object-cover"
                        width={500}
                        height={260}
                    />
                </div>
            ))}
        </div>
    );
};

const MyProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? allProjects
            : allProjects.filter((p) =>
                Array.isArray(p.category)
                    ? p.category.includes(selectedCategory)
                    : p.category === selectedCategory
            );

    return (
        <div id="projects" className="scroll-mt-24 p-6 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

            <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedCategory === cat
                            ? "bg-black text-white dark:bg-white dark:text-black"
                            : "bg-transparent text-black dark:text-white border-gray-400"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredProjects?.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                        <Link href={proj.live || "#"} target="_blank">
                            <div className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
                                {proj?.images && proj.images.length > 1 ? (
                                    <ProjectCarousel images={proj?.images} title={proj?.title} />
                                ) : proj?.images?.length === 1 ? (
                                    <Image
                                        src={proj?.images[0]}
                                        alt={proj?.title}
                                        className="w-full h-[260px] object-cover rounded-lg"
                                        width={500}
                                        height={260}
                                    />
                                ) : null}

                                <div className="p-4">
                                    <h3 className="text-lg font-bold group-hover:underline text-black dark:text-white">
                                        {proj.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
                                        {proj.description}
                                    </p>

                                    <div className="flex items-center justify-between"> 

                                        <div className="flex flex-wrap gap-2 text-xs mt-2">
                                            {proj.tech && proj.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 mt-3 text-gray-700 dark:text-gray-300">
                                            {proj.github && (
                                                <Link href={proj.github} target="_blank">
                                                    <BsGithub className="text-xl hover:text-black dark:hover:text-white" />
                                                </Link>
                                            )}
                                            {proj.live && (
                                                <Link href={proj.live} target="_blank">
                                                    <BiLink className="text-xl hover:text-black dark:hover:text-white" />
                                                </Link>
                                            )}
                                            {proj.backend && (
                                                <Link href={proj.backend} target="_blank">
                                                    <BsGithub className="text-xl hover:text-black dark:hover:text-white" title="Backend Repo" />
                                                </Link>
                                            )}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Link>
                    </motion.div>

                ))}
            </div>
        </div>
    );
};

export default MyProjects;
