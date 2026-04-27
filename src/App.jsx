import { Routes, Route } from "react-router-dom";



// import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import MenuDetails from "./pages/menuDetails";
import PrivacyPolicy from "./pages/Privacy";
import TermsConditions from "./pages/TermsCondtions";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <>
    <Navbar/>      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/menu/:category" element={<MenuDetails />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
<Route path="/disclaimer" element={<Disclaimer />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;