import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Projects That Speak for Themselves"
          paragraph="From proctored exam platforms to government e-office systems — we deliver production-ready software that real businesses and institutions rely on every day."
          center
        />

        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "5+", label: "Live Products" },
            { value: "3", label: "Industry Verticals" },
            { value: "Govt.", label: "Sector Experience" },
            { value: "100%", label: "Production Deployed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-white px-4 py-5 text-center shadow-one dark:bg-dark"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-body-color dark:text-body-color-dark sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-lg font-medium text-body-color dark:text-body-color-dark">
            Have a project in mind? Let&apos;s build something great together.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
