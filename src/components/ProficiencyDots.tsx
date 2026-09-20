const levels = [1, 2, 3, 4, 5];

const ProficiencyDots = ({
  value,
  skillName,
}: {
  value: 1 | 2 | 3 | 4 | 5;
  skillName: string;
}) => (
  <span
    className="proficiency-dots"
    role="img"
    aria-label={`${skillName} proficiency: ${value} out of 5`}
    title={`Proficiency: ${value}/5`}
  >
    {levels.map((level) => (
      <span
        key={level}
        className={`proficiency-dot${level <= value ? " is-filled" : ""}`}
        aria-hidden="true"
      />
    ))}
  </span>
);

export default ProficiencyDots;
