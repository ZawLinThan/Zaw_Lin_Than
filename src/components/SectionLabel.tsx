interface SectionLabelProps {
  number: string
  children: string
}

const SectionLabel = ({ number, children }: SectionLabelProps) => (
  <h1 className="section-label"><span>{number}</span>{' '}{children}</h1>
)

export default SectionLabel
