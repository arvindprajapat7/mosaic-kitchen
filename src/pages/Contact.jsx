import { GrLocation } from "react-icons/gr";
import InnerBanner from "../component/InnerBanner";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt,FaRegClock} from "react-icons/fa";


function Contact() {
  return <>
    <InnerBanner title="Contact Us" bgImage="/images/contact-us-bg.webp"/>
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Reach Out To Us
          </h2>

          <p className="text-gray-600 mb-8">
            Have a question or planning a visit? Reach out and we’ll take care of the rest.
          </p>

          <div className="space-y-4">
            
            {/* Card */}
            <div className="flex items-center gap-4 bg-yellow-400 rounded-xl p-4">
              <div className="bg-white rounded-lg p-3 text-xl">
                <GrLocation className="  text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-2xl">Address</h4>
                <p className="text-sm text-black/70">
                  #104, 460 Trans-Canada Hwy, Duncan, BC V9L 3R6
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-yellow-400 rounded-xl p-4">
              <div className="bg-white rounded-lg p-3 text-xl">
                <FaPhoneAlt className=" text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-2xl">Call Us</h4>
                <p className="text-sm text-black/70">
                  +1-250-597-5033
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-yellow-400 rounded-xl p-4">
              <div className="bg-white rounded-lg p-3 text-xl">
                <MdOutlineEmail className=" text-2xl" />
              </div>
              <div>
                <h4 className="font-bold text-2xl">Email Address</h4>
                <p className="text-sm text-black/70">
                  support@mymosaickitchen.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-yellow-400 rounded-xl p-4">
              <div className="bg-white rounded-lg p-3 text-xl">
                <FaRegClock className="text-2xl"/>
              </div>
              <div>
                <h4 className="font-bold text-2xl">Opening Hours</h4>
                <p className="text-sm text-black/70">
                  Mon-Sun: 8AM - 9PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div>
          <form className="space-y-5">
            
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Jhone Signer"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Your Email</label>
              <input
                type="email"
                placeholder="Jhonesigner@gmail.com"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="+98565656565"
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write Your Message..."
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              ></textarea>
            </div>

            <button className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  </>;
}

export default Contact;