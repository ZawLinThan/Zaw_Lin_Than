import type { ProjectStatus } from '../components/StatusBadge'
export interface Project {
  slug: string
  title: string
  category: string
  date: string
  status: ProjectStatus
  summary: string
  description: string
  highlights: string[]
  stack: string[]
  screenshots: { src: string; alt: string; caption?: string }[]
  websiteUrl: string | null
}
// Add verified live URLs and screenshot assets here when available.
export const projects: Project[] = [
  {
    slug: 'rag-study-assistant', title: 'RAG Study Assistant', category: 'AI / Team project', date: 'In development', status: 'In progress',
    summary: 'A study companion that turns course materials into personalized learning tools.',
    description: 'Collaborating in a 5–6 member team to build a full-stack retrieval-augmented generation study assistant. It generates context-aware explanations, practice tests, and flashcards from user-uploaded course materials. As project manager at GT WebDev, I also lead a team of five on the AI Study Assistant project.',
    highlights: ['Developing asynchronous document processing and retrieval using Redis.', 'Supporting semantic search across course materials.', 'Working on personalized weak-point tracking to guide studying.'],
    stack: ['TypeScript', 'React', 'Express', 'Supabase', 'Redis', 'BullMQ', 'PostgreSQL', 'Cloudflare R2'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'ai-research-agent', title: 'AI Research Agent', category: 'AI / Automation', date: 'In development', status: 'In progress',
    summary: 'From a research question to an evidence-based report with citations.',
    description: 'Building an AI agent that generates research plans, searches the web, evaluates sources, and synthesizes findings into cited reports. The asynchronous planning and search pipeline uses Redis and BullMQ to coordinate work.',
    highlights: ['Engineered a pipeline that revises queries as research develops.', 'Evaluates evidence quality before synthesizing findings.', 'Launches follow-up searches to close coverage gaps.'],
    stack: ['TypeScript', 'React', 'Express', 'Supabase', 'Redis', 'BullMQ', 'Exa', 'PostgreSQL'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'bond', title: 'Bond', category: 'Full stack / Social', date: 'July 2026', status: 'Done',
    summary: 'A social platform with real-time messaging and graph-based friend suggestions.',
    description: 'Built a social media platform with real-time messaging and responsive UI state management using TanStack Query and Zustand. Friend recommendations explore connections in the follow graph.',
    highlights: ['Designed friend suggestions using two-hop breadth-first search.', 'Implemented real-time messaging with Socket.io.', 'Built a presigned-URL upload flow for direct image uploads to Cloudflare R2.'],
    stack: ['TypeScript', 'React', 'Express', 'PostgreSQL', 'Socket.io', 'JWT', 'TanStack Query', 'Zustand', 'Cloudflare R2'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'mycloud', title: 'myCloud', category: 'Full stack / Storage', date: 'May 2026', status: 'Done',
    summary: 'Subscription-based cloud storage with direct file uploads.',
    description: 'Built a cloud storage application using Firebase Auth and Firestore for user management, Cloudflare R2 for file storage, and Stripe for subscriptions.',
    highlights: ['Integrated Firebase authentication and user management.', 'Used presigned URLs for uploads directly to Cloudflare R2.', 'Integrated Stripe for subscription-based storage.'],
    stack: ['TypeScript', 'React', 'Next.js', 'Firebase', 'Firestore', 'Stripe', 'Cloudflare R2'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'salary-prediction-model', title: 'Salary Prediction Model', category: 'Machine learning', date: 'March 2026', status: 'Done',
    summary: 'An end-to-end machine learning pipeline for predicting job salaries.',
    description: 'Built a salary prediction pipeline using Kaggle data, geographic clustering, and structured feature preprocessing. Evaluated linear regression and random forest models with cross-validation.',
    highlights: ['Used KMeans for geographic clustering.', 'Preprocessed data with a scikit-learn ColumnTransformer.', 'Evaluated models using 10-fold cross-validated RMSE.'],
    stack: ['Python', 'Jupyter', 'scikit-learn', 'pandas'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'navigation-system', title: 'Navigation System', category: 'Algorithms / C++', date: 'March 2025', status: 'Done',
    summary: 'Finding the shortest route between two points with graph algorithms.',
    description: 'Built a C++ program to calculate the shortest route between two points using Dijkstra’s algorithm and prototyped an A* implementation.',
    highlights: ['Implemented shortest-path calculation with Dijkstra’s algorithm.', 'Prototyped A* for heuristic-based route finding.'],
    stack: ['C++', 'Dijkstra’s algorithm', 'A*'], screenshots: [], websiteUrl: null,
  },
  {
    slug: 'six-degrees-of-separation', title: '6 Degrees of Separation', category: 'Algorithms / Graphs', date: 'December 2024', status: 'Done',
    summary: 'Exploring connections in the IMDb dataset with breadth-first search.',
    description: 'Implemented breadth-first search on the IMDb dataset to demonstrate the six degrees of separation concept. The C++ implementation uses graphs, hash maps, and vectors.',
    highlights: ['Traversed connections using breadth-first search.', 'Represented and searched the dataset using graphs, hash maps, and vectors.'],
    stack: ['C++', 'Breadth-first search', 'Graphs', 'Hash maps'], screenshots: [], websiteUrl: null,
  },
]
