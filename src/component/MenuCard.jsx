import { useNavigate } from "react-router-dom";

// ✅ Slug function
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

function MenuCard({ title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${slugify(title)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative group border border-yellow-400 rounded-[30px] p-1 sm:p-4 cursor-pointer
      transition-all duration-300 ease-in-out
      hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]"
    >
      <div className="bg-yellow-400 rounded-[25px] p-2 sm:p-4 flex flex-col items-center text-center">
        
        {/* Image */}
        <div className="bg-white rounded-[20px] p-2 mb-4 w-full h-[100px] md:h-[180px] flex items-center justify-center overflow-hidden">
          <img
            src={image || "/images/placeholder.png"}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110  rounded-[20px]"
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-[12px] sm:text-lg text-black mb-3">
          {title}
        </h3>

        {/* Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 prevent double click bubbling
            handleClick();
          }}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition duration-300 group-hover:bg-black group-hover:text-white"
        >
          See More
        </button>
      </div>
    </div>
  );
}

export default MenuCard;