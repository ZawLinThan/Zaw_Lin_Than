import assert from 'node:assert/strict'
import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { MemoryRouter } from 'react-router-dom'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx')
  const { projects } = await server.ssrLoadModule('/src/data/projects.ts')
  const render = (path) => renderToString(createElement(MemoryRouter, { initialEntries: [path] }, createElement(App)))
  for (const [path, title] of [['/', 'Zaw Lin Than'], ['/about', 'Learning how things think.'], ['/projects', 'Things I’ve built.'], ['/experience', 'Building with people.'], ['/contact', 'Ready to learn.']]) {
    assert.ok(render(path).includes(title), `${path} renders its page`)
  }
  const listing = render('/projects')
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length)
  for (const project of projects) {
    assert.ok(listing.includes(`href="/projects/${project.slug}"`))
    const detail = render(`/projects/${project.slug}`)
    assert.ok(detail.includes(project.title))
    assert.ok(detail.includes(project.status))
    assert.ok(detail.includes('Technologies &amp; frameworks'))
    assert.ok(detail.includes('Screenshots haven’t been added'))
    assert.ok(detail.includes('A live website link hasn’t been added'))
  }
  assert.ok(render('/projects/unknown').includes('This page isn’t here.'))
  assert.ok(render('/unknown').includes('This page isn’t here.'))
  // Exercise populated media/link states as well as the missing-data state.
  projects[0].websiteUrl = 'https://example.com/project'
  projects[0].screenshots = [{ src: '/test-screenshot.png', alt: 'Study dashboard', caption: 'Dashboard preview' }]
  const populated = render(`/projects/${projects[0].slug}`)
  assert.ok(populated.includes('href="https://example.com/project"'))
  assert.ok(populated.includes('alt="Study dashboard"'))
  assert.ok(populated.includes('Dashboard preview'))
  console.log('Verified 5 main pages, 7 project pages, 2 missing routes, and populated screenshot/website states.')
} finally {
  await server.close()
}
