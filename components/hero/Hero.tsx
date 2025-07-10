"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Navbar from "@/components/navbar/NavBar";
import ScrollImage from "@/components/DynamicImageScroll";

export default function Hero() {

  return (
  
    <main>
      <div className="relative px-6 md:px-8 lg:px-20">
        <div className="hidden md:block absolute top-0 right-0 h-full w-3/5 md:w-7/8 -z-10"> {/* Adjust width as needed */}
            <svg id="visual" 
                viewBox="0 0 900 600" 
                width="900" 
                height="600" 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1"
                preserveAspectRatio="none"
                className='w-full h-full'
            >
                <defs>
                  <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" /> {/* light red */}
                    <stop offset="100%" stopColor="#b91c1c" /> {/* dark red */}
                  </linearGradient>
                </defs>
                <path 
                    d="M372 600L387.5 588.8C403 577.7 434 555.3 434.3 533.2C434.7 511 404.3 489 380.7 466.8C357 444.7 340 422.3 341.2 400C342.3 377.7 361.7 355.3 366.2 333.2C370.7 311 360.3 289 374.3 266.8C388.3 244.7 426.7 222.3 461.7 200C496.7 177.7 528.3 155.3 532.2 133.2C536 111 512 89 514.7 66.8C517.3 44.7 546.7 22.3 561.3 11.2L576 0L900 0L900 11.2C900 22.3 900 44.7 900 66.8C900 89 900 111 900 133.2C900 155.3 900 177.7 900 200C900 222.3 900 244.7 900 266.8C900 289 900 311 900 333.2C900 355.3 900 377.7 900 400C900 422.3 900 444.7 900 466.8C900 489 900 511 900 533.2C900 555.3 900 577.7 900 588.8L900 600Z" 
                    fill="url(#redGradient)" 
                    strokeLinecap="round" 
                    strokeLinejoin="miter"
                />
            </svg>
        </div>
        <Navbar />

        <div className="container max-w-7xl 2xl:max-w-screen-2xl m-auto h-[calc(100vh-6rem)] flex flex-col md:flex-row md:justify-between">
          <div className="md:-ml-8 lg:-ml-12 -mt-8 md:mt-0 h-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 w-full md:w-1/2 text-center ">
            <motion.div 
              initial = {{opacity:0, y:-60}}
              whileInView = {{opacity:1, y: 0}}
              transition = {{duration: 0.8, ease: "easeOut"}}
            >
                <p className="text-lg lg:text-xl mb-1 lg:mb-2">{"Hello, I'm"}</p>
                <h1 className="text-3xl w-full md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4">Elendu Franklin</h1>
                <p className="text-lg md:text-xl">A Fullstack Developer</p>
            </motion.div>

            <motion.div
              initial = {{opacity:0, y:60}}
              whileInView = {{opacity:1, y: 0}}
              transition = {{duration: 0.8, ease: "easeOut"}}
            >

              <div className="mb-2 md:mb-3 lg:mb-5 flex gap-3">
                  <div className="text-gray-100 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-900 px-4 md:px-6 py-2 md:py-3 border border-red-500 rounded-lg bg-red-500 font-medium shadow-lg hover:bg-transparent transition w-fit">
                    <Link href="#about">Hire Me</Link>
                  </div>
                  <div className=" px-4 md:px-6 py-2 md:py-3 border border-red-500 rounded-lg bg-transparent font-normal shadow-lg hover:border-2 transition w-fit">
                    <Link href="#contact">Get in Touch</Link>
                  </div>   
              </div>

              <motion.div
              animate = {{opacity: 0, y: 10}}
              transition = {{duration: 2, repeat: Infinity}}>
                <ScrollImage />
              </motion.div>
            </motion.div>
          </div>
          
            <div className="md:w-1/2 flex flex-col md:flex-row items-center md:justify-end z-20"> {/* Higher z-index */}
              <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] flex items-center justify-center">
                <Image
                  src="/programmer-illustration.webp"
                  alt="Developer Illustration"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
        </div>

      </div>   
    </main> 
  );
}
