import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the waitlist! We'll notify you when we launch.");
      setEmail("");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-white to-teal-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="flex flex-col items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-[#0e7575]">Your Health, Connected.</span>
              <br />
              <span className="text-gray-900">Your Records, in Your Hands.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              SASRec makes it easy for every patient to access, manage, and share their medical information — securely, anytime, anywhere.
            </p>

            {/* Waitlist Form */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleWaitlistSubmit}
              className="max-w-md mx-auto pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0e7575] focus:border-transparent transition-shadow text-base"
                />
                <button
                  type="submit"
                  className="bg-[#0e7575] hover:bg-[#0d6868] text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-teal-500/30 whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Be the first to know when we launch</p>
            </motion.form>

            <button 
              onClick={() => scrollToSection('features')}
              className="text-[#0e7575] hover:text-[#0d6868] font-medium transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent z-10 pointer-events-none" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwZGlnaXRhbCUyMGhlYWx0aCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNzcxMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Patient viewing secure health data on digital interface"
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}