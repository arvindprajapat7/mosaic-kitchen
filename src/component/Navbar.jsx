import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
          : "py-6"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-end">
        
        {/* Logo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <img
            src="/images/mosaic-logo.webp"
            alt="Mosaic Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "w-[120px]" : "w-[164px]"
            }`}
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-white font-medium absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-yellow-400 after:w-full"
                    : "hover:text-yellow-400 after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400 after:transition-all`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Button */}
        <button
          className={`bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center gap-2 ${
            isScrolled ? "scale-95" : ""
          }`}
        >
          Reserve Table
        </button>
      </div>
    </header>
  );
}

export default Navbar;