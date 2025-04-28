'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-around p-6 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      {/* Hero Image */}
      <div className=" order-1 md:order-2 mt-8 md:mt-0">
        <Image
          src="/profile.jpg"
          alt="Raj Panjabi"
          width={400}
          height={400}
          className="rounded-full shadow-lg border-4 border-blue-500"
        />
      </div>

      {/* Text Block*/}
      <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m Raj 👋 <br />
          <span className="text-blue-600">
            <Typewriter
              words={['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
        Recent CS grad who’s all about bringing ideas to life 💻—fueled by coffee ☕, of course. When I’m not coding, you’ll catch me lost in a book📚, chasing PRs at the gym, or binging my latest Netflix obsession. Got questions? Hit me up—I promise I don’t bite (or bug)!        </p>
      </div>

      
    </main>
  );
}