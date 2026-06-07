import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "#365 Exam Portal",
    url: "https://exam-portal.365itsolution.com/",
    category: "enterprise",
    tagline: "Smart recruitment & proctored assessments",
    description:
      "End-to-end online examination platform built for recruiters and hiring teams. Send secure exam links to candidates in seconds — they take the test in-browser while you monitor results in real time.",
    highlights: [
      "One-click exam link sharing for recruiters",
      "Live proctoring with 30-sec video clips per frame",
      "Automated scoring & candidate analytics dashboard",
    ],
    gradient: "from-blue-600 to-indigo-700",
    icon: "📝",
  },
  {
    id: 2,
    title: "SwiftCab",
    url: "https://swiftcab.in",
    category: "mobility",
    tagline: "On-demand ride-hailing at scale",
    description:
      "Full-featured cab booking platform on par with Rapido and Ola — real-time driver matching, live GPS tracking, fare estimation, and seamless payments for riders and fleet operators.",
    highlights: [
      "Real-time driver-rider matching",
      "Live GPS tracking & route optimization",
      "Multi-role apps for riders, drivers & admins",
    ],
    gradient: "from-emerald-500 to-teal-700",
    icon: "🚕",
  },
  {
    id: 3,
    title: "CodeXCave",
    url: "https://codexcave.com",
    category: "edtech",
    tagline: "Interview-ready coding mastery",
    description:
      "A comprehensive coding learning platform with curated interview questions, hands-on challenges, structured courses, and progress tracking — built to help developers land their dream roles.",
    highlights: [
      "Curated coding interview question bank",
      "Interactive coding challenges & courses",
      "Skill tracking & performance analytics",
    ],
    gradient: "from-violet-600 to-purple-800",
    icon: "💻",
  },
  {
    id: 4,
    title: "CCIL eOffice",
    url: "https://eoffice.cciltd.in/",
    category: "government",
    tagline: "Digital file management for CCIL",
    description:
      "Enterprise-grade e-office system deployed for CCIL Ltd — digitizing internal workflows with secure file forwarding, approval chains, document tracking, and audit-ready records.",
    highlights: [
      "Digital file forwarding & routing",
      "Multi-level approval workflows",
      "Secure document lifecycle management",
    ],
    gradient: "from-amber-500 to-orange-700",
    icon: "🏛️",
  },
  {
    id: 5,
    title: "ePI eOffice",
    url: "https://epieoffice.in/",
    category: "government",
    tagline: "Government digital workflow platform",
    description:
      "Robust e-office solution for government institutions — streamlining correspondence, file movement, and inter-department collaboration with role-based access and compliance built in.",
    highlights: [
      "Paperless office automation",
      "Role-based access & audit trails",
      "Inter-department file collaboration",
    ],
    gradient: "from-slate-600 to-slate-900",
    icon: "📋",
  },
];

export const categoryLabels: Record<
  Project["category"],
  { label: string; badge: string }
> = {
  enterprise: { label: "Enterprise SaaS", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  mobility: { label: "Mobility", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
  edtech: { label: "EdTech", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300" },
  government: { label: "Government", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
};

export default projectsData;
