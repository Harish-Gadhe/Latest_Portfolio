const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <div className="max-w-4xl text-center">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500">Harish Gadhe</span>
        </h1>

        {/* Role */}
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
          Java Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          I build scalable backend systems using <strong>Java & Spring Boot</strong>,
          and modern, responsive frontend applications using{" "}
          <strong>React & Tailwind CSS</strong>.
          Passionate about clean architecture and real-world problem solving.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="public/harish.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Harish-Gadhe"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
