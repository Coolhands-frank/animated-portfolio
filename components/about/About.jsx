"use client"
import Image from "next/image"
import portfolioData from "../portfolio-data/PortfolioData"

const About = () => {
    return (
        <div className="p-4">
            <h2>About Me</h2>

            <div className="flex flex-col sm:max-w-lg">
                <div className="relative w-full h-50">
                    <Image
                        src={portfolioData[0].imageUrl}
                        alt="My photo"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <div>
                    <p>
                        I'm a Fullstack Developer and Designer based in Nigeria, 
                        passionate about building applications that solve real-world problems and feel great to use. 
                        I have a background in Information Technology and hold a Bachelor's degree in Computer Science 
                        from Alex Ekwueme Federal University.
                        When I'm not coding or designing, you'll probably find me deep in a game of Scrabble or plotting 
                        my next chess move. I love a good challenge—whether it's on a board or in a codebase!
                    </p>
                    <h3>Skills</h3>
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default About