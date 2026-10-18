import type { Project } from "../data/projects";
const ProjectGallery = ({
  screenshots,
  video,
}: {
  screenshots: Project["screenshots"];
  video?: Project["video"];
}) => {
  return (
    <section className="detail-section">
      <h2>Screenshots</h2>

      {screenshots.length || video ? (
        <div className="screenshot-gallery">
          {video && (
            <figure>
              <iframe
                className="project-video"
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                allow="fullscreen"
                allowFullScreen
              />
              <figcaption>
                {video.title} ·{" "}
                <a href={video.url} target="_blank" rel="noreferrer">
                  Open in Google Drive ↗
                </a>
              </figcaption>
            </figure>
          )}
          {screenshots.map((image) => (
            <figure key={image.src}>
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open screenshot: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </a>
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Screenshots haven’t been added for this project yet.
        </p>
      )}
    </section>
  );
};

export default ProjectGallery;
