import InnerBanner from "../component/InnerBanner";
import MenuCard from "../component/MenuCard";
import menuData from "../data/menusData";
function Menu() {
  return <>
    <InnerBanner title="Our Menu" bgImage="/images/about-inner-bg.png"/>
    <section className="relative py-16 px-6">
      
      {/* Background */}
     


      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        
      

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuData.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              image={item.image}
              onClick={() => console.log(item.title)}
            />
          ))}
        </div>
      </div>
    </section>
  </>;
}

export default Menu;