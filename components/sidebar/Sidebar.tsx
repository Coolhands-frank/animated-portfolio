"use client"

import ToggleButton from "./toggleButton/ToggleButton"
import Links from "./links/Links"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(24px at 46px 46px",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    return (
        <motion.div 
            initial = 'closed'
            animate={open ? "open" : "closed"}
            className="flex flex-col items-center justify-center text-gray-100 dark:text-gray-900 bg-gray-800 dark:bg-gray-100"
        >
            <motion.div 
                variants={variants}
                className="fixed top-0 left-0 bottom-0 w-2/3 md:w-1/3 lg:w-1/4 bg-gray-800 dark:bg-gray-100 z-90"
            >
                <Links setOpen={setOpen}/>
            </motion.div>

            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar