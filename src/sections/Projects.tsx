import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { projects } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle>Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              <div className="project-card-top">
                <div className="project-icon" aria-hidden="true">
                  <span className="project-icon-bracket">{'{}'}</span>
                </div>
                {project.award && (
                  <span className="project-award">{project.award}</span>
                )}
              </div>
              <div className="project-card-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p className="project-description">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
