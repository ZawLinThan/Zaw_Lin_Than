interface SectionLabelProps {
  number: string
  children: string
}

const SectionLabel = ({ number, children }: SectionLabelProps) => (
  <h2 className="section-label"><span>{number}</span>{' '}{children}</h2>
)

export default SectionLabel
