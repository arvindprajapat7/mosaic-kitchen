import { motion } from "framer-motion";
import galleryImages from "../data/galleryImages";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaRegClock, FaInstagram, FaFacebookF  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* 🔥 Gallery Slider */}
      <div className="overflow-hidden py-2">
        <motion.div
          className="flex gap-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-28 w-40 object-cover rounded-md flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Footer Content */}
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/90"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
            {/* LEFT */}
            <div>
              <img
                src="/images/mosaic-logo.webp"
                alt="logo"
                className="w-32 mb-6"
              />

              <div className="space-y-4 text-gray-300 text-sm">
                <p className="flex items-center gap-3">
                  <GrLocation className="text-yellow-400 text-lg" />
                  #104, 460 TRANS-CANADA HWY, DUNCAN, BC V9L 3R6
                </p>

               <p className="flex items-center gap-3">
                <MdOutlineEmail className="text-yellow-400 text-lg" />
                <a
                  href="mailto:support@mymosaickitchen.com"
                  className="hover:text-yellow-400"
                >
                  support@mymosaickitchen.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400 text-lg" />
                <a
                  href="tel:+12505975033"
                  className="hover:text-yellow-400"
                >
                  +1-250-597-5033
                </a>
              </p>
              <p className="flex items-center gap-3">
                  <FaRegClock  className="text-yellow-400 text-lg" />
                  Mon-Sun: 8AM - 9PM
                </p>
              </div>
            </div>

            {/* CENTER */}
            <div className=" md:text-center">
              <h3 className="text-lg font-semibold mb-4">Our Links</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>
                  <Link to="/" className="hover:text-yellow-400">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="/menu" className="hover:text-yellow-400">
                    Our Menus
                  </Link>
                </li>


                <li>
                  <Link to="/contact" className="hover:text-yellow-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="rounded-xl overflow-hidden">
                

              <iframe
  className="w-full h-40 border-0"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.5467795769846!2d-123.700983!3d48.7798414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f4f0dc0875a0f%3A0x8a0fbdcab7fcaa57!2sMosaic%20Kitchen%20And%20Bar%20Ltd!5e0!3m2!1sen!2sca!4v1719744367890!5m2!1sen!2sca"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            © Copyright Mosaic Kitchen & Bar All Rights Reserved | Designed by{" "}
            <span className="text-yellow-400">Mosaic Kitchen & Bar</span>
          </p>
             <div className="flex gap-4">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mosaickitchen_bar"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-yellow-400 hover:text-black transition"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/people/Mosaic-kitchen-and-bar/61576779543105/#"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-yellow-400 hover:text-black transition"
      >
        <FaFacebookF />
      </a>

    </div>
          {/* <div className="flex gap-4 mt-2 md:mt-0">
          
            <Link
              to="/privacy-policy"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition"
              }
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition"
              }
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400"
                  : "hover:text-yellow-400 transition"
              }
            >
              Disclaimer
            </Link>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
