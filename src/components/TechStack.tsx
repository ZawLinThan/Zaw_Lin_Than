interface TechStackProps {
  items: string[];
}

const TechStack = ({ items }: TechStackProps) => {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  );
};

export default TechStack;
