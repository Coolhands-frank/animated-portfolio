"use client"

import { motion } from "motion/react"
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
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a
                            href="https://github.com/Coolhands-frank"
                            title="Link to Github Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="h-6 w-6"/>
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a
                            href="https://www.linkedin.com/in/franklin-elendu/"
                            title="Link to Linkedin Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-6 w-6"/>
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a
                            href="https://x.com/FranklinElendu"
                            title="Link to Twitter Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="h-6 w-6"/>
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <ThemeProvider />
                    </motion.div>
                </motion.div>
            </div>
        </nav>
    )
}

export default Navbar