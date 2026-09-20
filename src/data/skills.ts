export interface Skill {
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  icon?: string;
  symbol?: string;
}

export const skillGroups: {
  title: string;
  skills: Skill[];
}[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', proficiency: 5, icon: 'python' },
      { name: 'Java', proficiency: 4, icon: 'java' },
      { name: 'C++', proficiency: 4, icon: 'cplusplus' },
      { name: 'C', proficiency: 4, icon: 'c' },
      { name: 'TypeScript', proficiency: 5, icon: 'typescript' },
      { name: 'JavaScript', proficiency: 5, icon: 'javascript' },
      { name: 'SQL', proficiency: 4, symbol: 'SQL' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', proficiency: 5, icon: 'react' },
      { name: 'Next.js', proficiency: 4, icon: 'nextjs' },
      { name: 'TanStack Query', proficiency: 4, symbol: '↻' },
      { name: 'Zustand', proficiency: 4, symbol: '{ }' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', proficiency: 5, icon: 'nodejs' },
      { name: 'Express', proficiency: 5, icon: 'express' },
      { name: 'PostgreSQL', proficiency: 4, icon: 'postgresql' },
      { name: 'Firebase', proficiency: 4, icon: 'firebase' },
      { name: 'Drizzle ORM', proficiency: 4, symbol: '↗' },
    ],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'scikit-learn', proficiency: 4, icon: 'scikitlearn' },
      { name: 'pandas', proficiency: 4, icon: 'pandas' },
      { name: 'NumPy', proficiency: 4, icon: 'numpy' },
      { name: 'Jupyter', proficiency: 4, symbol: '◉' },
      { name: 'Matplotlib', proficiency: 4, symbol: '▥' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', proficiency: 5, icon: 'git' },
    ],
  },
];