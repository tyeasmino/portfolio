'use client';
import Image from 'next/image';
import AboutImg1 from 'public/aboutImg-removebg-preview.png'


export default function AboutMe() {
  return (
    <section className="min-h-full text-black dark:text-white px-6 py-10 flex flex-col md:flex-row items-center justify-center">

      <div className='w-full flex gpa-5 md:w-1/3'>
        <div className='border-3 rounded-md'>
          <Image className='dark:bg-gray-300 rounded-md '
            src={AboutImg1}
            alt='Aout Img'
            width={400}
          />
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-8 my-10 md:my-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center border-b pb-4">
          About Me
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          Hi, I&#39;m Tamima Yeasmin — a full stack developer with a background in medical sciences. I began my career in histopathology, where precision, discipline, and problem-solving were essential — qualities I now bring into software development.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          Curiosity led me to tech, where I trained in HTML, CSS, JavaScript, Tailwind CSS and learning React, and Next.js. I&#39;ve since built responsive, scalable apps with a focus on clean code, thoughtful design, and full stack functionality.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-justify tracking-wide">
          I&#39;m passionate about continuous learning, exploring new tools, and building user-centered digital products that are both intuitive and impactful. Let&#39;s create something meaningful together.
        </p>

      </div>
    </section>
  );
}
