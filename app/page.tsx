import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import BeforeAfter from "./components/BeforeAfter";
import HowItWorks from "./components/HowItWorks";
import Proof from "./components/Proof";
import ProofCarousel from "./components/ProofCarousel";
import Dashboard from "./components/Dashboard";
import Scope from "./components/Scope";
import Book from "./components/Book";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510]">
      <ScrollReveal/>
      <Navbar/><Hero/><Problem/><BeforeAfter/><HowItWorks/><Proof/><ProofCarousel/><Dashboard/><Scope/><Book/><Footer/>
    </main>
  );
}
