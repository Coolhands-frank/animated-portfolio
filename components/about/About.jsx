"use client"
import { motion } from "motion/react";
import Image from "next/image"
import SkillIcon from "@/components/SkillIcon";
import HoverFillDiv from "../HoverFillBox";
import { 
  SiNextdotjs, SiReact, SiHtml5, SiTailwindcss, SiNestjs,
  SiJavascript, SiPython, SiLaravel, SiPhp, SiSupabase, SiFlask 
} from 'react-icons/si';

const skills = [
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiReact, label: "React" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: SiNestjs, label: "NestJS" },
  { Icon: SiSupabase, label:"Supabase"},
  { Icon: SiHtml5, label: "HTML5" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: SiPython, label: "Python" },
  { Icon: SiLaravel, label: "Laravel" },
  { Icon: SiPhp, label: "PHP" },
  { Icon: SiFlask, label: "Flask" },
];

const About = () => {
    return (
        <motion.div 
            className="h-screen py-4 px-6 md:py-6 lg:px-8 flex flex-col items-center max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl xl:py-12 2xl:p-20 m-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
        >

            <motion.div 
                className="mb-2 md:mb-auto lg:self-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ amount: 0.3 }}
            >
                <h2 className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl">About Me</h2>
                <hr className="w-12 md:w-16 lg:w-26 border-2 border-red-500"/>
            </motion.div>

            <div className="h-full flex flex-col items-center justify-center md:flex-row gap-2 md:gap-3 lg:gap-5 xl:gap-8">
                <motion.div 
                    className="relative w-full h-52 md:h-4/5 2xl:h-[600px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ amount: 0.3 }}
                >
                    <Image
                        src="/about-image.png"
                        alt="My photo"
                        fill
                        className="w-96 h-full object-cover object-[10%_30%] md:object-[20%_35%] md:rounded-full"
                    />
                </motion.div>

                <motion.div 
                    className="w-full flex flex-col gap-2 text-xs md:text-sm xl:text-base 2xl:text-2xl"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                >
                    <motion.p 
                        className="text-justify md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        I'm a Fullstack Developer and Designer based in Nigeria, 
                        passionate about building applications that solve real-world problems and feel great to use.
                        When I'm not coding or designing, you'll probably find me deep in a game of Scrabble or plotting 
                        my next chess move. I love a good challenge—whether it's on a board or in a codebase!
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <h3 className="mb-3">Skillset</h3>
                        <div className="grid grid-cols-4 md:grid-cols-4 xl:grid-cols-5 gap-2">
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <SkillIcon key={index} Icon={skill.Icon} label={skill.label} />
                                </motion.div>         
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.4 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <a href="https://drive.google.com/file/d/13TNfLkSi_HVwvc47wMPOymhc28bmOUl9/view?usp=sharing" target="_blank">
                            <HoverFillDiv className="w-full text-center rounded-md py-2 border border-red-500 text-xs md:text-sm xl:text-base">My Resume</HoverFillDiv>
                        </a>
                    </motion.div>

                </motion.div>

            </div>
        </motion.div>
    )
}

export default About