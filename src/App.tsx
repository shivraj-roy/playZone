import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";

function App() {
   return (
      <main className="relative min-h-screen overflow-hidden w-screen">
         <Navbar />
         <Hero />
         <About />
         <Features />
         <Story />
      </main>
   );
}

export default App;
