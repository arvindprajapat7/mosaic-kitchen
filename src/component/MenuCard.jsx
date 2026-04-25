function MenuCard({ title, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative group border border-yellow-400 rounded-[30px] p-4 cursor-pointer
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
    >
      {/* Card */}
      <div className="bg-yellow-400 rounded-[25px] p-4 flex flex-col items-center text-center">
        
        {/* Image */}
        <div className="bg-white rounded-[20px] p-4 mb-4 w-full flex justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-24 h-24 object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-white mb-3">
          {title}
        </h3>

        {/* Button */}
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition duration-300 group-hover:bg-black group-hover:text-white">
          Order Now →
        </button>
      </div>
    </div>
  );
}

export default MenuCard;