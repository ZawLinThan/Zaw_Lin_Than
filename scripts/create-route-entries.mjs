import { readFile, mkdir, writeFile } from "node:fs/promises";

// Explicit HTML entries make direct visits and refreshes work on static hosting.
const projectSource = await readFile("src/data/projects.ts", "utf8");
const slugs = [...projectSource.matchAll(/slug: '([^']+)'/g)].map(
  (match) => match[1],
);
const routes = [
  "about",
  "projects",
  "experience",
  "contact",
  ...slugs.map((slug) => `projects/${slug}`),
];
const html = await readFile("dist/index.html", "utf8");
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await writeFile(`dist/${route}/index.html`, html);
}
console.log(`Created ${routes.length} direct route entries.`);
