export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  languages: { name: string; level: string }[];
  interests: string[];
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface Achievement {
  description: string;
  stack: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements: Achievement[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  award?: string;
  date: string;
}

export interface Skill {
  name: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'DevOps' | 'Other';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startYear: number;
  endYear: number;
}
