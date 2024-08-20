import { useEffect } from "react";
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import Products from "./Components/Products/Products"
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./Components/TopProducts/TopProduct";
import Banner from "./Components/Banner/Banner";
import Subscribe from "./Components/subscribe/Subcribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="">
      <NavBar/>
      <Hero/>
      <Products/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
