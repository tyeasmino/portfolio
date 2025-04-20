import React from 'react'
import LogoComponent from './LogoComponent'
import SignatureLogo from './SignatureLogo'
import Link from 'next/link'
import { Download } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href="/" className=" flex items-center gap-2">
        <LogoComponent />
        <SignatureLogo />
      </Link>

      <div className="hidden md:flex gap-5 items-center">
        <Link href=""  >
          <span className="relative inline-block text-md font-semibold group px-1">
            About Me
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="">
          <span className="relative inline-block text-md font-semibold group px-1">
            Skills
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="" >
          <span className="relative inline-block text-md font-semibold group px-1">
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="">
          <span className="relative inline-block text-md font-semibold group px-1">
            Experiences
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="">
          <span className="relative inline-block text-md font-semibold group px-1">
            Contact Me
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
      <div>
        <Link href="https://drive.google.com/file/d/1-fxg1awrK3VFXawP9mQAv_tRDRVIKRlL/view?usp=sharing" target='_blank'  className="flex items-center py-2 rounded font-bold text-md px-8 text-white gap-2 md:gap-5  bg-black dark:bg-white dark:text-black"><span className='text-sm md:text-base'>Resume</span> <Download className="w-5 h-5" /> </Link>
      </div>
    </nav>
  )
}

export default Navbar