import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



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

import BottomBanner from "../component/BottomBanner";
import HeroSection from "../component/HeroSection";

const images = [img1, img2, img3, img4];

function Hero() {
 

  return (
    <>
      <HeroSection/>
      <BottomBanner/>
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
}

export default Hero;
