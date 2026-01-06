const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          I’m open to Java Full-Stack Developer opportunities, internships,
          and collaborative projects. Feel free to reach out.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:harish5052004@gmail.com?subject=Java Full-Stack Developer Opportunity&body=Hi Harish,"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/harish-gadhe-9b3920285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 transition"
          >
            LinkedIn
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

export default Contact;
