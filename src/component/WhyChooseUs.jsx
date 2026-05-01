import ReserveTableButton from "./ReserveTableButton";

function WhyChooseUs() {
  return (
    <section className="relative py-20 px-6">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/why-choose-us-bg.webp')" }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.85)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose Mosaic
            </h2>

            <p className="text-gray-300 max-w-xl">
              From flavorful starters to mouth-watering mains and desserts, explore the best of Mosaic.
            </p>
          </div>

          {/* Button */}
          <ReserveTableButton/>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-black rounded-[30px] p-8 text-center border-[6px] border-yellow-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-2 transition duration-300">
            
            <div className="mb-6 flex justify-center">
              <img src="/images/icons/fresh-locally-sourced-ingredients.png" alt="" className="w-20 h-20" />
            </div>

            <h3 className="text-lg font-bold mb-3">
              Fresh, Locally-Sourced Ingredients
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              We work with local farmers and suppliers to bring the freshest, highest-quality ingredients to your plate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-[30px] p-8 text-center border-[6px] border-yellow-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-2 transition duration-300">
            
            <div className="mb-6 flex justify-center">
              <img src="/images/icons/health-conscious-flavor-forward.png" alt="" className="w-20 h-20" />
            </div>

            <h3 className="text-lg font-bold mb-3">
              Health-Conscious, Flavor-Forward
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              From plant-based options to lean proteins, our menu is crafted to nourish your body.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-[30px] p-8 text-center border-[6px] border-yellow-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-2 transition duration-300">
            
            <div className="mb-6 flex justify-center">
              <img src="/images/icons/community-focused-dining.png" alt="" className="w-20 h-20" />
            </div>

            <h3 className="text-lg font-bold mb-3">
              Community-Focused Dining
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              We’re more than just a restaurant—we’re a hub for good food, good vibes, and great conversations.
            </p>
          </div>

        </div>
        <div className="text-center mt-5">
         <button className="md:hidden mt-4 md:mt-0 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Book a Table
          </button></div>
      </div>
    </section>
  );
}

export default WhyChooseUs;