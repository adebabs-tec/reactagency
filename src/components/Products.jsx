import AboutImg from '../assets/pana.png'

const Products = () => {
  return (
    <div>
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <img src={AboutImg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            How to design your site footer like we did
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="py-2 px-7 text-white rounded bg-brandPrimary hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
