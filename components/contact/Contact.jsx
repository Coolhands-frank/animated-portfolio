"use client"
import HoverFillDiv from "../HoverFillBox"
import { motion } from "motion/react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import useMediaQuery from "../hooks/useMediaQuery"

const variants = {
    initial: {
        y: 500, 
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6, 
            staggerChildren: 0.1
        }
    }
}

const Contact = () => {

    //const ref = useRef()
    const formRef = useRef();
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const isMediumUp = useMediaQuery("(min-width: 768px)");

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c8bli6m', 'template_1ny58wj', formRef.current, {
        publicKey: 'ZcnapY9184Co-5iaN',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
          setErrorMessage(error.text)
        },
      );
  };

    return (
        <motion.div 
           // ref={ref}
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="h-full w-full sm:max-w-lg p-6 lg:p-8 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-screen-2xl flex flex-col md:flex-row m-auto justify-center md:justify-between items-center gap-2 md:gap-4"
        >
            <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
                <div className="flex flex-col ">
                    <motion.h1 variants={variants} className="text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl">Get in Touch</motion.h1>
                    <hr className="w-12 md:w-16 lg:w-26 border-2 border-red-500"/>
                </div>
                
                <motion.p variants={variants} className="text-sm lg:text-base xl:text-lg text-justify md:text-left">Are you looking for a fast-performing and user-friendly 
                    website to represent your product or business? or looking for any kind of 
                    consultation? or want to ask questions? or have some advice for me or just want to 
                    say "Hi", in any case feel free to let me know. I will do my best to respond back.
                    The quickest way to reach out to me is via an email. </motion.p>
                <motion.div variants={variants}>
                    <HoverFillDiv className="hidden md:block py-2 px-8 border border-red-500 w-fit text-sm lg:text-base xl:text-lg">elendufranklin66@gmail.com</HoverFillDiv>
                </motion.div>
                
            </motion.div>

            <div className="w-full md:w-96 relative flex items-center">
                <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 stroke-red-500 -z-10" 
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition= {{ delay: 3, duration: 1}}
                >
                    
                    <svg width="300px" height="300px" viewBox="0 0 32.666 32.666">
                        <motion.path
                          strokeWidth={0.2}
                          fill="none"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 3 }}
                          d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                        M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                        C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                        c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                        c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                        c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                        c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                        c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                        c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                        c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                        c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                        l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                        C32.666,7.326,25.339,0,16.333,0z"
                        />
                    </svg>

                </motion.div>

                <motion.form 
                    ref={formRef}
                    className="w-full lg:w-96 flex flex-col gap-2 md:gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition= {{ delay: 4, duration: 1}}
                    onSubmit={sendEmail}
                >
                    <input className="border p-1 md:p-2 rounded-md" name="name" type="text" required placeholder="Name" />
                    <input className="border p-1 md:p-2 rounded-md" name="email" type="email" required placeholder="Sender Email" />
                    <textarea rows={isMediumUp ? 8 : 7} className="border p-1 md:p-2 rounded-md" name="message" placeholder="Message" />
                    <HoverFillDiv className="rounded-md">
                    <motion.button 
                        whileTap={{ scale: 0.8 }}
                        className="p-2 rounded-md border border-red-500 w-full" 
                        type="submit" 
                        value="Send"
                    >
                        {success ? "sent" : "Submit"}
                    </motion.button>
                    </HoverFillDiv>
                    {error && <p>{errorMessage}</p>}
                    {success && <p>Success</p>}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact