"use client";
import React from "react";
import { motion } from "framer-motion";
import SvgIconHeroGirl from "./SvgIconHeroGirl";
import SocialIcons from "./SocaialIcons";


const HeroComponent = () => {

    const text = "Tamima Yeasmin";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };



    return (
        <section className="flex items-center justify-center px-6">
            <div className="flex flex-col md:flex-row items-start justify-between w-full">

                {/* Left Side */}
                <div className="order-2 md:order-1 w-full md:w-1/2 space-y-6 md:my-20">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-4xl md:text-6xl items-center font-bold text-black dark:text-white leading-tight flex flex-wrap"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-xl md:text-4xl text-gray-600 font-semibold mr-5"
                        >
                            Hello, I&apos;m 
                        </motion.p>

                        {text.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                            className="block"
                        >
                            <h1 className="text-2xl md:text-6xl leading-tight dark:text-gray-400 font-extrabold">
                                Full Stack <span className="outline-text">Developer</span> 
                                {/* <span className="font-semibold">from</span> Dhaka */}
                            </h1>
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className="text-gray-700 dark:text-gray-500"
                    >
                        I&apos;m a passionate developer who loves turning ideas into interactive digital experiences.
                        I specialize in crafting clean code and beautiful UI, backed by powerful backend systems.
                        My journey began as a Medical Technologist in 2017, and after years of hands-on experience
                        in healthcare, I completed my Computer Science degree in 2023 — blending logic, creativity,
                        and a lifelong learning mindset into every project I build.
                    </motion.p>

                    <SocialIcons /> 



                </div>

                {/* Right Side - SVG Illustration */}
                <motion.div
                    className="order-1 md:order-2 h-60 md:max-h-100 w-full md:w-1/2 mt-10 md:mt-0 relative aspect-square" // add relative + sizing
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <SvgIconHeroGirl />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroComponent;
