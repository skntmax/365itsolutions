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
          <div className="rounded-xl bg-white p-7 shadow-one dark:bg-dark">
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

          <div className="rounded-xl bg-white p-7 shadow-one dark:bg-dark">
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
          </div>
        </div>

        <div className="mb-12 rounded-xl bg-white p-7 shadow-one dark:bg-dark">
          <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Senior Engineering Team
          </h3>
          <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            Every team member works as a Senior Software Engineer with 5+ years
            of experience.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member}
                className="rounded-lg border border-stroke p-4 dark:border-stroke-dark"
              >
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

        <div className="mb-12 rounded-xl bg-gray-light p-7 dark:bg-bg-color-dark">
          <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
            Full Stack Resume (Concise Version)
          </h3>
          <div className="flex flex-wrap gap-3">
            {resumeStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-stroke bg-white px-3 py-1.5 text-sm font-medium text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gray-light p-7 dark:bg-bg-color-dark">
          <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
            Complete Technology Capability Matrix
          </h3>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-stroke bg-white px-3 py-1.5 text-sm font-medium text-black dark:border-stroke-dark dark:bg-dark dark:text-white"
                    >
                      {item}
                    </span>
                  ))}
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
