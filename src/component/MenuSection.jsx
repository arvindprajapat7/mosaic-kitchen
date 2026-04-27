import MenuCard from "../component/MenuCard";
import menu from "../data/menusData";

function MenuSection() {
  return (
    <section className="relative py-16 px-6">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/menu-bg.webp')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.88)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Taste The Mosaic Menu
        </h2>

        <p className="text-gray-300 mb-10">
          From flavorful starters to mouth-watering mains and desserts.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {menu.map((item, index) => (
            <MenuCard
              key={index}
              title={item.mainCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;