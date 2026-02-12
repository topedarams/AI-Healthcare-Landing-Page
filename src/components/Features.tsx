import { Folder, CheckCircle2, Bell, Shield, Network, Heart } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Folder,
    title: "All-in-One Access",
    description: "From lab results to immunizations, medications, and imaging, everything is organized in one place.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: CheckCircle2,
    title: "Verified Health Updates",
    description: "Only certified healthcare professionals can update your records, ensuring accuracy and trust.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss an appointment, medication, or follow-up with intelligent notifications.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Your data is protected with end-to-end encryption and complies with international standards.",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Network,
    title: "Cross-System Compatibility",
    description: "Works seamlessly with healthcare providers across different platforms and systems.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Heart,
    title: "Patient-First Experience",
    description: "Designed with you in mind — simple, intuitive, and always accessible when you need it.",
    gradient: "from-rose-500 to-red-500"
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#0e7575] hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Decorative background illustration */}
      <div className="absolute -right-8 -top-8 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-full h-full text-[#0e7575]" />
      </div>
      
      <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 relative">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed relative">{feature.description}</p>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-teal-50 border border-[#0e7575] rounded-full text-sm font-semibold text-gray-900 mb-6">
              What we offer
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Made for You, Built Around Your Health
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are redefining medical record-keeping in Nigeria through security, accessibility, and patient-first innovation. With SASRec, your health journey is not just stored, but protected, verified, and always within reach.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}