import InnerBanner from "../component/InnerBanner";
import MenuSection from "../component/MenuSection";
import ContactUs from "../component/ContactUs";
import OffersSection from "../component/OfferSection";
import aboutImg from "/images/about-us.webp"; 

function About() {
  return (
    <>
      <InnerBanner title="About Us" bgImage="/images/about-inner-bg.png" />
      <section className="bg-[#f5f5f5] py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            The Story of Mosaic Kitchen & Bar
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={aboutImg}
                alt="restaurant"
                className="w-full rounded-[20px] object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-gray-600 text-sm leading-relaxed space-y-4">
              <p>Mosaic Kitchen & Bar in Duncan, BC, is more than just a place to eat — it is a family-run restaurant built on passion, experience, and togetherness. Every dish served here carries a story, and every flavor reflects a journey.<br/>
                
                The heart of Mosaic begins with the chef, whose love for food took him across different countries and continents. Along the way, he worked with diverse ingredients, traditions, and techniques, learning the soul of many cuisines. From the bold spices of Indian cooking, to the vibrant and comforting flavors of Mexican food, and the familiar, hearty dishes of North American cuisine, each experience shaped his culinary vision.
            </p>

            <p>
One day, the chef realized something special. Instead of keeping these cuisines separate, why not bring them together? Why not create one menu, in one place, under one roof, where cultures could meet on a single plate?
As the menu came together, it became clear that the food was colorful, creative, and full of contrast — yet perfectly balanced. It was fusion, but more than that, it was a reflection of life itself: different pieces forming one beautiful whole.
That is how the name “Mosaic” was born.
</p>
<p>
Just like a mosaic artwork is made from many small pieces to create one meaningful image, Mosaic Kitchen & Bar brings together Indian, Mexican, and North American cuisines to create something unique and unforgettable. Each dish is a piece of the story, and together they form a vibrant culinary picture.
</p>
<p>
As a family-run restaurant, Mosaic is built on warmth, care, and community. Guests are welcomed not just as customers, but as part of the family — invited to experience flavors from around the world, all in one place.
At Mosaic Kitchen & Bar, every meal is a celebration of culture, creativity, and connection.</p>
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-5">
            <img src="./images/mosaic-logo.webp" alt="Mosaic Logo" className="w-[164px]"  />
          </div>
      </section>
      <OffersSection />
      <MenuSection />
      <ContactUs />
    </>
  );
}

export default About;
