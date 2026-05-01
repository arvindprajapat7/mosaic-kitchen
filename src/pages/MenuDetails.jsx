import { useParams } from "react-router-dom";
import menuData from "../data/menusData";
import { useEffect, useState } from "react";
import InnerBanner from "../component/InnerBanner";
import { Info } from "lucide-react";

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

function MenuDetails() {
  const { category } = useParams();

  const currentCategory = menuData.find(
    (item) => slugify(item.mainCategory) === category
  );

  const [activeTab, setActiveTab] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    if (currentCategory) {
      setActiveTab(currentCategory.subCategories[0]?.subCategory);
    }
    window.scrollTo({ top: 0 });
  }, [currentCategory]);

  if (!currentCategory) {
    return (
      <div className="text-center py-20 text-white">
        Category not found
      </div>
    );
  }

  return (
    <>
      <InnerBanner
        title={currentCategory.mainCategory}
        bgImage={currentCategory.image}
      />

      <section className="px-4 md:px-6 py-10 bg-gray-100">

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-8 bg-yellow-400 p-3 rounded-lg no-scrollbar">
          {currentCategory.subCategories.map((sub, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(sub.subCategory)}
              className={`px-4 py-2 rounded font-medium whitespace-nowrap transition ${
                activeTab === sub.subCategory
                  ? "bg-white text-black"
                  : " text-gray-700"
              }`}
            >
              {sub.subCategory}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.subCategories
            .filter((sub) => sub.subCategory === activeTab)
            .map((sub, i) =>
              sub.items.map((item, index) => {
                const id = `${i}-${index}`;

                return (
                  <div
                    key={id}
                    className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition relative"
                  >
                    <div className="flex justify-between items-start gap-3">

                      {/* LEFT */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-black">
                          {item.name}
                        </h3>

                        {/* Meal Type */}
                        {item.type && (
                          <span
                            className={`text-xs font-semibold px-2 py-1 rounded mt-1 inline-block ${
                              item.type === "veg"
                                ? "bg-green-100 text-green-700"
                                : item.type === "non-veg"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {item.type}
                          </span>
                        )}

                        {/* Short Description */}
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* RIGHT */}
                      <div className="flex flex-col items-end gap-2 relative">
                        
                        {/* Price */}
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                          {item.price}
                        </span>

                        {/* Info Icon */}
                        <div
                          className="relative"
                          onMouseEnter={() => setHoverIndex(id)}
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          <Info size={18} className="cursor-pointer text-gray-500 hover:text-black" />

                          {/* Tooltip */}
                          {hoverIndex === id && (
                            <div className="absolute right-0 top-6 w-64 bg-black text-white text-xs p-3 rounded-lg shadow-lg z-50">
                              {item.description}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
        </div>
      </section>
    </>
  );
}

export default MenuDetails;