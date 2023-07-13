import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black  mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="mx-auto">
        <h1 className="text-5xl font-signature ml-2"> Chiinonye</h1>
        <p className="py-4">
          Crafting immersive web experiences with clean and elegant code.
        </p>

        <div className="flex justify-between md:w-[75%] my-6">
          <a
            href="https://www.linkedin.com/in/chinonye-ibeakanma-7a2169258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>{' '}
          <a
            href="https://instagram.com/chii.nonye?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>{' '}
          <a
            href="mailto:ibeakanmachinonye@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail size={30} />
          </a>{' '}
          <a
            href="https://github.com/ChinonyeRuth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>{' '}
          <a
            href="/Ibeakanma_Chinonye_Ruth_Admission_Letter.PDF"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
          >
            <BsFillPersonLinesFill size={30} />
          </a>{' '}
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400"> Terms and Conditions</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Cookie Policy </li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        {/* <div>
          <h6 className="font-medium text-gray-400">Suppoort</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentations</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company </h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal </h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div> */}
        <div className=" bg-gray-800 py-8 px-4 w-full">
          <h3 className="text-white text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex items-center">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className=" w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="ml-4 px-4 py-2 bg-gradient-to-b from-cyan-500 to-blue-500  text-white rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
