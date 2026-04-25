const offers = [
  {
    id: 1,
    title: "Happy Hour Delight",
    desc: "Unwind with refreshing drinks and tasty bites at special prices.",
    price: "$99",
    image: "/images/happy-hour-delight.png",
  },
  {
    id: 2,
    title: "Family Feast Combo",
    desc: "A perfect meal deal designed to bring everyone together.",
    price: "$59",
    image: "/images/family-feast-combo.png",
  },
  {
    id: 3,
    title: "Weekend Special Treat",
    desc: "Make your weekends sweeter with a complimentary dessert.",
    price: "$79",
    image: "/images/weekend-special-treat.png",
  },
];

function OffersSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Mosaic Special Offers
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {offers.map((item) => (
            <div key={item.id} className="bg-white rounded-[15px] overflow-hidden shadow-sm">
              
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                {/* Price Badge */}
                <span className="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded">
                  {item.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default OffersSection;