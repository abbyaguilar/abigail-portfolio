import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import vendorMap from "./assets/vendormap.png";
import decideToLive from "./assets/decidetolive.png";
import sproutJourmind from "./assets/sprout.png";

function App() {
  const projectImages = {
    vendorMap,
    decideToLive,
    sproutJourmind,
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <Navbar />

      <Hero />

      <Projects images={projectImages} />

      <About />

      <TechStack />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;