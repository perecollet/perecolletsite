import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Badge } from '../components/Badge';
import { profile } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle>About</SectionTitle>
        <div className="about-grid">
          <motion.div
            className="about-bio"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="about-summary">{profile.summary}</p>
            <div className="about-facts">
              <div className="about-fact">
                <span className="about-fact-label">Location</span>
                <span className="about-fact-value">{profile.location}</span>
              </div>
              <div className="about-fact">
                <span className="about-fact-label">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="about-fact-value about-fact-link"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </motion.div>

          <div className="about-chips-col">
            <motion.div
              className="about-chip-group"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="about-chip-label">// Languages</h3>
              <div className="chip-row">
                {profile.languages.map((lang) => (
                  <span key={lang.name} className="chip chip-lang">
                    {lang.name}
                    <span className="chip-level">{lang.level}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="about-chip-group"
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="about-chip-label">// Interests</h3>
              <div className="chip-row">
                {profile.interests.map((interest) => (
                  <Badge key={interest} name={interest} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
