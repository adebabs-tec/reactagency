import { useEffect, useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import logo from '../assets/Icon.png'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  //set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  })

  // set nav items
  const navItems = [
    { link: 'Home', path: 'Home' },
    { link: 'Service', path: 'Service' },
    { link: 'About', path: 'About' },
    { link: 'Product', path: 'Product' },
    { link: 'Testimonial', path: 'Testimonial' },
    { link: 'FAQ', path: 'FAQ' },
  ]
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-o right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border bg-white duration-300'
            : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-1"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 imline-block items-center"
            />
            <span className="text-[#263238]">NEXCENT</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item) => (
              <Link
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                key={item.path}
                className="block text-base text-gray900 hover:text-brandPrimary first::font-medium"
              >
                {item.link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices  */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href=""
              className="hidden lg:flex items-center text-brandPrimary hover:gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus::outline-none focus::text-gray-500 text-neutralGrey"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices  */}
        <div
          className={`space-y-4 mt-16 px-4 py-7 bg-brandPrimary ${
            isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'
          }`}
        >
          {navItems.map((item) => (
            <Link
              to={item.path}
              spy={true}
              smooth={true}
              offset={-100}
              key={item.path}
              className="block text-base text-gray900 hover:text-brandPrimary text-white first::font-medium"
            >
              {item.link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
