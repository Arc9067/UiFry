import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Advantages from "./Components/Advantages";
import Testimonial from "./Components/testimonial";
import Faq from "./Components/Faq";
import Download from "./Components/Download";
import Footer from "./Components/Footer";
import { gsap } from "gsap";
import { useEffect } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from "split-type";

function App() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    let time = gsap.timeline().from(".header-li", {
      y: 100,
      x: 30,
      stagger: 0.2,
      ease: "linear",
    });

    return () => {
      time.kill();
    };
  }, []);
  return (
    <div className="pad min-h-screen w-full font-Clash">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
