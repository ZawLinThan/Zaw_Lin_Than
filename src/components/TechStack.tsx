const TechStack = ({ items }: { items: string[] }) => {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}

export default TechStack
