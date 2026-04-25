import { useEffect, useState } from "react";
import img1 from "../../public/images/mosaic-logo.webp";
import img2 from "../../public/images/mosaic-logo.webp";
import img3 from "../../public/images/mosaic-logo.webp";
import img4 from "../../public/images/mosaic-logo.webp";
const images = [
  "/images/mosaic-logo.webp",
  "/images/mosaic-logo.webp",
  "/images/mosaic-logo.webp",
  "/images/mosaic-logo.webp",
];

function HeroSection() {
  const [active, setActive] = useState(0);

  // 🔁 Auto change every 10 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          
          {/* Tagline */}
          <div className="inline-block bg-yellow-400 text-black px-3 py-2 mb-4 font-semibold">
            Discover a vibrant fusion of flavor and wellness 
            at Mosaic Kitchen & Bar.
          </div>

          {/* Title */}
          <h1 className="text-[70px] md:text-[100px] font-extrabold leading-none">
            <span className="text-transparent stroke-text">MOSAIC</span>
            <br />
            <span className="text-white text-[40px] md:text-[60px]">
              Kitchen & Bar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mt-4 max-w-xl">
            Our thoughtfully crafted menu brings you wholesome, mouthwatering dishes made with fresh, quality ingredients. Whether you're dining in or grabbing a quick bite, enjoy food that feels as good as it tastes.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              🍽 Click Here to Order
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              ⬇ Download Menu
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          
          {/* Blob Shape */}
          <div className="relative w-[350px] h-[450px]">
            
            <img
              src={images[active]}
              className="w-full h-full object-cover 
              rounded-[60%_40%_55%_45%/55%_60%_40%_45%]"
            />

            {/* White Border */}
            <div className="absolute inset-0 border-[8px] border-white 
            rounded-[60%_40%_55%_45%/55%_60%_40%_45%] pointer-events-none"></div>
          </div>

          {/* 🔥 Rotating Circle */}
          <div className="absolute top-10 left-0 w-[120px] h-[120px] flex items-center justify-center">
            
            <div className="absolute w-full h-full rounded-full border border-yellow-400 animate-spin-slow"></div>

            <div className="bg-yellow-400 text-black w-[70px] h-[70px] rounded-full flex items-center justify-center font-bold text-center text-sm">
              CLICK HERE
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-10 right-10 flex gap-3">
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

      {/* Bottom Bar */}
      <div className="absolute bottom-0 w-full bg-yellow-400 text-black text-center py-2 text-sm font-medium">
        🚴 Get Free Delivery On Orders Above **$40** Within **4 Km**
      </div>
    </section>
  );
}

export default HeroSection;