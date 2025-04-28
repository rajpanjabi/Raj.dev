'use client';

import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const response = await fetch("https://formspree.io/f/xkgrgyld", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
    body: new FormData(form),
  });

  if (response.ok) {
    setFormStatus("success");
    setForm({ name: '', email: '', message: '' });
  } else {
    setFormStatus("error");
  }

};

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-white dark:bg-[#0a0f24] text-gray-900 dark:text-gray-100 font-mono transition-colors duration-300">
      {/* Quirky Intro */}
      <div className="max-w-2xl text-center mb-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Contact Me 🛠️</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
    <Typewriter
      words={[
        "Get in touch — I don't bite... 🐞",
        "Ping me your coolest project ideas 🚀",
        "Let's build something amazing together! 🔥",
      ]}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={2000}
    />
  </p>
</div>

      {/* Fake Terminal */}
      <div className="w-full max-w-2xl bg-[#1f2937] rounded-lg shadow-lg p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm text-[#9ca3af]">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="> Your name here"
              className="bg-[#111827] text-[#f3f4f6] border border-[#374151] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm text-[#9ca3af]">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="> your@email.com"
              className="bg-[#111827] text-[#f3f4f6] border border-[#374151] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm text-[#9ca3af]">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="> Write your message here..."
              className="bg-[#111827] text-[#f3f4f6] border border-[#374151] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-bold transition-colors"
          >
            Send Message 🚀
          </button>
        </form>

        {/* Fake console log */}
        <div className="mt-8 text-xs text-green-400">
          <p>console.log(&quot;Waiting for your message...&quot;);</p>
        </div>
        {/* Success/Error Messages */}
{formStatus === "success" && (
  <p className="text-green-400 text-center text-sm mt-4">
    ✅ Message sent successfully! I&apos;ll get back to you soon.
  </p>
)}
{formStatus === "error" && (
  <p className="text-red-400 text-center text-sm mt-4">
    ❌ Oops! Something went wrong. Please try again later.
  </p>
)}

      </div>
      {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-12 text-[#9ca3af] text-2xl">
        <a href="https://www.instagram.com/rajpanjabi__" target="_blank" className="hover:text-pink-400 transition">
            <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rajpanjabi" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
        </a>
        <a href="https://github.com/rajpanjabi" target="_blank" className="hover:text-green-400 transition">
            <FaGithub />
        </a>
        </div>
    </div>
  );
}