export interface Skill {
  name: string;
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
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C', icon: 'c' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'SQL', symbol: 'SQL' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TanStack Query', symbol: '↻' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS Modules', icon: 'css3' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Material UI', icon: 'materialui' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'REST API', symbol: '⇄' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql'}, 
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase'},
      { name: 'Drizzle ORM', icon: 'drizzle' },
    ],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Jupyter', icon: 'jupyter' },
      { name: 'Matplotlib', icon: 'matplotlib' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'Postman', icon: 'postman' },
      { name: 'GitHub Actions', icon: 'githubactions' },
    ],
  },
];