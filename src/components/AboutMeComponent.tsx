'use client';
import Image from 'next/image';
import AboutImg1 from 'public/aboutImg-removebg-preview.png'


export default function AboutMe() {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-20 flex items-center justify-center">
      
      <div className='flex gpa-5 md:w-1/3'>  
        <Image className='dark:bg-gray-300 rounded-md  '
          src={AboutImg1}
          alt='Aout Img'
          width={400} 
        />
      </div>
      
      <div className="md:w-2/3 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center border-b pb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          I’m Tamima Yeasmin, a passionate and detail-driven full stack developer with a unique background in the medical sciences. My professional journey began in the field of histopathology, where I worked alongside senior professionals, contributed during the COVID-19 pandemic, and upheld the highest standards of discipline, accuracy, and responsibility. This medical foundation shaped my deep appreciation for precision, structure, and meaningful problem-solving — qualities I now bring into the world of software development.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          My transition into tech was born from a curiosity that turned into a passion. I trained in web technologies including HTML, CSS, JavaScript, Tailwind CSS, React, and Next.js. I’ve since built responsive, accessible, and scalable applications that solve real-world problems. With experience in both frontend design and backend logic, I enjoy working across the full stack to bring ideas to life. I value clean code, thoughtful user interfaces, and performance-driven architecture.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          Outside of coding, I enjoy learning new tools, contributing to meaningful projects, and studying digital product design trends. I strongly believe in continuous learning — whether it’s exploring the latest in JavaScript frameworks or revisiting computer science fundamentals. I bring a blend of creativity, structure, and empathy to every team I’m part of. My mission is to build software that not only works but matters — tools and platforms that feel intuitive, powerful, and human.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          I’m excited to keep growing as a developer and to collaborate with others who value thoughtful, ethical, and user-centered technology. Let’s create something that lasts.
        </p>
      </div>
    </section>
  );
}
