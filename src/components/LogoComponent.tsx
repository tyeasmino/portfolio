"use client";
import React from "react";
import { motion } from "framer-motion";

const LogoComponent = () => {
    return (
        <div>
            <motion.div
                className="group relative flex h-14 w-20 items-center justify-between rounded-2xl border border-gray-300 bg-white p-2 shadow-md"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                }}
            >
                <div className="flex flex-col justify-between">
                    {/* Top Row: Code + Chain */}
                    <div className="flex items-center justify-between">
                        {/* Chain Icon */}
                        <svg className="h-5 w-8" viewBox="0 0 100 100" fill="black">
                            {/* Animated lines (fade-in loop) */}
                            <motion.line
                                x1="30"
                                y1="50"
                                x2="70"
                                y2="30"
                                stroke="black"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0.3 }}
                                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.line
                                x1="30"
                                y1="50"
                                x2="70"
                                y2="70"
                                stroke="black"
                                strokeWidth="2"
                                initial={{ pathLength: 0, opacity: 0.3 }}
                                animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: 0.4,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Circles with scale + float motion */}
                            <motion.circle
                                cx="30"
                                cy="50"
                                r="6"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    cy: [50, 48, 50],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.circle
                                cx="70"
                                cy="30"
                                r="6"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    cx: [70, 72, 70],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 0.3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.circle
                                cx="70"
                                cy="70"
                                r="6"
                                animate={{
                                    scale: [1, 1.25, 1],
                                    cx: [70, 68, 70],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>

                        {/* Code Text */}
                        <motion.div
                            className="text-sm font-bold dark:text-black"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            ty/&gt;
                        </motion.div>
                    </div>

                    {/* Bottom Row: Bar chart */}
                    <div className="flex items-end justify-center gap-[5px] pt-2">
                        {[6, 14, 10, 18, 14, 12].map((height, idx) => (
                            <motion.div
                                key={idx}
                                className="w-[4px] rounded bg-black"
                                style={{ height }}
                                animate={{
                                    scaleY: [1, 1.4, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatDelay: 0.2 + idx * 0.1,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>




        </div>

    );
};

export default LogoComponent;
