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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero_head = new SplitType(".hero-header", { types: "chars" });
    const hero_para = new SplitType(".hero-para", { types: " lines" });
    console.log(hero_head);

    gsap
      .timeline()
      .from("header", {
        scale: 0,
        opacity: 0,
        transformOrigin: "right",
      })
      .from(".logo", {
        opacity: 0,
        transformOrigin: "50% 50%",
      })
      .from(hero_head.chars, {
        x: 20,
        y: 40,
        opacity: 0,
        stagger: 0.1,
      })
      .from(hero_para.lines, {
        opacity: 0,
        stagger: 0.5,
        xPercent: -100,
        ease: "back",
        scale: 2,
      })
      .from(".hero-watch ", {
        opacity: 0,
        scale: 0.8,
        xPercent: -100,
        ease: "back",
      })
      .from(
        ".hero-cd",
        {
          opacity: 0,
          ease: "back",
          transformOrigin: "center",
          scrollTrigger: ".hero-cd",
          xPercent: 100,
        },
        3
      );
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
