import { SectionTitle } from '../components/SectionTitle';
import { Badge } from '../components/Badge';
import { TimelineCard } from '../components/TimelineCard';
import { experiences } from '../data/portfolio';
import type { Skill } from '../types';

const TECH_CATEGORY: Record<string, Skill['category']> = {
  Java: 'Languages',
  'PL/SQL': 'Languages',
  SQL: 'Languages',
  TypeScript: 'Languages',
  HTML: 'Languages',
  CSS: 'Languages',
  XML: 'Languages',
  Spring: 'Frameworks',
  'Spring Boot': 'Frameworks',
  'Spring Data JPA': 'Frameworks',
  Hibernate: 'Frameworks',
  'React.js': 'Frameworks',
  'REST API': 'Architecture',
  PostgreSQL: 'Databases & Caching',
  'Oracle SQL': 'Databases & Caching',
  Git: 'DevOps & Tools',
  WebLogic: 'DevOps & Tools',
  'Talend Studio': 'DevOps & Tools',
  SFTP: 'DevOps & Tools',
  DDD:'Architecture',
  Microservices:'Architecture',
  'Hexagonal architecture':'Architecture'
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
