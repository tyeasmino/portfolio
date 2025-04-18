"use client";
import React from "react";
import { motion } from "framer-motion";

const SignatureLogo = () => {
    return (
        <div className="hidden md:flex items-center space-x-2">
            {/* Animated "yeasmin" with border */}
            <motion.div
                className="border-l-2 border-b-2 border-black dark:border-white pl-2 pb-1 rounded-bl-xl font-[Dancing_Script] text-xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                yeasmin
            </motion.div>
        </div>
    );
};

export default SignatureLogo;
