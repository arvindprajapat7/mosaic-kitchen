import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "py-4"
      }`}
    >
      <div className="relative w-full mx-auto px-6 flex items-center justify-between md:justify-end">
        {/* ✅ Logo (left always) */}
        <div className="md:absolute md:left-6 md:top-12 md:-translate-y-1/2">
          <img
            src="/images/mosaic-logo.webp"
            alt="Mosaic Logo"
            className={`transition-all duration-300 ${
              isScrolled ? "w-[100px]" : "w-[130px]"
            }`}
          />
        </div>

        {/* ✅ Desktop Nav */}
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

        {/* ✅ Right side */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <button  onClick={() => window.open("/mosaic-menu.pdf", "_blank")} className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
            Download Menu
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔥 Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[400px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-6 space-y-6 text-center text-white">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-400 text-lg"
                  : "block text-lg hover:text-yellow-400"
              }
            >
              {item.name}
            </NavLink>
          ))}

         
        </div>
      </div>
    </header>
  );
}

export default Navbar;
