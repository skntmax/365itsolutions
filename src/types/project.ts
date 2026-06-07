export type ProjectCategory = "enterprise" | "mobility" | "edtech" | "government";

export type Project = {
  id: number;
  title: string;
  url: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  highlights: string[];
  gradient: string;
  icon: string;
};
