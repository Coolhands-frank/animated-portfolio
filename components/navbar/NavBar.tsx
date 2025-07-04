"use client"

import { motion } from "motion/react"
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import ThemeProvider from "@/components/providers/ThemeProvider";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <nav className="h-24">
            <Sidebar />

            <div className="flex flex-col justify-center md:justify-end md:flex-row lg:justify-between items-end md:items-center max-w-7xl 2xl:max-w-screen-2xl m-auto h-full">
                <motion.span 
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition= {{duration: 0.5}}
                    className="hidden lg:block text-lg font-semibold"
                >
                    CoolHands
                </motion.span>

                <motion.div 
                    initial={{opacity:0, scale:0.5}}
                    animate={{opacity:1, scale:1}}
                    transition= {{duration: 0.5}}
                    className="flex items-center space-x-2 md:space-x-6"
                >
                    <Link href="#">
                        <FaGithub className="h-6 w-6"/>
                    </Link>
                    <Link href="#">
                        <FaLinkedin className="h-6 w-6"/>
                    </Link>
                    <Link href="#">
                        <FaTwitter className="h-6 w-6"/>
                    </Link>
                    <ThemeProvider />
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar