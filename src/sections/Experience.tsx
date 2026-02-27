import { SectionTitle } from '../components/SectionTitle';
import { Badge } from '../components/Badge';
import { TimelineCard } from '../components/TimelineCard';
import { experiences } from '../data/portfolio';
import type { Skill } from '../types';

const TECH_CATEGORY: Record<string, Skill['category']> = {
  Java: 'Backend',
  'Spring Boot': 'Backend',
  'PL/SQL': 'Backend',
  JPA: 'Backend',
  'REST API': 'Backend',
  WebLogic: 'Backend',
  'React.js': 'Frontend',
  TypeScript: 'Frontend',
  HTML: 'Frontend',
  CSS: 'Frontend',
  PostgreSQL: 'Database',
  'Oracle SQL': 'Database',
  SQL: 'Database',
  Git: 'DevOps',
  'Talend Studio': 'Other',
  XML: 'Other',
  SFTP: 'Other',
};

function getCategory(tech: string): Skill['category'] {
  return TECH_CATEGORY[tech] ?? 'Other';
}

export function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineCard
              key={exp.id}
              header={exp.company}
              subheader={exp.role}
              meta={exp.location}
              dateRange={`${exp.startDate} – ${exp.endDate}`}
              index={index}
            >
              <ul className="achievement-list" role="list">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="achievement-item">
                    <p className="achievement-desc">
                      <span className="accent" aria-hidden="true">&gt;</span>{' '}
                      {ach.description}
                    </p>
                    <div className="badge-row">
                      {ach.stack.map((tech) => (
                        <Badge
                          key={tech}
                          name={tech}
                          category={getCategory(tech)}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </TimelineCard>
          ))}
        </div>
      </div>
    </section>
  );
}
