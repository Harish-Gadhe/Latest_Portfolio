import ThemeToggle from "./toggle.jsx";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Harish<span className="text-blue-500">.</span>
        </h1>

        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
