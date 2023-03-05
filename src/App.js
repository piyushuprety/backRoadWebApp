import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Service } from './components/Service';
import { Tour } from './components/Tour';
import { Footer } from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tour />
      <Footer />
    </>
  );
}