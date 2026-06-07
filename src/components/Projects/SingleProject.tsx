import { Project } from "@/types/project";
import { categoryLabels } from "./projectsData";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, url, category, tagline, description, highlights, gradient, icon } =
    project;
  const { label } = categoryLabels[category];

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <div
        className={`relative bg-gradient-to-br ${gradient} px-6 py-8 text-white`}
      >
        <div className="flex items-start justify-between">
          <span className="text-4xl" role="img" aria-hidden="true">
            {icon}
          </span>
          <span
            className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
          >
            {label}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-bold sm:text-2xl">{title}</h3>
        <p className="mt-1 text-sm font-medium text-white/80">{tagline}</p>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {description}
        </p>

        <ul className="mb-6 flex-1 space-y-2.5">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm font-medium text-black dark:text-white"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                viewBox="0 0 16 13"
                fill="currentColor"
              >
                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          View Live Project
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
