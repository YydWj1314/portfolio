"use client";   // 声明 client 组件
import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { li } from 'framer-motion/client';
import Link from 'next/link';

export default function Header() {
    // 1.	w-full： 让 div 宽度占满整个屏幕
    // 2.	left-1/2 -translate-x-1/2： 让 div 居中
    // 3.	fixed top-0： 让 div 固定在顶部
    return (
        <header className="z-[999] relative">
            <motion.div 
                className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border 
                border-white border-opacity-60 bg-white bg-opacity-80  shadow-black/[0.03] backdrop-blur-[0.5rem] 
                sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
                // Fade in/out 
                initial={{ opacity: 0, x: "-50%", y: -100 }} // 初始状态
                animate={{ opacity: 1, x: "-50%", y: 0 }}
            // 弹性缩放（Spring Scale）
            // initial={{ scale: 0.5, x: "-50%", y: -100 }}
            // animate={{ scale: 1,x: "-50%", y: 0  }}
            // transition={{ type: "spring", stiffness: 100, damping: 10 }}
            ></motion.div>

            <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
            sm:top-[1.7rem] sm:h-[initial] sm:py-0"
            >
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 
                text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
                >
                    {
                        links.map(link => (
                            <motion.li className="h-3/4 flex items-center justify-center"
                                key={link.hash}
                                initial={{ opacity: 0, y: -100}} 
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{scale: 1.07}}  // hover 放大
                                transition={{duration: 0.1 }} // hover 动画时间
                            > 
                                <Link
                                    className="flex w-full items-center justify-center px-3 py-3
                                    hover:bg-gray-300 transition-all duration-300 
                                    hover:rounded-full "
                                    href={link.hash}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );

}

