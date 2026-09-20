const courses = [
  'Data Structures & Algorithms',
  'Linear Algebra',
  'Discrete Math',
  'Multivariable Calculus',
  'Digital System Design',
];

const languages = [
  { name: 'English', level: 'Proficient' },
  { name: 'Mandarin', level: 'Proficient' },
  { name: 'Burmese', level: 'Native' },
];

const AcademicBackground = () => (
  <div className="background-panels">
    <section className="background-panel" aria-labelledby="coursework-title">
      <div className="background-panel-heading">
        <span className="background-symbol" aria-hidden="true">≡</span>
        <h2 id="coursework-title">Completed Coursework</h2>
      </div>
      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={course}>
            <span className="course-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span>{course}</span>
          </li>
        ))}
      </ul>
    </section>
    <section className="background-panel language-panel" aria-labelledby="languages-title">
      <div className="background-panel-heading">
        <span className="background-symbol" aria-hidden="true">文</span>
        <h2 id="languages-title">Spoken Languages</h2>
      </div>
      <dl className="language-list">
        {languages.map(language => (
          <div key={language.name}>
            <dt>{language.name}</dt>
            <dd>{language.level}</dd>
          </div>
        ))}
      </dl>
    </section>
  </div>
);

export default AcademicBackground;
