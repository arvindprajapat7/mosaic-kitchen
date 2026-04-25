import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Background (fixed)
import bgImg from "../../public/images/hero-bg.webp";

// Slider images (right side)
import img1 from "../../public/images/mosaic-logo.webp";
import img2 from "../../public/images/mosaic-logo.webp";
import img3 from "../../public/images/mosaic-logo.webp";
import img4 from "../../public/images/mosaic-logo.webp";
import AboutSection from "../component/AboutUs_section";
import MenuSection from "../component/MenuSection";
import TestimonialSection from "../component/TestimonialSection";
import WhyChooseUs from "../component/WhyChooseUs";
import ContactUs from "../component/ContactUs";
import CircleCTA from "../component/CircleCTA";

const images = [img1, img2, img3, img4];

function Hero() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* FIXED BACKGROUND */}
        <div className="absolute inset-0">
          <img src={bgImg} className="w-full h-full object-cover" alt="" />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(99.16deg, #000000 2.67%, rgba(8, 8, 8, 0.9) 35.11%, rgba(13, 12, 12, 0.45) 99%)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[180px] pb-20 flex flex-col lg:flex-row items-center">
          {/* LEFT */}
          <div className="flex-1 text-white">
            <p className="max-w-[450px] mb-4">
              <span className="bg-yellow-400 text-black  inline text-xl font-semibold highlight-text leading-[30px] p-0">
                Discover a vibrant fusion of flavor and wellness at Mosaic
                Kitchen & Bar.
              </span>
            </p>
            <h1 className="text-[60px] md:text-[90px] xl:text-[150px] font-extrabold leading-none text-transparent stroke-text">
              MOSAIC
            </h1>

            <h2 className="text-3xl md:text-5xl xl:text-[94px] font-bold mb-4">
              Kitchen & Bar
            </h2>

            <p className="text-gray-300 max-w-lg mb-6">
              Our thoughtfully crafted menu brings you wholesome, mouthwatering
              dishes made with fresh ingredients.
            </p>

            <div className="flex gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
                Click Here to Order
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                Download Menu
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE (SLIDER) */}
          <div className="flex-1 relative mt-10 lg:mt-0 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={images[active]}
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="w-[280px] md:w-[380px] lg:w-[450px] object-cover rounded-[40%]"
              />
            </AnimatePresence>

            {/* ROTATING CIRCLE */}
            <div className="absolute top-[-70px] left-[-3%] md:left-[-3%]">
              <CircleCTA />
            </div>
          </div>
        </div>

        {/* THUMBNAILS */}
        <div className="absolute bottom-6 right-6 flex gap-3 z-20">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActive(i)}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                active === i ? "border-yellow-400" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </section>
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
}

export default Hero;
