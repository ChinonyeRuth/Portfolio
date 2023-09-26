import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub, FaRegFilePdf } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About Me */}
        <div className="col-span-1">
          <h1 className="text-5xl font-signature">Chiinonye</h1>
          <p className="py-4">
            Crafting immersive web experiences with clean and elegant code.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/chinonye-ibeakanma-7a2169258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/chii.nonye?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="mailto:ibeakanmachinonye@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
            <a
              href="https://github.com/ChinonyeRuth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="/Ibeakanma_Chinonye_Ruth_Admission_Letter.PDF"
              download={true}
            >
              <FaRegFilePdf size={30} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="col-span-2 lg:col-span-2 flex space-x-6 mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Navigation</h6>
            <ul className="py-2">
              <li className="text-sm">Home</li>
              <li className="text-sm">Portfolio</li>
              <li className="text-sm">About</li>
              <li className="text-sm">Contact</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul className="py-2">
              <li className="text-sm">Privacy Policy</li>
              <li className="text-sm">Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
