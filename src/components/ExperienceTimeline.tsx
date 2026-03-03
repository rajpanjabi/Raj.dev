'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Tata Consultancy Services (TCS)",
    duration: "Dec 2025 – Present",
    description: "• Engineered an end-to-end agentic SDLC system using LangGraph and Amazon Bedrock (Claude Sonnet), automating requirements through testing with 85% code generation accuracy.\n• Implemented multi-agent orchestration with watchdog-based monitoring, enabling real-time generation and validation of user stories, API contracts, system architecture, ER diagrams, and production-ready code.",
  },
  {
    role: "Research Assistant",
    company: "York University",
    duration: "Feb 2025 – Aug 2025",
    description: "• Researched OpenAI Assistants API tool-calling and multi-turn prompts, comparing MCP-style orchestration with assistant-driven routing to Spring Boot endpoints for symptom triage and clinic recommendations.\n• Analyzed context retention strategies across multi-turn conversations (threading, tool invocation patterns, state management), improving response accuracy and reliability of patient-facing chat workflows.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "UIT, York University",
    duration: "Jul 2024 – Aug 2024",
    description: "• Developed AI chatbots using RAG architecture and PHP backend APIs to create course-specific bot instances with real-time interactions, improving query response time for 55,000+ students.\n• Created instructor interface using JavaScript, Mustache Template, and Moodle APIs for uploading FAQs.\n• Configured GitHub Actions CI/CD pipeline, part of York University’s CIO Awards Canada 2024 honored Generative AI project.",
  },
  {
    role: "Supervisor",
    company: "Tim Hortons",
    duration: "Mar 2022 – Aug 2024",
    description: "• Guided team members to enhance productivity by 30% and reduced customer complaints by 40%.\n• Streamlined inventory management processes, reducing waste by 5%.\n• Trained new staff members, ensuring smooth workforce integration.",
  },
];

const leadershipExperiences = [
    {
      title: "Web Developer Coordinator (Volunteer) — Wearsos",
      award: "Jun 2025 – Aug 2025",
      description: `• Built and launched 5+ Shopify landing pages increasing user engagement by 22%.\n• Optimized SEO by 20% and streamlined site navigation, enhancing overall UX for 1,000+ monthly visitors.`,
      image: "/wearsos.png",
    },
    {
      title: "C4: Cross-Campus Capstone Classroom – 'Nurturing Chefs of YCDSB'",
      award: "1st Prize & Sustainability Award ($1,500)",
      description: `• Led a team of nine in a two-week capstone project, developing a hands-on teaching kitchen program.\n• Secured partnerships to integrate YCDSB’s curriculum into experiential learning.\n• Designed an excursion at Bruce’s Mill impacting 100+ students, aligned with UN SDGs.`,
      image: "/projects/capstone.jpg", // save image if you have one
    },
    {
      title: "BEST StartUp Experience 2025 – Mentor",
      award: "",
      description: `• Guided participants refining ideas, fostering critical thinking, and supporting teams through challenges.\n• Encouraged inclusivity, delivered constructive feedback, and helped with impactful pitching.`,
      image: "/projects/best.png", // save image if you want
    },
  ];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
    <div ref={containerRef} className="relative flex flex-col md:flex-row gap-8 p-6">
      
      {/* Left side: Timeline line */}
      <div className="relative w-10 flex justify-center">
        {/* Vertical animated line */}
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 w-1 bg-blue-500 origin-top rounded-full h-full"
        />
      </div>

      {/* Right side: Experiences */}
      <div className="flex-1 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Dot for each experience */}
            <div className="absolute -left-[2.1rem] top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 shadow-md" />
            
            {/* Content */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{exp.role}</h3>
                <span className="text-xs text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-gray-700 dark:text-gray-400 whitespace-pre-line">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
{/* Leadership Experience Section */}
<div className="mt-24 px-6">
  <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Leadership Experience</h2>

  <div className="grid gap-10 md:grid-cols-2">
    {leadershipExperiences.map((lead, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
      >
        {/* Image */}
        {lead.image && (
          <div className="w-full h-52 relative">
            <img
              src={lead.image}
              alt={lead.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Text Content */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{lead.title}</h3>
            {lead.award && (
              <p className="text-sm font-medium text-emerald-600 mb-2">{lead.award}</p>
            )}
            <p className="text-gray-700 dark:text-gray-400 text-sm whitespace-pre-line">{lead.description}</p>
          </div>

          {/* (Optional) LinkedIn Button */}
          {/* Uncomment if needed */}
          {/* <div className="mt-4">
            <a href={lead.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
              View on LinkedIn
            </a>
          </div> */}
        </div>
      </motion.div>
    ))}
  </div>
</div>
</div>
  );


}