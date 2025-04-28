'use client';

import ExperienceTimeline from '@/components/ExperienceTimeline';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-10">Work Experience</h1>
      <ExperienceTimeline />
    </div>
  );
}