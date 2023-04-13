import { useEffect } from "react";
import Aos from "aos";
// import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Service from "./Components/UI/Service";
import "./App.css";
import Portfolio from "./Components/UI/Portfolio";
import Contact from "./Components/UI/Contact";
import Header1 from "./Components/Header1/Header1";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header1 />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
// 1.16.52
