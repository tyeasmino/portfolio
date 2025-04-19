// "use client";
// import React, { useState } from 'react';
// import skillDesktop from 'public/skill/desktop.jpg';
// import tailorDesktop from 'public/tailor/desktop.jpg';
// import Image from 'next/image';
// import { BsGithub } from 'react-icons/bs';
// import { BiLink } from 'react-icons/bi';
// import Link from 'next/link';



// const allProjects = [
//     {
//         title: 'SkillCrafted - Freelancer Platform',
//         category: 'Fullstack',
//         github: 'https://github.com/tyeasmino/SkillCrafted-Frontend',
//         live: 'https://skill-crafted-frontend.vercel.app/',
//         backend: 'https://github.com/tyeasmino/SkillCrafted-Backend',
//         description: `A full-stack freelance marketplace with user authentication, email verification, project posting, filtering, and proposal submission. Includes review/rating system and deployment-ready setup.`
//     },
//     {
//         title: 'TailorHub - Tailor Management System',
//         category: 'Fullstack',
//         github: 'https://github.com/tyeasmino/TailorHub-Frontend',
//         live: 'https://tailor-hub-frontend.vercel.app/',
//         backend: 'https://github.com/tyeasmino/TailorHub-Backend',
//         description: `A POS system with user role management, inventory, order tracking, payment gateway integration (Stripe, SSLCommerz), and receipt generation.`
//     },
//     {
//         title: 'E-Learning Management System (DCSA - BOU)',
//         category: 'Frontend',
//         description: `Designed for a university course. Managed course contents, students, progress tracking using React.`
//     },
//     {
//         title: 'WebScrapper (Web Development Project)',
//         category: 'Frontend',
//         description: `A tool that scrapes and analyzes data from websites for structured insights.`
//     },
//     {
//         title: 'Pocket License (Mobile App)',
//         category: 'Mobile App',
//         description: `An app that stores and displays driving license info. UI built with mobile-first design principles.`
//     },
//     {
//         title: 'EnDecoder (Encoder & Decoder Tool)',
//         category: 'Others',
//         description: `A simple tool to encode/decode messages. Developed for educational/demo purposes.`
//     },
//     {
//         title: 'Patient Report Formatter (Word + Excel + Power BI)',
//         category: 'Others',
//         description: `Uses HTML/CSS + Django form to input diagnostic data. Auto-generates formatted Word reports and saves data to Excel. Excel connected to Power BI for dashboard analytics.`
//     },
//     {
//         title: 'Word to PDF Splitter (EXE Tool)',
//         category: 'Others',
//         description: `A desktop EXE app that reads a 300-page Word file and splits it into 60+ PDFs based on headings while preserving headers/footers.`
//     }
// ];

// const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile App', 'Others'];

// const MyProjects = () => {
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     const filteredProjects =
//         selectedCategory === 'All'
//             ? allProjects
//             : allProjects.filter((p) => p.category === selectedCategory);

//     return (
//         <div className="p-6 mx-auto">
//             <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

//             <div className="flex flex-wrap gap-2 justify-center mb-6">
//                 {categories.map((cat) => (
//                     <button
//                         key={cat}
//                         onClick={() => setSelectedCategory(cat)}
//                         className={`w-[120px] py-2 rounded-full border ${selectedCategory === cat ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-transparent text-black dark:text-white'
//                             } transition-all`}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//                 {filteredProjects.map((proj, idx) => (
//                     <div
//                         key={idx}
//                         className="relative shadow rounded-xl p-6 transition-colors duration-500 bg-white text-black dark:shadow-white dark:shadow-xs dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
//                     >
//                         <span className="border-top"></span>
//                         <span className="border-right"></span>
//                         <span className="border-bottom"></span>
//                         <span className="border-left"></span>
//                         <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
//                         <p className="text-sm mb-2 font-semibold">{proj.category}</p>
//                         <p className="text-sm mb-3">{proj.description}</p>
//                         <div className="flex flex-wrap gap-2 text-sm">
//                             {proj.github && <a href={proj.github} className="underline" target="_blank">GitHub</a>}
//                             {proj.live && <a href={proj.live} className="underline" target="_blank">Live</a>}
//                             {proj.backend && <a href={proj.backend} className="underline" target="_blank">Backend</a>}
//                         </div>
//                     </div>
//                 ))}


//                 {/* // Example project card layout idea (with Tailwind) */}
//                 <Link href="https://skill-crafted-frontend.vercel.app/" target='_blank'>
//                     <div className="group relative bg-white dark:bg-black rounded-xl shadow hover:shadow-xl overflow-hidden border dark:border-gray-700 transition-all">
//                         <Image
//                             src={skillDesktop}
//                             alt="Skill Crafted project"
//                             className="w-full h-60 object-fit"
//                         />

//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-black dark:text-white group-hover:underline">Skill Crafted</h3>
//                             <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">A freelancer platform with email verification, project proposals, filtering, reviews, and more.</p>

//                             <div className='flex items-center justify-between'>
//                                 <div className="flex flex-wrap gap-2 mt-3 text-xs text-white">
//                                     <span className="bg-gray-800 px-2 py-1 rounded">React.js</span>
//                                     <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
//                                     <span className="bg-gray-800 px-2 py-1 rounded">Django Rest Framework</span>
//                                 </div>
//                                 <div className="flex gap-2 mt-4 text-sm justify-end">
//                                     <a href="https://skill-crafted-frontend.vercel.app/" target='_blank' className="hover:underline"> <BiLink /> </a>
//                                     <a href="https://github.com/tyeasmino/SkillCrafted-Frontend" target='_blank' className=" hover:underline"> <BsGithub /> </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Link>


