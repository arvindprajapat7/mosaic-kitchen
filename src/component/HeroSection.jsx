import { useState, useEffect } from "react";
import CircleCTA from "../component/CircleCTA";
import bgImg from "../../public/images/hero-bg.webp";
import { useNavigate } from "react-router-dom";
import ReserveTableButton from "./ReserveTableButton";

// Thumbnail images
const thumbnails = [
  "/images/hero-thumbnail-1.png",
  "/images/hero-thumbnail-2.png",
  "/images/hero-thumbnail-3.png",
  "/images/hero-thumbnail-4.png",
];

// Main hero images (right side)
const heroImages = [
  "/images/hero-right-full-img-1.png",
  "/images/hero-right-full-img-2.png",
  "/images/hero-right-full-img-3.png",
  "/images/hero-right-full-img-4.png",
];

// Typing texts
const texts = [
  "Kitchen & Bar",
  "Fine Dining Experience",
  "Fresh & Healthy Meals",
  "Crafted With Passion",
];

function HeroSection() {
  const [active, setActive] = useState(0);
const navigate = useNavigate();
  // Typing states
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }

      // typing complete
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      // deleting complete
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img src={bgImg} className="w-full h-full object-cover" alt="" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(99.16deg, #000000 2.67%, rgba(8, 8, 8, 0.9) 35.11%, rgba(13, 12, 12, 0.45) 99%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full mx-auto px-6 pt-[180px] pb-10 md:pb-20 flex flex-col lg:flex-row items-center">
        
        {/* LEFT */}
        <div className="flex-1 lg:flex-[1.3] text-white">
          <p className="max-w-[450px] mb-4">
            <span className="bg-yellow-400 text-black inline text-xl font-semibold leading-[30px] p-0">
              Discover a vibrant fusion of flavor and wellness at Mosaic
              Kitchen & Bar.
            </span>
          </p>

          <h1 className="text-[60px] md:text-[90px] xl:text-[150px] font-extrabold leading-none text-transparent stroke-text">
            MOSAIC
          </h1>

          {/* ✅ Typing Heading */}
          <h2 className="text-3xl md:text-5xl xl:text-[84px] font-bold mb-4">
            {displayText}
            <span className="ml-1 border-r-2 border-white animate-blink"></span>
          </h2>

          <p className="text-gray-300 max-w-xg mb-6 font-semibold">
            Our thoughtfully crafted menu brings you wholesome, mouthwatering
            dishes made with fresh ingredients.
          </p>

          <div className="sm:flex gap-4">
        
             <ReserveTableButton/>
          
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden flex-1 lg:flex-[0.7]  relative mt-10 lg:mt-0 md:flex justify-center">
          <div className="hidden lg:block absolute top-[-300px] left-[-50%]">
            <CircleCTA />
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden lg:block absolute right-[-210px] top-[-90px]">
        <img
          key={active}
          src={heroImages[active]}
          alt=""
          width="680px"
          className="animate-heroImage"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="hidden lg:flex absolute bottom-6 right-6 gap-3 z-20">
        {thumbnails.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
              active === i ? "border-yellow-400 scale-110" : "border-transparent"
            }`}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;