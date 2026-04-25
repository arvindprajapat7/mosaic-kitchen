import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonials from "../data/testimonialData";

function TestimonialSection() {
  const [active, setActive] = useState(0);

  // 👉 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 font-semibold">
            TESTIMONIALS & REVIEWS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Loved By Our Customers
          </h2>

          {/* 🔥 Smooth Slider */}
          <div className="relative max-w-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="border-2 border-yellow-400 rounded-[25px] p-6 bg-white"
              >
                <p className="text-gray-600 mb-6 leading-relaxed">
                  “{testimonials[active].text}”
                </p>

                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-lg">
                    {testimonials[active].name}
                  </h4>

                 <img
  src={testimonials[active].avatar}
  className="w-10 h-10 rounded-full object-cover border-[5px] border-[#D9D9D9]"
  alt=""
/>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS */}
          <div className="flex gap-3 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  active === i ? "bg-yellow-400 scale-110" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (same as before) */}
         <div className="max-w-[500px] w-full mx-auto">
       <div className="grid grid-cols-2 gap-[38px] justify-center">
  
          <img
            src="/images/testimonial-fea-1.webp"
            className="w-[230px] h-[230px] rounded-[10px] object-cover"
          />

          <img
            src="/images/testimonial-fea-2.webp"
            className="w-[230px] h-[230px] rounded-[10px] object-cover"
          />

          <img
            src="/images/testimonial-fea-3.webp"
            className="w-[230px] h-[230px] rounded-[10px] object-cover"
          />

          <img
            src="/images/testimonial-fea-4.webp"
            className="w-[230px] h-[230px] rounded-[10px] object-cover"
          />

        </div></div>

      </div>
    </section>
  );
}

export default TestimonialSection;