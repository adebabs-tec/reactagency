import { Footer } from 'flowbite-react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { TextInput } from 'flowbite-react'
import { LuSend } from 'react-icons/lu'

const MyFooter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralBlack text-white py-16">
      <Footer container className="bg-neutralBlack">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="space-y-4 mb-8">
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-1 mb-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="30"
                  viewBox="0 0 44 30"
                  fill="none"
                >
                  <path
                    d="M23.2259 16.2379L16.561 27.6527L9.89611 16.2379H23.2259ZM25.0114 15.2177H8.10339L16.561 29.6717L25.0114 15.2177Z"
                    fill="white"
                  />
                  <path
                    d="M34.8137 2.0404L41.4786 13.4552H28.1488L34.8137 2.0404ZM34.8137 0L26.3561 14.454H43.2713L34.8137 0Z"
                    fill="white"
                  />
                  <path
                    d="M0 0L7.09143 12.7846L14.8406 0.321025L0 0Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M16.5612 1.11987L23.9997 13.8332H9.1084L16.5612 1.11987Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M25.9152 16.6089L33.3608 29.6718H18.1154L25.6838 16.6089H25.9152Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M27.5271 15.8169L34.8137 28.68L42.2014 15.8169H27.5271Z"
                    fill="#4CAF4F"
                  />
                </svg>
                <span className="text-white">Nexcent</span>
              </a>
              <div>
                <p className="mb-1 text-sm text-neutralSilver">
                  Copyright © 2020 Nexcent ltd.
                </p>
                <p className="text-sm text-neutralSilver">
                  All rights reserved
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title
                  title="Company"
                  className="text-white normal-case font-semibold text-md"
                />
                <Footer.LinkGroup col className="text-neutralSilver text-sm">
                  <Footer.Link href="#About">About Us</Footer.Link>
                  <Footer.Link href="#FAQ">Blog</Footer.Link>
                  <Footer.Link href="#Newsletter">Contact Us</Footer.Link>
                  <Footer.Link href="#Product">Pricing</Footer.Link>
                  <Footer.Link href="#Testimonial">Testimonial</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Support"
                  className="text-white normal-case font-semibold text-md"
                />
                <Footer.LinkGroup col className="text-neutralSilver text-sm">
                  <Footer.Link href="#">Help Center</Footer.Link>
                  <Footer.Link href="#">Terms of Service</Footer.Link>
                  <Footer.Link href="#">Legal</Footer.Link>
                  <Footer.Link href="#">Privacy policy</Footer.Link>
                  <Footer.Link href="#">Status</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Stay up to date"
                  className="text-white normal-case font-semibold text-md"
                />
                <div className="max-w-md">
                  <TextInput
                    id="email4"
                    type="email"
                    rightIcon={LuSend}
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default MyFooter
