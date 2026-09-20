import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import PageMeta from '../components/PageMeta'
export default function NotFoundPage() {
  return <div className="wrap page">
    <PageMeta title="Page not found" description="This portfolio page could not be found." />
    <SectionHeading label="404" title="This page isn’t here.">
      <p>The link may have changed. You can browse all projects below.</p>
    </SectionHeading>
    <Link className="button" to="/projects">Explore projects ↗</Link>
  </div>
}
