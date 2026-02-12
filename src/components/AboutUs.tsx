import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Oladipo Daniel",
    role: "Co-Founder & CEO",
    bio: "Visionary leader passionate about transforming African healthcare through technology.",
    image: "/images/Daniels.jpg",
  },
  {
    name: "Julie Wole-Ajayi",
    role: "Co-Founder & COO",
    bio: "Creating intuitive experiences that make healthcare accessible to everyone.",
    image: "/images/JulieWole.jpg",
  },
  {
    name: "Abubakar Isa",
    role: "Co-Founder & CTO",
    bio: "Technology expert building secure, scalable healthcare infrastructure for millions.",
    image: "/images/Abubakar.jpg",
  },
 /*  {
    name: "Temitope Daramola",
    role: "Technology Advisor",
    bio: "Healthcare professional ensuring our platform meets real clinical needs.",
    image: "https://images.unsplash.com/photo-1632054890505-dcfb97d25fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MDc3MTMxNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },  */
  {
    name: "Temitope Daramola",
    role: "Technology Advisor",
    bio: "Healthcare professional ensuring our platform meets real clinical needs.",
    image: "/images/headshot.jpg",
  }, 
];

function TeamCard({ member, index }: { member: typeof team[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
        <p className="text-[#0e7575] font-medium">{member.role}</p>
        <p className="text-gray-600 leading-relaxed">{member.bio}</p>
        
        <div className="flex gap-3 pt-2">
          <button className="w-9 h-9 bg-gray-100 hover:bg-[#0e7575] rounded-lg flex items-center justify-center transition-colors group/btn">
            <Linkedin className="w-4 h-4 text-gray-600 group-hover/btn:text-white" />
          </button>
          <button className="w-9 h-9 bg-gray-100 hover:bg-[#0e7575] rounded-lg flex items-center justify-center transition-colors group/btn">
            <Mail className="w-4 h-4 text-gray-600 group-hover/btn:text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-teal-50 border border-[#0e7575] rounded-full text-sm font-semibold text-gray-900 mb-6">
              About us
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            SASRec Difference
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At SASRec, we believe every patient deserves control over their health journey. Which is why we built a platform where your medical records are safe, always accessible, and updated only by verified healthcare practitioners.
          </motion.p>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0e7575] to-[#95CB25] rounded-3xl p-12 text-white text-center mb-20"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            To empower every African patient with secure, accessible, and comprehensive control over their health records, bridging the gap between fragmented healthcare systems and patient-centered care.
          </p>
        </motion.div>

        {/* Team Section */}
        <div className="mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Meet Our Leadership Team
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
