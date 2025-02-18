"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        damping: 10,
                        delay: 0.1,
                        duration: 0.2,
                    }}
                >
                    <Image
                        src="/Daniel.png"  // 放在 根目录下public 可以直接访问
                        alt="Daniel portrait"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover 
                        border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>
            </div>

            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Daniel.</span> I'm a{" "}
                <span className="font-bold">novice programmer👽</span> with{" "}
                <span className="font-bold">0.3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline font-bold">Java & React (Next.js)</span>.
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center 
            text-lg font-medium gap-4 px-4'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.1}}
            >
                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 
                flex items-center gap-2 rounded-full outline-none shadow-md
                hover:scale-110 transition">
                    <span className="group-hover:scale-105 transition duration-300">Contact Me Here</span>
                    <span className="group-hover: animate-bounce">👋</span>
                </Link> 

                <a href="/CV.pdf" className="group bg-white text-black px-7 py-3 
                flex items-center gap-2 rounded-full outline-none shadow-md
                focus:scale-110 hover:scale-110 transition">
                    <span className="group-hover:scale-110 transition duration-300">DownLoad CV</span>
                    <span className="group-hover: animate-bounce"><HiDownload /></span>
                </a>

                <a className="group bg-gray-50 text-gray-700 px-7 py-3 cursor-pointer
                flex items-center gap-2 rounded-full text-[1.35rem] shadow-md
                hover:scale-[1.15] hover:text-gray-950 active:scale-1.05 transition"
                href="https://www.linkedin.com/" target="_blank">
                    <BsLinkedin className='group-hover:scale-110 transition duration-300'/>
                </a>
 
                <a className="group bg-gray-50 text-gray-700 px-7 py-3 cursor-pointer
                flex items-center gap-2 rounded-full text-[1.35rem] shadow-md
                hover:scale-[1.15] hover:text-gray-950 active:scale-1.05 transition"
                href="https://www.github.com/" target="_blank">
                    <FaGithubSquare className='group-hover:scale-110 transition duration-300'/>
                </a>      
            </motion.div>
        </section>
    )
}
