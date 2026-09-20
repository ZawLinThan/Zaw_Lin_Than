import type { ReactNode } from 'react'
const SectionHeading = ({ label, title, children }: { label: string; title: string; children?: ReactNode }) => {
  return <header className="page-heading">
    <p className="eyebrow">{label}</p>
    <h1>{title}</h1>{children && <div className="page-intro">{children}</div>}</header>
}

export default SectionHeading
