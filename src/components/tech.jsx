const TechStack = () => {
  return (
    <section id="tech" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Tech Stack
        </h2>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Backend */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Spring Data JPA</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          {/* Database */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Database
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Tools
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Git & GitHub</li>
              <li>Postman</li>
              <li>Docker (Basics)</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
