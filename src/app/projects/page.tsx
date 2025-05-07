'use client';
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
export default function ProjectsPage(){

    const allProjects = [
        {
          photo: "codLol.png",
          name: "BidWise Full Stack Web Application",
          content:
            "Created an auction-based web app using Spring Boot and React, featuring a product catalog, bidding system, and Stripe-integrated payments. Added robust auth and Dockerized for scalable deployment.",
          type: "software",
          github: "https://www.github.com/Nishiket-singh/Ecom4413",
          live:"https://bidwise.panjabiraj.com/"
        },
     
        {
          photo: "mcp.png",
          name: "GitHub MCP Tool Server",
          content:
            "Built a lightweight MCP-compatible server in Python enabling AI tools like Claude and Cursor to fetch GitHub repo summaries and recent commit data via standardized tool calls.",
          type: "software",
          github: "https://github.com/rajpanjabi/MCP"
        },

        {
          photo: "chat.jpg",
          name: "Large Language Model from Scratch",
          content:
            "Built GPT architecture with transformer blocks & multi-head attention. Achieved 85% accuracy on dummy dataset using ML techniques.",
          type: "data",
          github: "https://github.com/kwshr/LMS-ChatBot",
        },
        {
          photo: "spotify.png",
          name: "API Backend with Microservices (Spotify Clone)",
          content:
            "Developed backend in Java with Spring Boot, MongoDB, and Neo4j. Built REST APIs and microservices for a Spotify clone.",
          type: "software",
          github: "https://www.github.com/rajpanjabi/Spotify-Clone",
        },
        {
          photo: "FamilyTravelTracker.png",
          name: "Family Travel Tracker",
          content:
            "Node.js app using PostgreSQL and EJS templating to log and map countries visited. Displays total nation count on interactive UI.",
          type: "software",
          github: "https://www.github.com/rajpanjabi/TravelTracker",
        },
        {
          photo: "uber3.png",
          name: "Uber Driver Lifetime Value Analysis",
          content:
            "Used Python to model Uber Driver LTV and identify pricing strategies through clustering & KPI analysis.",
          type: "data",
          github: "https://www.github.com/rajpanjabi/Uber_Driver_lifetime_Value_Python",
          live:''
        },
      
        {
          photo: "capitalQuizpic.png",
          name: "Capital Quiz Game",
          content:
            "Quiz game built in Node.js and PostgreSQL where users guess capital cities. Clean UI and country-level tracking.",
          type: "software",
          github: "https://www.github.com/rajpanjabi/Flag-Quiz",
        },
        {
          photo: "koru.png",
          name: "Koru Hackathon – Student Observation Platform",
          content:
            "MERN stack app with Google OAuth, JWT auth, and Cohere AI to improve teacher observation and report automation by 20-40%.",
          type: "software",
          github: "https://github.com/rajpanjabi/TeachSpace",
        },
        {
          photo: "flight.jpg",
          name: "Flight Status Prediction",
          content:
            "EDA and ML modeling to predict flight delays using Logistic Regression, KNN, Random Forest. Optimized with GridSearch.",
          type: "data",
          github: "https://github.com/patel-aum-yorku/Flight-Status-Prediction",
        },
        
        {
          photo: "superstore.jpg",
          name: "Superstore Sales Dashboard (Power BI)",
          content:
            "Sales & margin trend analysis with Power Query, DAX in Power BI. Created interactive dashboards for stakeholders.",
          type: "data",
          github: "https://www.githubedin.com/posts/rajpanjabi_hello-everyone-i-would-love-to-share-my-activity-7035314571523342336-tdex?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlWO8QB2LHg9eAI4di80a9hk6yVbI4mduI",
        },
      ];

//     const [filter, setFilter] = useState<'all' | 'software' | 'data'>('all');
//     const filtered = allProjects.filter(p => filter === 'all' || p.type === filter);

//     return(
//         <div className="p-6">
//             <h1 className="text-3xl font-bold mb-4">Projects</h1>
//             {/* Buttons to filter projects */}
//             <div className="flex gap-4 mb-6">
//             {['all', 'software', 'data'].map(type => (
//             <button
//                 key={type}
//                 onClick={() => setFilter(type as 'all' | 'software' | 'data')}
//                 className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
//                   filter === type
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
//                 }`}
//                 >
//             {type.toUpperCase()}
//             </button>))}
//         </div>
//         <Marquee pauseOnHover gradient={false} speed={50}>
//   <div className="flex gap-6 px-4">
//     {filtered.map((project, index) => (
//       <ProjectCard key={index} project={project} />
//     ))}
//   </div>
// </Marquee>
        

//         </div>
//     )
// }

const [filter, setFilter] = useState<'all' | 'software' | 'data'>('all');
const filtered = allProjects.filter((p) => filter === 'all' || p.type === filter);

return (
  <div className="p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Projects 🚀</h1>
    <div className="flex justify-center gap-4 mb-10">
      {['all', 'software', 'data'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type as 'all' | 'software' | 'data')}
          className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-300 text-sm ${
            filter === type
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          {type.toUpperCase()}
        </button>
      ))}
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {filtered.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);
}