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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
          vitae atque eius, illum quisquam harum reprehen derit perferendis
          obcaecati totam dignissimos minima molestiae ullam iste nihil eligendi
          voluptate veniam quidem dolore aut sunt consequuntur! Illum, est
          itaque reprehenderit ab dolorem iusto reiciendis error dolores, in
          quisquam laborum molestiae et quas!
        </p>
        <br />
        <p className="text-xl" q fbvc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
          vitae atque eius, illum quisquam harum reprehenderit perferendis
          obcaecati totam dignissimos minima molestiae ullam iste nihil eligendi
          voluptate veniam quidem dolore aut sunt consequuntur! Illum, est
          itaque reprehenderit ab dolorem iusto reiciendis error dolores, in
          quisquam laborum molestiae et quas!
        </p>
      </div>
    </div>
  )
}

export default About
