import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {' '}
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          As a front-end developer specializing in React.js and Tailwind CSS, I
          am driven by a deep passion for crafting exceptional user experiences.
          With my expertise in these technologies, I have spent significant time
          mastering the art of creating dynamic and responsive web applications.
          Through my journey, I have gained valuable experience in building
          elegant and intuitive user interfaces that seamlessly integrate
          functionality with stunning visuals. I am continuously expanding my
          knowledge and staying up to date with the latest trends in front-end
          development, allowing me to deliver cutting-edge solutions that exceed
          expectations.
        </p>
        <br />
        <p className="text-xl" q fbvc>
          By combining my technical skills with a keen eye for design, I strive
          to create seamless and intuitive experiences for users. I am excited
          to continue pushing the boundaries of front-end development, embracing
          new challenges and collaborating with like-minded individuals to shape
          the future of the web. Was this response better or worse? Better Worse
          Same
        </p>
      </div>
    </div>
  )
}

export default About
