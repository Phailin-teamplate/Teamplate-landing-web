export type Tech = {
  name: string;
  imageUrl?: string;
};

export type TechCategory = {
  title: string;
  technologies: Tech[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Front-End",
    technologies: [
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "VueJS" },
    ],
  },
  {
    title: "Back-End",
    technologies: [
      { name: "ExpressJS" },
      { name: "NestJS" },
      { name: "Spring Boot" },
      { name: "Flask" },
      { name: "Django" },
    ],
  },
  {
    title: "Mobile App",
    technologies: [
      { name: "React Native" },
      { name: "Flutter" },
      { name: "Swift" },
      { name: "Kotlin" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    title: "Serverless DB",
    technologies: [
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS" },
      { name: "GCP" },
      { name: "Azure" },
    ],
  },
  {
    title: "Infrastructure",
    technologies: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "EKS" },
    ],
  },
  {
    title: "AI",
    technologies: [
      { name: "TensorFlows" },
      { name: "PyTorch" },
    ],
  },
];
