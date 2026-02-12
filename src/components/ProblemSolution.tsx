import { FolderX, RotateCcw, UserX, FolderCheck, Globe, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const problems = [
  {
    icon: FolderX,
    title: "Your records are scattered.",
    description: "Different hospitals, labs, and clinics each hold parts of your medical story — making it hard for you to keep everything in one place.",
    image: "https://images.unsplash.com/photo-1542387740-67856d836e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2F0dGVyZWQlMjBtZWRpY2FsJTIwZmlsZXMlMjBmb2xkZXJzJTIwbWVzc3l8ZW58MXx8fHwxNzcwNzczNTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: RotateCcw,
    title: "You keep starting over.",
    description: "New doctor? New test. Because your records don't follow you, your care doesn't either.",
    image: "https://images.unsplash.com/photo-1584800081828-a413c50d1aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwZG9jdG9yJTIwcmVwZWF0JTIwdGVzdHMlMjBmcnVzdHJhdGVkfGVufDF8fHx8MTc3MDc3MzUyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: UserX,
    title: "You're not in control.",
    description: "Your health data isn't really yours — it's stored everywhere but in your hands.",
    image: "https://images.unsplash.com/photo-1592791770401-7a0cb5ee279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NrZWQlMjBtZWRpY2FsJTIwZGF0YSUyMHByaXZhY3klMjBjb25jZXJufGVufDF8fHx8MTc3MDc3MzUyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

const solutions = [
  {
    icon: FolderCheck,
    title: "Everything in one place.",
    description: "SASRec brings all your medical records together — secure, organized, and truly yours.",
    image: "https://images.unsplash.com/photo-1641630376356-fb9e646b0ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbml6ZWQlMjBkaWdpdGFsJTIwaGVhbHRoJTIwcmVjb3JkcyUyMHRhYmxldHxlbnwxfHx8fDE3NzA3NzM1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: Globe,
    title: "Access anytime, anywhere.",
    description: "Your verified health data moves with you — no delays, no missing files.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBoZWFsdGhjYXJlJTIwYWNjZXNzJTIwYW55d2hlcmV8ZW58MXx8fHwxNzcwNzczNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    icon: ShieldCheck,
    title: "You're in charge now.",
    description: "With SASRec, you decide who sees your records and when. Your health, your control.",
    image: "https://images.unsplash.com/photo-1682365114794-14b870355d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwZW1wb3dlcm1lbnQlMjBjb250cm9sJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NzA3NzM1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

function ProblemCard({ problem, index }: { problem: typeof problems[0], index: number }) {
  const Icon = problem.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-2">
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src={problem.image}
            alt={problem.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
        <p className="text-gray-600 leading-relaxed">{problem.description}</p>
      </div>
    </motion.div>
  );
}

function SolutionCard({ solution, index }: { solution: typeof solutions[0], index: number }) {
  const Icon = solution.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-2">
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
        <p className="text-gray-600 leading-relaxed">{solution.description}</p>
      </div>
    </motion.div>
  );
}

export function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-50 border border-[#0e7575] rounded-full text-sm font-semibold text-gray-900 mb-6">
            Problem Vs Solution
          </span>
        </div>

        {/* The Problem */}
        <div className="space-y-8 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#fb3748] tracking-tight"
          >
            The Problem
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <ProblemCard key={index} problem={problem} index={index} />
            ))}
          </div>
        </div>

        {/* The Solution */}
        <div className="space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#1fc16b] tracking-tight"
          >
            The Solution
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}