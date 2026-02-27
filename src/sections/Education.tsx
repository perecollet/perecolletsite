import { SectionTitle } from '../components/SectionTitle';
import { TimelineCard } from '../components/TimelineCard';
import { education } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle>Education</SectionTitle>
        <div className="timeline">
          {education.map((edu, index) => (
            <TimelineCard
              key={edu.id}
              header={edu.institution}
              subheader={edu.degree}
              meta={edu.location}
              dateRange={`${edu.startYear} – ${edu.endYear}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
