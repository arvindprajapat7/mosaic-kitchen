function ContactFormSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6 relative overflow-hidden">
      
      {/* Yellow Circle (Top Right) */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-yellow-400 rounded-full translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Reach Out To Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Have a question or planning a visit? Reach out and we’ll take care of the rest.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#1a0f0f] rounded-[20px] p-6 md:p-10 shadow-xl">
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Full Name */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Full Name
              </label>
              <input 
                type="text"
                placeholder="Jhone Signer"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Your Email
              </label>
              <input 
                type="email"
                placeholder="Jhonesigner@gmail.com"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Phone Number
              </label>
              <input 
                type="text"
                placeholder="+98565656565"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* People */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                People
              </label>
              <input 
                type="number"
                placeholder="3"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Date */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Date
              </label>
              <input 
                type="date"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Time */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Time
              </label>
              <input 
                type="time"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-gray-300 text-sm mb-1 block">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write Your Message..."
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 ease-in-out"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] transition shadow-lg"
              >
                Reserve a Table
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;