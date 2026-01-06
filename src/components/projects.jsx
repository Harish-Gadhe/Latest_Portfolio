import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="text-blue-500">
                  GitHub
                </a>
                <a href={project.demo} className="text-blue-500">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

