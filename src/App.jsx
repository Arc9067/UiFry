import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Advantages from "./Components/Advantages";
import Testimonial from "./Components/testimonial";
import Faq from "./Components/Faq";
import Download from "./Components/Download";

function App() {
  return (
    <div className="pad min-h-screen w-full font-Clash">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Download />
    </div>
  );
}

export default App;
