import { Carousel } from 'flowbite-react'
import banner1 from '../assets/Illustration.png'

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text  */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 font-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
                <span className="text-brandPrimary leading-snug">
                  {' '}
                  from 8 years
                </span>
              </h1>
              <p className="neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 px-7 text-white rounded bg-brandPrimary hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* hero text  */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 font-neutralDGrey md:w-3/4 leading-snug">
                Learn and Earn Money
                <span className="text-brandPrimary leading-snug">
                  {' '}
                  in 4 months
                </span>
              </h1>
              <p className="neutralGrey text-base mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="py-2 px-7 text-white rounded bg-brandPrimary hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
