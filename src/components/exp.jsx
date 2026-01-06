const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="space-y-8">

          {/* Experience 1 */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <h3 className="text-xl font-semibold">
              Java Full-Stack Developer — Self Projects
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2024 – Present
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Designed and developed RESTful APIs using <strong>Spring Boot</strong>.
              </li>
              <li>
                Implemented layered architecture with controller, service, and repository layers.
              </li>
              <li>
                Integrated backend services with <strong>React</strong> frontend using Axios.
              </li>
              <li>
                Worked with <strong>MySQL</strong> databases using Spring Data JPA.
              </li>
              <li>
                Tested APIs using <strong>Postman</strong> and followed clean coding practices.
              </li>
            </ul>
          </div>

          {/* Experience 2 (Optional / Internship / Learning) */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <h3 className="text-xl font-semibold">
              Frontend Developer — Internship / Practice
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              June 2025 – July 2025
            </p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Built responsive user interfaces using <strong>React</strong> and <strong>Tailwind CSS</strong>.
              </li>
              <li>
                Created reusable components and maintained clean folder structure.
              </li>
              <li>
                Focused on UI/UX consistency and mobile-first design.
              </li>
              <li>
                Used <strong>Git & GitHub</strong> for version control and collaboration.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

