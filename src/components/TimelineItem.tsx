interface TimelineItemProps {
  date: string
  title: string
  organization: string
  description: string
}
const TimelineItem = ({ date, title, organization, description }: TimelineItemProps) => {
  return (
    <article>
      <div>
        <span className="fact-label">{date}</span>
        <h3>{title}</h3>
        <span>{organization}</span>
      </div>
      <p>{description}</p>
    </article>
  )
}

export default TimelineItem
