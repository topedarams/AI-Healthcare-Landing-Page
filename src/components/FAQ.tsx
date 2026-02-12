import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How does SASRec work?",
    answer: "SASRec is a secure digital platform that aggregates all your medical records from different healthcare providers into one unified, accessible location. After you create an account, you can request your records from hospitals, labs, and clinics. Only verified healthcare professionals can update your records, ensuring accuracy and security.",
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely. We use military-grade end-to-end encryption to protect your data. Your records are stored using international healthcare security standards (including HIPAA compliance frameworks). You have complete control over who can access your information, and we never share your data without your explicit permission.",
  },
  {
    question: "How do I get my existing medical records into SASRec?",
    answer: "You can request your records directly through the app. Simply select the healthcare facilities you've visited, and we'll coordinate with them to securely transfer your records. Alternatively, you can upload scanned copies of physical records, which our system will organize for you.",
  },
  {
    question: "Can I share my records with my doctor?",
    answer: "Yes! You can securely share your complete medical history or specific records with any healthcare provider. You control what information is shared and for how long they have access. This makes consultations more efficient and helps doctors make better-informed decisions about your care.",
  },
  {
    question: "What happens if I change healthcare providers?",
    answer: "That's the beauty of SASRec - your records move with you. When you change doctors or visit a new hospital, you can instantly grant them access to your complete medical history. No more starting from scratch or repeating tests unnecessarily.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-[#0e7575] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#0e7575]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-teal-50 border border-[#0e7575] rounded-full text-sm font-semibold text-gray-900 mb-6">
              FAQs
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#0e7575] font-semibold hover:underline"
          >
            Contact our support team →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
