interface TechStackProps {
  items: string[]
  limit?: number
}

const TechStack = ({ items, limit }: TechStackProps) => {
  const visibleItems = limit === undefined ? items : items.slice(0, limit)
  const remainingCount = items.length - visibleItems.length

  return (
    <ul className="tags" aria-label="Technologies">
      {visibleItems.map(item => <li key={item}>{item}</li>)}
      {remainingCount > 0 && (
        <li aria-label={`${remainingCount} more technologies`} title={`${remainingCount} more technologies`}>...</li>
      )}
    </ul>
  )
}

export default TechStack
