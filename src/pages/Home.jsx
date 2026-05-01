import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutSection from "../component/AboutUs_section";
import MenuSection from "../component/MenuSection";
import TestimonialSection from "../component/TestimonialSection";
import WhyChooseUs from "../component/WhyChooseUs";
import ContactUs from "../component/ContactUs";
import BottomBanner from "../component/BottomBanner";
import HeroSection from "../component/HeroSection";

function Hero() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "book-table") {
      setTimeout(() => {
        const element = document.getElementById("book-table");

        if (element) {
          const yOffset = -80; // adjust navbar height
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200); // wait for DOM render
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <BottomBanner />
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
      <WhyChooseUs />
      <div id="book-table">
      <ContactUs /></div>
    </>
  );
}

export default Hero;