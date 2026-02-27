import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Badge } from '../components/Badge';
import { skills } from '../data/portfolio';
import type { Skill } from '../types';

const CATEGORIES: Skill['category'][] = ['Backend', 'Frontend', 'Database', 'DevOps', 'Other'];

const CATEGORY_LABELS: Record<Skill['category'], string> = {
  Backend: '// Backend',
  Frontend: '// Frontend',
  Database: '// Database',
  DevOps: '// DevOps',
  Other: '// Tools',
};

export function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle>Skills</SectionTitle>
        <div className="skills-grid">
          {CATEGORIES.map((category, catIdx) => {
            const group = skills.filter((s) => s.category === category);
            if (group.length === 0) return null;
            return (
              <motion.div
                key={category}
                className="skills-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: catIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="skills-group-label">{CATEGORY_LABELS[category]}</h3>
                <div className="badge-row badge-row-wrap">
                  {group.map((skill) => (
                    <Badge key={skill.name} name={skill.name} category={skill.category} size="md" />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
