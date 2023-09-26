import React, { useEffect, useRef } from 'react'
import Hero from '../assets/Hero Image 2.jpg'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-scroll'

import Typed from 'typed.js'

function Home() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        "I'm a Frontend Developer",
        "I'm a Frontend Engineer",
        "I'm a Web Designer",
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 50, // backspacing speed in milliseconds
      loop: true, // loop the animation indefinitely
    }

    const typed = new Typed(typedRef.current, options)

    // Clean up on unmount
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold text-white"
            ref={typedRef}
          >
            I am a Frontend Developer{' '}
          </h2>
          <p className=" text-gray-500 py-4 max-w-md">
            I have honed my skills for one year in software development and
            design, with a particular focus on creating web applications. My
            passion lies in leveraging technologies like React and Tailwind CSS
            to build intuitive and visually appealing interfaces.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Porfolio
              <span className="group-hover:rotate-90 duration-300">
                <GoArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="max-w-xs mx-auto rounded-2xl w-2/3 md:w-full"
            src={Hero}
            alt="My profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
