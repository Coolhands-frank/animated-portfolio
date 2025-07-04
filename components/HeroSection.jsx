// components/HeroSection.jsx (or app/page.js if it's the main page)
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden">
        {/* Background shapes (Gradient blob on the right) */}
        <div className="absolute top-0 right-0 h-full w-3/5 md:w-4/6 lg:w-full"> {/* Adjust width as needed */}

            <svg id="visual" 
                viewBox="0 0 900 600" 
                width="900" 
                height="600" 
                xmlns="http://www.w3.org/2000/svg" 
                version="1.1"
                preserveAspectRatio="none"
                className=' hidden w-full h-full'
            >
                <path 
                    d="M372 600L387.5 588.8C403 577.7 434 555.3 434.3 533.2C434.7 511 404.3 489 380.7 466.8C357 444.7 340 422.3 341.2 400C342.3 377.7 361.7 355.3 366.2 333.2C370.7 311 360.3 289 374.3 266.8C388.3 244.7 426.7 222.3 461.7 200C496.7 177.7 528.3 155.3 532.2 133.2C536 111 512 89 514.7 66.8C517.3 44.7 546.7 22.3 561.3 11.2L576 0L900 0L900 11.2C900 22.3 900 44.7 900 66.8C900 89 900 111 900 133.2C900 155.3 900 177.7 900 200C900 222.3 900 244.7 900 266.8C900 289 900 311 900 333.2C900 355.3 900 377.7 900 400C900 422.3 900 444.7 900 466.8C900 489 900 511 900 533.2C900 555.3 900 577.7 900 588.8L900 600Z" 
                    fill="#ef4444" 
                    strokeLinecap="round" 
                    strokeLinejoin="miter"
                />
            </svg>

            {/*    
            <svg
                id="visual"
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
                width="900"
                height="600"
                version="1.1"
                className="w-full h-full"
                preserveAspectRatio="none"
            >
                <path
                    d="M530 600L541 588.8C552 577.7 574 555.3 574.3 533.2C574.7 511 553.3 489 536.8 466.8C520.3 444.7 508.7 422.3 509.5 400C510.3 377.7 523.7 355.3 526.7 333.2C529.7 311 522.3 289 532.2 266.8C542 244.7 569 222.3 593.5 200C618 177.7 640 155.3 642.7 133.2C645.3 111 628.7 89 630.5 66.8C632.3 44.7 652.7 22.3 662.8 11.2L673 0L900 0L900 11.2C900 22.3 900 44.7 900 66.8C900 89 900 111 900 133.2C900 155.3 900 177.7 900 200C900 222.3 900 244.7 900 266.8C900 289 900 311 900 333.2C900 355.3 900 377.7 900 400C900 422.3 900 444.7 900 466.8C900 489 900 511 900 533.2C900 555.3 900 577.7 900 588.8L900 600Z"
                    fill="#ef4444"
                    strokeLinecap="round"
                    strokeLinejoin="miter"
                />
            </svg>
            */}

            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="384.236 -1.1 645.9 601.2" 
                className=" w-full h-full"
                preserveAspectRatio="none"
            >
            	<path 
                    d="M636 600 591 599C554 602 327 556 398 474 497 441 522 506 576 436 592 389 509 370 523 314 545 280 599 294 607 251 617 203 526 195 546 118 597 65 624 126 701 112 748 88 766 51 776 29L787-1H1029.712L1030 599Z" 
                    stroke="#FF0000" 
                    strokeWidth="0.1" 
                    fill="#ef4444"
                />
            </svg>
            
        </div>

      {/* Main content */}
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between px-4 py-16">
        {/* Left Content */}
        <div className="text-left mb-12 md:mb-0 md:w-1/2">
          <p className="text-xl text-gray-700 mb-2">Hello, I'm</p>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Elendu Franklin</h1>
          <p className="text-xl text-gray-600 mb-8">A Fullstack Developer</p>
          <div className="flex space-x-4">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
              Hire Me
            </button>
            <button className="border border-teal-500 text-teal-500 hover:bg-teal-50 hover:text-teal-600 font-medium py-3 px-6 rounded-lg transition duration-300">
              Get Resume
            </button>
          </div>
        </div>

        {/* Right Image/Illustration (positioned over the background blob) */}
        <div className="md:w-1/2 flex justify-center md:justify-end z-20"> {/* Higher z-index */}
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <Image
              src="/programmer-illustration.webp" // Replace with your actual illustration path
              alt="Developer Illustration"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;