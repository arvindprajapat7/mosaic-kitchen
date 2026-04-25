import { Routes, Route } from "react-router-dom";



// import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar/>      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;