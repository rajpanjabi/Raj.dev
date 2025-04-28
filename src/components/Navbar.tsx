'use client';
import ThemeToggle from './Themetoggle';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-white text-black dark:bg-gray-900 dark:text-white shadow-md">
        <div className="text-lg font-bold mb-4 sm:mb-0">Raj Panjabi</div>

        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link href="/work" className="hover:text-blue-400 transition">Work</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link href="/travel" className="hover:text-blue-400 transition">Travel</Link>
            <ThemeToggle />
        </div>
</nav>
    )
}