import { Download, UserPlus, RefreshCw, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download SASRec",
    description: "Get the app from your app store and install it on your device in seconds.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Set up your secure account with basic information and verification.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Request Record Updates",
    description: "Connect with your healthcare providers to sync your medical history.",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Access Anytime, Anywhere",
    description: "Your complete health records are now in your hands, available 24/7.",
  },
];

function StepCard({ step, index, isLast }: { step: typeof steps[0], index: number, isLast: boolean }) {
  const Icon = step.icon;
  
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative"
      >
        {/* Step number background */}
        <div className="absolute -top-4 -left-4 text-7xl font-extrabold text-teal-100 opacity-50 select-none">
          {step.number}
        </div>
        
        {/* Icon circle */}
        <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#0e7575] to-[#95CB25] rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30 mb-6">
          <Icon className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      {/* Connecting line - desktop only */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[60%] w-full h-1">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            className="h-full bg-gradient-to-r from-[#0e7575] to-[#95CB25] origin-left"
            style={{ transformOrigin: 'left' }}
          />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        className="text-center max-w-xs"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-teal-50 border border-[#0e7575] rounded-full text-sm font-semibold text-gray-900 mb-6">
              How it works
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            How SASRec Keeps You in Control
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('footer');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#0e7575] hover:bg-[#0d6868] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}