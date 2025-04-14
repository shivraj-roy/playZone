import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";

function App() {
   return (
      <main className="relative min-h-screen overflow-hidden w-screen">
         <Navbar />
         <Hero />
         <About />
         <Features />
      </main>
   );
}

export default App;
