import SectionTitle from "../Common/SectionTitle";

const plans = [
  {
    name: "Starter SaaS",
    price: "₹49,999",
    cycle: "/month",
    description:
      "Best for early-stage founders launching MVP products quickly with essential features and clean UI.",
    cta: "Launch MVP Fast",
    featured: false,
    points: [
      "Up to 3 core modules",
      "Web app + admin panel",
      "Authentication & role access",
      "Basic analytics dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth SaaS",
    price: "₹1,19,999",
    cycle: "/month",
    description:
      "Most popular choice for growing startups that need scale-ready architecture and faster delivery.",
    cta: "Choose Growth Plan",
    featured: true,
    points: [
      "Up to 8 modules + API integrations",
      "Microservices-ready architecture",
      "Performance optimization",
      "CI/CD setup + cloud deployment",
      "Priority support",
    ],
  },
  {
    name: "Enterprise SaaS",
    price: "Custom",
    cycle: "",
    description:
      "For high-scale B2B and government-grade platforms needing strict security, custom workflows, and SLAs.",
    cta: "Talk to Architect",
    featured: false,
    points: [
      "Unlimited modules & workflows",
      "Enterprise security & compliance",
      "Advanced observability stack",
      "Dedicated tech lead + weekly reviews",
      "SLA-based long-term support",
    ],
  },
];

const SaaSPricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-14 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="SaaS Pricing Plans for Current Market"
          paragraph="Transparent engagement plans designed for startups, SMEs, and enterprise teams. Pick what fits your current stage and scale confidently."
          center
          width="760px"
        />

        <div className="mb-8 text-center">
          <span className="inline-flex max-w-full rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-center text-xs font-semibold text-primary sm:text-sm">
            Flexible billing available: monthly, quarterly, and milestone-based
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border bg-white p-5 shadow-one transition-all duration-300 hover:-translate-y-1 hover:shadow-two dark:bg-dark sm:p-7 ${
                plan.featured
                  ? "border-primary shadow-feature-2 dark:border-primary"
                  : "border-stroke/70 dark:border-stroke-dark"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white sm:px-4 sm:text-xs">
                  Recommended
                </span>
              )}

              <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                {plan.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                {plan.description}
              </p>

              <div className="mb-6 flex items-end gap-1 border-b border-stroke pb-6 dark:border-stroke-dark">
                <span className="text-3xl font-extrabold text-black dark:text-white">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm font-medium text-body-color dark:text-body-color-dark">
                  {plan.cycle}
                </span>
              </div>

              <ul className="mb-7 space-y-3">
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm font-medium text-black dark:text-white"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        className="fill-current"
                      >
                        <path d="M3.742 7.602c-.212 0-.394-.067-.576-.236L.442 4.688a.598.598 0 010-.85.574.574 0 01.831 0l2.469 2.429L8.71 1.018a.574.574 0 01.83 0 .598.598 0 010 .85L4.319 7.366a.78.78 0 01-.577.236z" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-black text-white hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaaSPricing;
