import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Programming Languages",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "Python",
      "C",
      "C++",
      "C#",
      "PHP",
      "Go (Golang)",
    ],
  },
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "Sass/SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "Redux Toolkit (RTK)",
      "Material UI (MUI)",
      "Ant Design",
      "jQuery",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "Laravel",
      "REST APIs",
      "GraphQL",
      "Microservices Architecture",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQL Server", "DynamoDB"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, RDS, Lambda, IAM)",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Linux/Ubuntu",
      "CI/CD Pipelines",
      "GitHub Actions",
      "Jenkins",
      "Terraform",
    ],
  },
  {
    title: "Messaging & Streaming",
    items: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "Amazon SQS"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
  {
    title: "Testing",
    items: ["Jest", "Mocha", "Chai", "JUnit", "Postman", "Swagger/OpenAPI"],
  },
  {
    title: "Software Architecture",
    items: [
      "MVC Architecture",
      "Microservices",
      "Event-Driven Architecture",
      "Domain-Driven Design (DDD)",
      "Design Patterns",
      "SOLID Principles",
      "System Design",
    ],
  },
  {
    title: "Security",
    items: [
      "JWT Authentication",
      "OAuth 2.0",
      "Role-Based Access Control (RBAC)",
      "HTTPS/SSL",
      "OWASP Security Practices",
    ],
  },
  {
    title: "Monitoring & Logging",
    items: ["ELK Stack (Elasticsearch, Logstash, Kibana)", "Grafana", "Prometheus", "CloudWatch"],
  },
  {
    title: "Development Methodologies",
    items: ["Agile", "Scrum", "Kanban", "Test-Driven Development (TDD)"],
  },
  {
    title: "Operating Systems",
    items: ["Linux", "Ubuntu", "Windows Server"],
  },
  {
    title: "Tools",
    items: [
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Docker Desktop",
      "Postman",
      "Jira",
    ],
  },
];

const resumeStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "Redis",
  "Apache Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "CI/CD",
  "Linux",
  "Microservices",
  "System Design",
  "Nginx",
  "Postman",
  "Agile/Scrum",
];

const teamMembers = ["Shubham", "Saurabh Singh", "Vimal", "Atul"];

const techBrand: Record<string, { short: string; tone: string }> = {
  "JavaScript (ES6+)": { short: "JS", tone: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300" },
  JavaScript: { short: "JS", tone: "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300" },
  TypeScript: { short: "TS", tone: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" },
  Java: { short: "JV", tone: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300" },
  Python: { short: "PY", tone: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" },
  "C++": { short: "C+", tone: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300" },
  "C#": { short: "C#", tone: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300" },
  PHP: { short: "PHP", tone: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300" },
  "Go (Golang)": { short: "GO", tone: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300" },
  "React.js": { short: "RE", tone: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300" },
  "Next.js": { short: "NX", tone: "bg-gray-200 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300" },
  "Node.js": { short: "ND", tone: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" },
  "Express.js": { short: "EX", tone: "bg-zinc-200 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300" },
  NestJS: { short: "NS", tone: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300" },
  "Spring Boot": { short: "SP", tone: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300" },
  Laravel: { short: "LV", tone: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300" },
  MongoDB: { short: "MG", tone: "bg-lime-100 text-lime-700 dark:bg-lime-500/20 dark:text-lime-300" },
  MySQL: { short: "MY", tone: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" },
  PostgreSQL: { short: "PG", tone: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300" },
  Redis: { short: "RD", tone: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300" },
  Docker: { short: "DK", tone: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300" },
  Kubernetes: { short: "K8", tone: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300" },
  AWS: { short: "AW", tone: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300" },
  Nginx: { short: "NG", tone: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300" },
  "Apache Kafka": { short: "KF", tone: "bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300" },
  Git: { short: "GT", tone: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300" },
  Postman: { short: "PM", tone: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300" },
};

const getLogoBadge = (item: string) => {
  const preset = techBrand[item];
  if (preset) return preset;
  const fallbackShort = item
    .replace(/\([^)]*\)/g, "")
    .split(/[\s/.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  return {
    short: fallbackShort || "IT",
    tone: "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300",
  };
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Leadership & Delivery Ownership"
          paragraph="Work directly with the leadership team that designs, builds, and delivers your product from architecture to production."
          center
        />

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-stroke/70 bg-white p-7 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:border-stroke-dark dark:bg-dark">
            <div className="mb-5 h-20 w-20 overflow-hidden rounded-full border border-stroke/70 dark:border-stroke-dark">
              <Image
                src="/images/team/shashi-kant.png"
                alt="Shashi Kant profile photo"
                width={250}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Founder
            </p>
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              Shashi Kant
            </h3>
            <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Full-stack architect and product builder focused on scalable
              enterprise and government-grade systems.
            </p>
            <a
              href="https://skntmax.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              View Profile
            </a>
          </div>

          <div className="rounded-xl border border-stroke/70 bg-white p-7 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:border-stroke-dark dark:bg-dark">
            <div className="mb-5 h-20 w-20 overflow-hidden rounded-full border border-stroke/70 dark:border-stroke-dark">
              <Image
                src="/images/team/paras.png"
                alt="Paras profile photo"
                width={250}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Cofounder
            </p>
            <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
              Paras
            </h3>
            <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Drives delivery strategy, execution quality, and cross-functional
              collaboration to ensure client goals are achieved on time.
            </p>
            <p className="text-sm font-medium text-body-color dark:text-body-color-dark">
              Profile link will be added shortly.
            </p>

            <a
              href="https://parasmahajan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              View Profile
            </a>
          </div>
        </div>

        <div className="mb-12 rounded-xl border border-stroke/70 bg-white p-7 shadow-one dark:border-stroke-dark dark:bg-dark">
          <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Senior Engineering Team
          </h3>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            Every team member works as a Senior Software Engineer with 5+ years
            of experience.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member} className="rounded-lg border border-stroke p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-one dark:border-stroke-dark">
                <p className="text-lg font-semibold text-black dark:text-white">
                  {member}
                </p>
                <p className="text-sm font-medium text-body-color dark:text-body-color-dark">
                  Senior Software Engineer
                </p>
                <p className="mt-1 text-sm font-medium text-primary">
                  5+ Years Experience
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-xl border border-stroke/60 bg-gray-light p-7 dark:border-stroke-dark dark:bg-bg-color-dark">
          <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
            Full Stack Resume (Concise Version)
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeStack.map((tech) => {
              const logo = getLogoBadge(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-md border border-stroke bg-white px-3 py-1.5 text-sm font-medium text-black transition-all duration-200 hover:border-primary/40 hover:shadow-one dark:border-stroke-dark dark:bg-dark dark:text-white"
                >
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${logo.tone}`}
                  >
                    {logo.short}
                  </span>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-stroke/60 bg-gray-light p-7 dark:border-stroke-dark dark:bg-bg-color-dark">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
            Complete Technology Capability Matrix
          </h3>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg bg-white/70 p-4 dark:bg-dark/50">
                <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => {
                    const logo = getLogoBadge(item);
                    return (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-md border border-stroke bg-white px-3 py-1.5 text-sm font-medium text-black transition-all duration-200 hover:border-primary/40 hover:shadow-one dark:border-stroke-dark dark:bg-dark dark:text-white"
                      >
                        <span
                          className={`inline-flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${logo.tone}`}
                        >
                          {logo.short}
                        </span>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
