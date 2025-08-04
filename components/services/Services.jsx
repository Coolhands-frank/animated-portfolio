'use client'
import { motion, useInView } from "motion/react"
import Image from "next/image"
import { useRef } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4, // delay between children
      
    },
  },
};

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Services = () => {

    const services = [
        {
            title: "💡 Custom Web App Development",
            service: `Modern, fast, and fully responsive applications built using 
            Next.js, React, TypeScript, and Tailwind CSS, tailored to meet specific business
            needs—from MVPs to production-ready solutions.`
        },
        {
            title: "🔗 Backend API & Database Architecture",
            service: `Design and implementation of scalable APIs with 
            NestJS, Node.js, Flask, and Python, paired with robust data handling using 
            MongoDB and Supabase—optimized for performance and security.`
        },
        {
            title: "🛒 E-Commerce & SaaS Solutions",
            service: `Full-featured SaaS and e-commerce platforms with secure auth, payment integrations, 
            admin dashboards, and user roles, built with tools like Next.js, Supabase, and MongoDB.`
        },
        {
            title: "🔍 Code Audits & Refactoring",
            service: `Professional review and optimization of existing codebases, 
            focusing on performance, scalability, and clean architecture, whether it’s React components, 
            RESTful APIs, or database queries.`
        }
    ]

    //const ref = useRef()

    // const isInView = useInView(ref, {margin: "-800px"})


    return (
        <div className="flex flex-col h-full justify-around items-center">
            <div className="flex items-center gap-5 self-end">
                <p className="text-sm sm:text-base lg:text-lg xl:text-2xl 2xl:text-4xl font-extralight text-gray-400 text-right ">
                    I focus on helping your brand grow 
                    <br /> and move forward
                </p>
                <hr className="w-10 lg:w-64 2xl:w-80 border-gray-600" />
            </div>

            <motion.div variants={container}
            initial="hidden"
            whileInView="show" 
            //ref={ref}
            //animate={isInView && "show"}
            className="flex flex-col gap-2 items-center px-3 font-thin text-xl sm:text-2xl lg:text-4xl xl:text-6xl 2xl:text-7xl">
                <motion.div variants={item} className="flex items-center gap-2 md:gap-3 lg:gap-5">
                    <div className="relative h-12 w-32 lg:w-40 lg:h-14 2xl:w-72 2xl:h-24 rounded-full overflow-hidden">
                        <Image
                          src="/service-photo.jpg" // Update with your actual image path
                          alt="Logo"
                          fill
                          className="object-cover"
                        />
                    </div>
                    <h1>
                        <b> Your </b> Vision
                    </h1>
                </motion.div>
                <motion.div variants={item} className="flex items-center gap-2 md:gap-3 lg:gap-5">
                    <h1>
                        <b>Engineered</b> to life.
                    </h1>
                    <button className="h-12 w-32 lg:w-40 lg:h-14 2xl:w-72 2xl:h-24 rounded-full border-none bg-red-500 text-red-100 text-sm sm:text-sm lg:text-lg 2xl:text-xl font-medium">WHAT WE DO?</button>
                </motion.div>
            </motion.div>

            <div className="text-center md:text-left flex flex-col gap-4 sm:gap-0 sm:flex-row sm:max-w-2xl lg:max-w-7xl 2xl:max-w-screen-2xl m-4">
               { services.map((service) => {
                    return (
                    <div key={service.title} className="p-3 lg:p-4 2xl:p-8 sm:border sm:border-gray-800 flex flex-col gap-2 hover:bg-red-500">
                        <h2 className="font-bold text-sm lg:text-base xl:text-lg 2xl:text-3xl">{service.title}</h2>
                        <p className="hidden sm:block font-light text-xs lg:text-sm xl:text-base 2xl:text-2xl">{service.service}</p>
                    </div>
                )}) }

                {/*
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lsum sljdkfjdlf dkjsfodjfls dskfljsdfiodsf sdkjfsldjf sodijfs lkjfsoijfd</p>
                </div>
                */}
            </div>
        </div>
    )
}

export default Services