// import Image from 'next/image';
// import { motion } from 'framer-motion';

// interface Project {
//   photo: string;
//   name: string;
//   content: string;
//   link: string;
//   type: string;
// }

// export default function ProjectCard({ project }: { project: Project }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: 'easeOut' }}
//       className="w-[280px] md:w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-4 hover:scale-105 hover:shadow-lg transition-transform duration-300"
//     >
//       {/* Image */}
//       <div className="w-full h-40 relative mb-3">
//         <Image
//           src={`/projects/${project.photo}`}
//           alt={project.name}
//           fill
//           className="object-cover rounded-xl"
//         />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
//         {project.name}
//       </h3>

//       {/* Description */}
//       <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-3">
//         {project.content}
//       </p>

//       {/* Links */}
//       {project.link && (
//         <a
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:underline text-sm"
//         >
//           View Project
//         </a>
//       )}
//     </motion.div>
//   );
// }

// components/ProjectCard.tsx
'use client';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  photo: string;
  name: string;
  content: string;
  github?: string;
  live?: string;
  type: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 w-[300px]"
    >
      <Image
        src={`/projects/${project.photo}`}
        alt={project.name}
        width={300}
        height={180}
        className="object-cover w-full h-40"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{project.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-4">{project.content}</p>
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-500 hover:underline text-sm">
              <FaGithub /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-500 hover:underline text-sm">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}