import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      img: '/src/assets/blog1.png',
    },
    {
      id: 2,
      title:
        'What are your safeguarding responsibilities and how can you manage them?',
      img: '/src/assets/blog2.png',
    },
    {
      id: 3,
      title: 'Revamping the Membership Model with Triathlon Australia',
      img: '/src/assets/blog3.png',
    },
  ]
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="FAQ">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who is joining the community, read
          about how our community are increasing their membership income and
          lots more.
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
        className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="relative mx-auto cursor-pointer mb-12">
            <img
              src={blog.img}
              alt=""
              className="hover:scale-95 duration-300 transition-all"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h2 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h2>
              <div className="flex items-center justify-center gap-8">
                <a
                  href=""
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                  Readmore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                    className="inline-block ml-2"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Blog