//                 {/* // Example project card layout idea (with Tailwind) */}
//                 <Link href="https://tailor-hub-frontend.vercel.app/" target='_blank'>
//                     <div className="group relative bg-white dark:bg-black rounded-xl shadow hover:shadow-xl overflow-hidden border dark:border-gray-700 transition-all">
//                         <Image
//                             src={tailorDesktop}
//                             alt="TailorHub - Tailor Management System"
//                             className="w-full h-60 object-fit"
//                         />

//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold text-black dark:text-white group-hover:underline">TailorHub - Tailor Management System</h3>
//                             <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">A POS system with user role management, inventory, order tracking, payment gateway integration (Stripe, SSLCommerz), and receipt generation.</p>

//                             <div className='flex items-center justify-between'>
//                                 <div className="flex flex-wrap gap-2 mt-3 text-xs text-white">
//                                     <span className="bg-gray-800 px-2 py-1 rounded">React.js</span>
//                                     <span className="bg-gray-800 px-2 py-1 rounded">Tailwind</span>
//                                     <span className="bg-gray-800 px-2 py-1 rounded">Django Rest Framework</span>
//                                     <span className="bg-gray-800 px-2 py-1 rounded">Payment Gateway</span>
//                                 </div>
//                                 <div className="flex gap-2 mt-4 text-sm justify-end">
//                                     <a href="https://tailor-hub-frontend.vercel.app/" target='_blank' className="hover:underline"> <BiLink /> </a>
//                                     <a href="https://github.com/tyeasmino/TailorHub-Frontend" target='_blank' className=" hover:underline"> <BsGithub /> </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default MyProjects;




























"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import skillDesktop from "public/skill/desktop.jpg";
import tailorDesktop from "public/tailor/desktop.jpg";

const categories = ["All", "Frontend", "Backend", "Fullstack", "Mobile App", "Others"];

const allProjects = [
    {
        title: "SkillCrafted - Freelancer Platform",
        category: "Fullstack",
        github: "https://github.com/tyeasmino/SkillCrafted-Frontend",
        live: "https://skill-crafted-frontend.vercel.app/",
        backend: "https://github.com/tyeasmino/SkillCrafted-Backend",
        image: skillDesktop,
        description:
            "A full-stack freelance marketplace with user authentication, project filtering, reviews, and secure payment setup.",
        tech: ["React.js", "Tailwind", "Django Rest Framework"],
    },
    {
        title: "TailorHub - Tailor Management System",
        category: ['Frontend', 'Backend'],
        github: "https://github.com/tyeasmino/TailorHub-Frontend",
        live: "https://tailor-hub-frontend.vercel.app/",
        backend: "https://github.com/tyeasmino/TailorHub-Backend",
        image: tailorDesktop,
        description:
            "A POS system with role-based login, inventory, order tracking, payments (Stripe/SSLCommerz), and printable receipts.",
        tech: ["React.js", "Tailwind", "DRF", "SSLCommerz"],
    },
    {
        title: 'E-Learning Management System (DCSA - BOU)',
        category: 'Frontend',
        description: `Designed for a university course. Managed course contents, students, progress tracking using React.`
    },
    {
        title: 'WebScrapper (Web Development Project)',
        category: 'Frontend',
        description: `A tool that scrapes and analyzes data from websites for structured insights.`
    },
    {
        title: 'Pocket License (Mobile App)',
        category: 'Mobile App',
        description: `An app that stores and displays driving license info. UI built with mobile-first design principles.`
    },
    {
        title: 'EnDecoder (Encoder & Decoder Tool)',
        category: ['Frontend', 'Backend', 'Fullstack'],
        description: `A simple tool to encode/decode messages. Developed for educational/demo purposes.`
    },
    {
        title: 'Patient Report Formatter (Word + Excel + Power BI)',
        category: 'Others',
        description: `Uses HTML/CSS + Django form to input diagnostic data. Auto-generates formatted Word reports and saves data to Excel. Excel connected to Power BI for dashboard analytics.`
    },
    {
        title: 'Word to PDF Splitter (EXE Tool)',
        category: 'Others',
        description: `A desktop EXE app that reads a 300-page Word file and splits it into 60+ PDFs based on headings while preserving headers/footers.`
    }
];

const MyProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? allProjects
            : allProjects.filter((p) => p.category.includes(selectedCategory));

    return (
        <div className="p-6 mx-auto">
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
                {filteredProjects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                        <Link href={proj.live || "#"} target="_blank">
                            <div className="group bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
                                {proj.image && (
                                    <Image
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-auto object-cover"
                                    />
                                )}

                                <div className="p-4">
                                    <h3 className="text-lg font-bold group-hover:underline text-black dark:text-white">
                                        {proj.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
                                        {proj.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex flex-wrap gap-2 text-xs text-white">
                                            {proj.tech?.map((tech, i) => (
                                                <span key={i} className="bg-gray-800 px-2 py-1 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 text-base mt-3 text-black dark:text-white">
                                            {proj.live && (
                                                <a href={proj.live} target="_blank" className="hover:underline">
                                                    <BiLink />
                                                </a>
                                            )}
                                            {proj.github && (
                                                <a href={proj.github} target="_blank" className="hover:underline">
                                                    <BsGithub />
                                                </a>
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
