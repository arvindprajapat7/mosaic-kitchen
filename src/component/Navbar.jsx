

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
  <div className="relative max-w-7xl mx-auto px-6 py-6 flex items-center justify-end">
    
    <div className="absolute left-6 top-1/2 -translate-y-1/4">
      <img
        src="./images/mosaic-logo.webp"
        alt="Mosaic Logo"
        className="w-[164px]"
      />
    </div>

    <nav className="hidden md:flex items-center gap-10 text-white font-medium absolute left-1/2 -translate-x-1/2">
      <a href="/" className="text-yellow-400">Home</a>
      <a href="/menu" className="hover:text-yellow-400 transition">
        Menu
      </a>
      <a href="/about" className="hover:text-yellow-400 transition">
        About Us
      </a>
      <a href="/contact" className="hover:text-yellow-400 transition">
        Contact Us
      </a>
    </nav>

    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
      Reserve Table
    </button>

  </div>
</header>
  );
}

export default Navbar;