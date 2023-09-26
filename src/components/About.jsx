import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {' '}
            About
          </p>
        </div>
        <p className="text-lg sm:text-xl mt-6 sm:mt-10">
          I'm a front-end developer passionate about creating exceptional user
          experiences with React.js and Tailwind CSS. My expertise lies in
          crafting dynamic and responsive web applications that blend
          functionality with stunning visuals. I stay up to date with the latest
          front-end trends to deliver cutting-edge solutions.
        </p>
        <br />
        <p className="text-lg sm:text-xl mt-6 sm:mt-8">
          I combine technical skills with a keen eye for design to create
          seamless and intuitive user experiences. I'm excited to push the
          boundaries of front-end development, embrace new challenges, and
          collaborate to shape the future of the web.
        </p>
      </div>
    </div>
  )
}

export default About
