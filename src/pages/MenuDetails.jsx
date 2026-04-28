import { useParams } from "react-router-dom";
import menuData from "../data/menusData";
import { useEffect, useState } from "react";
import InnerBanner from "../component/InnerBanner";

// ✅ slug function
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

function MenuDetails() {
  const { category } = useParams();

  // ✅ find category
  const currentCategory = menuData.find(
    (item) => slugify(item.mainCategory) === category
  );

  const [activeTab, setActiveTab] = useState("");

  // ✅ handle default tab + scroll
  useEffect(() => {
    if (currentCategory) {
      setActiveTab(currentCategory.subCategories[0]?.subCategory);
    }

    // ✅ scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: "auto", // use "smooth" if you want animation
    });
  }, [currentCategory]);

  // ✅ fallback UI
  if (!currentCategory) {
    return (
      <div className="text-center py-20 text-white">
        Category not found
      </div>
    );
  }

  return (
    <>
      {/* 🔥 Banner */}
      <InnerBanner
        title={currentCategory.mainCategory}
        bgImage={currentCategory.image}
      />

      <section className="py-16 px-6 bg-gray-100">
        
        {/* 🔥 Tabs */}
        <div className="flex overflow-x-auto gap-4 mb-10 bg-white p-4 rounded-full no-scrollbar">
          {currentCategory.subCategories.map((sub, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(sub.subCategory)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
                activeTab === sub.subCategory
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
              }`}
            >
              {sub.subCategory}
            </button>
          ))}
        </div>

        {/* 🔥 Items */}
        <div className="grid md:grid-cols-2 gap-10">
          {currentCategory.subCategories
            .filter((sub) => sub.subCategory === activeTab)
            .map((sub, i) =>
              sub.items.map((item, index) => (
                <div
                  key={index}
                  className="border-b pb-6 flex justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-bold text-black">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>

                  <span className="bg-yellow-400 px-4 py-1 rounded-full font-bold whitespace-nowrap h-fit">
                    {item.price}
                  </span>
                </div>
              ))
            )}
        </div>

        {/* 🔥 Empty state (if no tab selected) */}
        {!activeTab && (
          <div className="text-center text-gray-500 mt-10">
            Select a category to view items
          </div>
        )}
      </section>
    </>
  );
}

export default MenuDetails;