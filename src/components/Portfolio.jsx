import React from 'react'
import dataFinance from '../assets/portfolio/Capture.JPG'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/arrayDestruct.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: dataFinance,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/ChinonyeRuth/Data-Finance-Website',
    },
    {
      id: 2,
      src: installNode,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/example/data-finance',
    },
    {
      id: 3,
      src: navbar,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/example/data-finance',
    },
    {
      id: 4,
      src: reactParallax,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/example/data-finance',
    },
    {
      id: 5,
      src: reactSmooth,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/example/data-finance',
    },
    {
      id: 6,
      src: reactWeather,
      demoLink: 'https://data-finance-website-eight.vercel.app/',
      codeLink: 'https://github.com/example/data-finance',
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div>
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4d duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <button className="w-1/2 px-6 py-3 m-4d duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
