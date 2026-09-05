import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import urflo from "./assets/urflo.png";
import vendorMap from "./assets/vendormap.png";
import decideToLive from "./assets/decidetolive.png";
import sproutJourmind from "./assets/sprout.png";
import notAvailable from "./assets/notavailable.png";
import incomePredictor from "./assets/incomepredictor.png";
import softwareTesting from "./assets/softwaretesting.mp4";
import stockPredictor from "./assets/stockpredictor.mp4";
import celebLookalike from "./assets/celeblookalike.gif";
import noAdvice from "./assets/noadvice.png";

function App() {
  const projectImages = {
    urflo,
    vendorMap,
    decideToLive,
    sproutJourmind,
    notAvailable,
    incomePredictor,
    celebLookalike,
    noAdvice,
  };

  const projectVideos = {
    softwareTesting,
    stockPredictor,
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <Navbar />
      <Hero />

      <Projects
        images={projectImages}
        videos={projectVideos}
      />

      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
