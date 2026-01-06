import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import TechStack from "./components/tech";
import Projects from "./components/projects";
import Experience from "./components/exp";
import Contact from "./components/contect";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
