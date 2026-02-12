import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { AboutUs } from "./components/AboutUs";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}