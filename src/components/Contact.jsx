import React from 'react'
import { useState } from 'react'
const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name.length < 6 || name.length > 20) {
      setErrorMessage('Name must be between 8 and 20 characters')
      return
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.match(emailRegex)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    // If the form data is valid, you can proceed with form submission
    // Submit form data to your server or external service
    console.log('Name:', name)
    console.log('Email:', email)

    // Reset form fields and error message
    setName('')
    setEmail('')
    setErrorMessage('')
  }

  return (
    <div
      name="contact"
      className=" w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="  text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://formspree.io/f/mgejerog"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleNameChange}
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            {/* Error message */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <textarea
              name="message"
              placeholder="Enter your Message "
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white  bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
