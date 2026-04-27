import { useParams } from "react-router-dom";
import menuData from "../data/menusData";
import { useEffect, useState } from "react";
import InnerBanner from "../component/InnerBanner";

// ✅ reusable slug function
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

function MenuDetails() {
  const { category } = useParams();

  // ✅ Find category safely
  const currentCategory = menuData.find(
    (item) => slugify(item.mainCategory) === category
  );

  // ✅ state
  const [activeTab, setActiveTab] = useState("");

  // ✅ set default tab AFTER data is available
  useEffect(() => {
    if (currentCategory) {
      setActiveTab(currentCategory.subCategories[0]?.subCategory);
    }
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
      <InnerBanner
        title={currentCategory.mainCategory}
        bgImage="/images/about-inner-bg.png"
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
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>

                  <span className="bg-yellow-400 px-4 py-1 rounded-full font-bold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))
            )}
        </div>
      </section>
    </>
  );
}

export default MenuDetails;