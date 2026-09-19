export default function TechStack({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>
}
