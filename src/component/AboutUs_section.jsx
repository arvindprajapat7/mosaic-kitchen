import aboutImg from "/images/about-us.webp"; 
import leavesImg from "/images/leaves.png"; 

function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="bg-yellow-400 p-5 rounded-tl-[10px] rounded-tr-[10px] rounded-br-[90px] rounded-bl-[10px]">
            <img
              src={aboutImg}
              alt="Restaurant"
              className="w-full h-full object-cover rounded-tl-[10px] rounded-tr-[10px] rounded-br-[90px] rounded-bl-[10px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* Tag */}
          <span className="bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded">
            About Our Mosaic Kitchen & Bar
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-gray-900">
            Fresh & Delicious Food Just For You
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            Mosaic Kitchen & Bar in Duncan, BC, is more than just a place to eat — it is a family-run restaurant built on passion, experience, and togetherness. Every dish served here carries a story, and every flavor reflects a journey.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            The heart of Mosaic begins with the chef, whose love for food took him across different countries and continents. Along the way, he worked with diverse ingredients, traditions, and techniques, learning the soul of many cuisines.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
              Book a Table
            </button>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
              Read More
            </button>
          </div>

        </div>
      </div>
      <img
              src={leavesImg}
              alt="Restaurant"
              className="absolute bottom-0 right-0"
            />
    </section>
  );
}

export default AboutSection;