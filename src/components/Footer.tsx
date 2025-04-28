export default function Footer() {
    return (
      <footer className="text-center text-sm py-4 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
        © {new Date().getFullYear()} Raj Panjabi. All rights reserved.
      </footer>
    );
  }