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
                <div className="flex flex-col max-w-md md:flex-row md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl w-full h-full justify-center items-center gap-4 m-auto md:gap-8">
                    <div ref={ref} className="relative w-full h-1/3 md:h-1/2">
                        <Image
                            src={item.imageUrl}
                            alt="project image"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    <motion.div style={isMediumUp ? {y} : {}} className="w-full flex flex-col gap-1 md:gap-2">
                        <h2 className="text-lg sm:text-xl lg:text-3xl 2xl:text-5xl">{item.title}</h2>
                        <p className="text-sm lg:text-base 2xl:text-xl">{item.description}</p>
                       
                        <div className="flex flex-wrap text-sm lg:text-base 2xl:text-xl">
                            <ul className="flex flex-wrap list-disc list-inside">
                                {item.skills.map((skill, index) => (
                                    <li key={index} className="mr-3">{skill}</li>
                                ))}
                            </ul>
                        </div>   

                        <div className="flex gap-4 items-center text-sm lg:text-base 2xl:text-xl">
                            
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
        <div className="relative " ref={ref}>

            <div className="sticky top-0 left-0 mx-4 md:mx-12 pt-4 md:pt-8 text-xl sm:text-2xl lg:text-4xl 2xl:text-6xl z-10 bg-[#0a0a0a]">
                <h1>Portfolio Highlights</h1>
                <motion.div style={{ scaleX }} className="origin-left h-2 bg-red-500"></motion.div>
            </div>
            
            { portfolioData.map(item => (
                <SingleProject item={item} key={item.id}/>
            )) }
        </div>
    )
}

export default Portfolio