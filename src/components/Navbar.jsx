import { useEffect, useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import logo from '../assets/Icon.png'

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
      <nav>
        <div>
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
        </div>
      </nav>
    </header>
  )
}

export default Navbar
