"use client"
import portfolioData from "../portfolio-data/PortfolioData"
import { motion, useScroll, useSpring, useInView, useTransform } from "motion/react"
import { useRef } from "react"
import Link from "next/link"
import { FaGithub } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import Image from "next/image"
import useMediaQuery from "../hooks/useMediaQuery"
import HoverFillDiv from "../HoverFillBox"

const SingleProject = ({ item }) => {

    const isMediumUp = useMediaQuery("(min-width: 768px)");
    
    const ref = useRef();

    const { scrollYProgress } = useScroll({
    target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section className="h-screen snap-center">
            <div className="flex items-center justify-center w-full h-full overflow-hidden">  
                <div className="flex flex-col mt-5 max-w-md md:flex-row md:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl w-full h-full justify-center items-center gap-4 md:m-auto xl:gap-12">
                    <div ref={ref} className="relative w-full h-[200px] md:h-1/2 2xl:h-[600px]">
                        <Image
                            src={item.imageUrl}
                            alt="project image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <motion.div style={isMediumUp ? {y} : {}} className="w-full flex flex-col gap-2">
                        <h2 className="text-base sm:text-xl lg:text-2xl 2xl:text-4xl">{item.title}</h2>
                        <p className="text-xs sm:text-sm xl:text-base 2xl:text-2xl 2xl:leading-normal">{item.description}</p>
                       
                        <div className="flex flex-wrap text-xs sm:text-sm xl:text-base 2xl:text-2xl">
                            <ul className="flex flex-wrap list-disc list-inside">
                                {item.skills.map((skill, index) => (
                                    <li key={index} className="mr-3">{skill}</li>
                                ))}
                            </ul>
                        </div>   

                        <div className="flex gap-4 items-center text-xs md:text-sm xl:text-base 2xl:text-2xl">
                            
                            <Link href="#">
                                <HoverFillDiv className="p-2 border-b border-red-500">
                                    <div className="flex items-center gap-2">
                                        <p>Visit site</p> 
                                        <FiArrowRight size={20} />
                                    </div>
                                </HoverFillDiv>    
                            </Link>

                            <Link href="#">
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <FaGithub size={24} />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["start start", "end end"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
     
    return (
        <div className="relative p-3 lg:px-12 md:p-6 xl:max-w-7xl 2xl:max-w-screen-2xl md:m-auto" ref={ref}>

            <div className="sticky top-0 left-0 pt-2 md:pt-6 lg:pt-8 2xl:pt-10 text-center lg:text-left text-xl sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl z-10 bg-gray-100 dark:bg-gray-900 ">
                <h1>Portfolio Highlights</h1>
                <motion.div style={{ scaleX }} className="origin-center lg:origin-left h-2 mt-1 bg-red-500"></motion.div>
            </div>
            
            { portfolioData.map(item => (
                <SingleProject item={item} key={item.id}/>
            )) }
        </div>
    )
}

export default Portfolio