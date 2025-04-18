'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import girlHero from 'public/heroBaby.svg';
// import girlHero from 'public/herogirl.png';




export default function SvgIconHeroGirl() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full max-w-[700px] dark:bg-gray-700 rounded"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          whileHover={{ rotate: 2, transition: { yoyo: Infinity } }}
        >
          <Image
            src={girlHero}
            alt="Illustration of a developer girl at laptop"
            className="w-full object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
