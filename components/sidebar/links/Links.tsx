"use client"

import Link from "next/link"
import { motion } from "motion/react"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0, 
        opacity: 1
    }, 
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = () => {
    const items= ["Home", "services", "Work", "About", "Contact"]

    return (
        <motion.div variants={variants} className="absolute flex flex-col w-full h-full justify-center items-center gap-5 ">
            {items.map((item, index) => (
                <motion.div className="text-2xl" key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                    <Link href={index==0 ? "#home" : index==1 ? "#services" : index==2 ? "#work" : index==3 ? "#about" : "#contact"}>
                        {item}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Links