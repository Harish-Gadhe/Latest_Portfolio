const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I am a <span className="font-semibold">Java Full-Stack Developer</span>{" "}
          with hands-on experience in building scalable backend systems using{" "}
          <span className="font-semibold">Spring Boot</span> and integrating them
          with modern frontend applications built using{" "}
          <span className="font-semibold">React</span>.
          <br /><br />
          I have a strong foundation in{" "}
          <span className="font-semibold">
            OOPs, DBMS, RESTful APIs, and clean architecture
          </span>
          , and I enjoy building real-world projects that solve practical
          problems. I focus on writing clean, maintainable code and continuously
          improving my backend and system design skills.
        </p>
      </div>
    </section>
  );
};

export default About;
