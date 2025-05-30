"use client"
import portfolioData from "../portfolio-data/PortfolioData"
import { motion, useScroll } from "motion/react"

const SingleProject = ({ item }) => {
    return (
        <section className="h-screen snap-center">
            {item.title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll()

    return (
        <div>
            <div className="progress">
                <h1>Portfolio Highlights</h1>
                <div className=""></div>
            </div>

            { portfolioData.map(item => (
                <SingleProject item={item} key={item.id}/>
                )) }
        </div>
    )
}

export default Portfolio