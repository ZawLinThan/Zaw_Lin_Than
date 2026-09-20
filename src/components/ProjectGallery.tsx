import type { Project } from '../data/projects'
const ProjectGallery = ({ screenshots }: { screenshots: Project['screenshots'] }) => {
  return <section className="detail-section">
    <h2>Screenshots</h2>{screenshots.length ? <div className="screenshot-gallery">{screenshots.map(image => <figure key={image.src}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open screenshot: ${image.alt}`}>
        <img src={image.src} alt={image.alt} loading="lazy" />
      </a>{image.caption && <figcaption>{image.caption}</figcaption>}</figure>)}</div> : <p className="empty-state">Screenshots haven’t been added for this project yet.</p>}</section>
}

export default ProjectGallery
