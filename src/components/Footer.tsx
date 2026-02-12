import svgPaths from "../imports/svg-xoa3aa5535";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[129.219px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.219 32">
        <g id="logo">
          <path d={svgPaths.p18e45e80} fill="var(--fill-0, #0E7575)" id="Vector" />
          <path d={svgPaths.p1912700} fill="var(--fill-0, #95CB25)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Welcome ${formData.name}! You're on the waitlist. We'll be in touch soon.`);
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-gradient-to-br from-[#0e7575] to-[#0a5555] text-white">
      {/* Waitlist Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Join the Waitlist
            </h2>
            <p className="text-lg text-teal-100">
              Be among the first to experience the future of healthcare record management in Africa.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="footer-name" className="block text-sm font-medium text-teal-100 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="footer-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 text-gray-900 border-0 rounded-lg focus:ring-2 focus:ring-[#95CB25] transition-shadow placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="footer-email" className="block text-sm font-medium text-teal-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="footer-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/90 text-gray-900 border-0 rounded-lg focus:ring-2 focus:ring-[#95CB25] transition-shadow placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#95CB25] hover:bg-[#88b821] text-gray-900 px-6 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Join Waitlist
            </button>

            <p className="text-sm text-teal-100 text-center mt-4">
              We respect your privacy. Your information is safe with us.
            </p>
          </motion.form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            
            <p className="text-lg font-semibold text-teal-100">
              SASRec — Safe. Accessible. Smart.
            </p>

            <nav className="flex gap-6 text-sm">
              <button onClick={() => scrollToSection('home')} className="text-teal-100 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-teal-100 hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="text-teal-100 hover:text-white transition-colors">
                Features
              </button>
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-teal-100">
            <p>© {new Date().getFullYear()} SASRec. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
