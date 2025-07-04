"use client"

import { motion } from "motion/react"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ToggleButtonProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

const ToggleButton = ({setOpen}: ToggleButtonProps) => {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);
    
      if (!mounted) {
        // Render a placeholder or nothing while waiting for client-side mount
        return null;
      }

    return (
        <button onClick={() => setOpen((prev: boolean) => !prev)} className="w-14 h-14 top-5 left-8.5 cursor-pointer rounded-full fixed bg-transparent border-none z-99">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path 
                    strokeWidth="3" 
                    stroke={theme === "light" ? "white": "black"} 
                    strokeLinecap="round" 
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5 "}
                    }}
                />

                <motion.path 
                    strokeWidth="3" 
                    stroke={theme === "light" ? "white": "black"}
                    strokeLinecap="round" 
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0}
                    }}
                />

                <motion.path 
                    strokeWidth="3" 
                    stroke={theme === "light" ? "white": "black"}
                    strokeLinecap="round" 
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </button>
        
    )
}

export default ToggleButton