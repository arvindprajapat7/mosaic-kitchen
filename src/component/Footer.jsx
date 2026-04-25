import { motion } from "framer-motion";
import galleryImages from "../data/galleryImages";

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
                <p>📍 #104, 460 Trans-Canada Hwy, Duncan, BC</p>
                <p>✉ support@mymosaickitchen.com</p>
                <p>📞 +1-250-597-5033</p>
              </div>
            </div>

            {/* CENTER */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Links</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="hover:text-yellow-400 cursor-pointer">Home</li>
                <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
                <li className="hover:text-yellow-400 cursor-pointer">Our Menus</li>
                <li className="hover:text-yellow-400 cursor-pointer">Our Special</li>
                <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=duncan%20bc&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-40 border-0"
                  loading="lazy"
                ></iframe>
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

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-yellow-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-yellow-400 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-yellow-400 cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;