import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { profile } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle>Contact</SectionTitle>
        <div className="contact-wrapper">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="contact-headline">
              <span className="accent">&gt;</span> Open to new opportunities
            </p>
            <p className="contact-message">
              I'm open to new opportunities, interesting projects, and good conversations.
              Don't hesitate to reach out — I'd love to connect.
            </p>

            <div className="contact-items">
              <a href={`mailto:${profile.email}`} className="contact-item">
                <span className="contact-icon" aria-hidden="true">📧</span>
                <span className="contact-label">Email</span>
                <span className="contact-value">{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone}`} className="contact-item">
                <span className="contact-icon" aria-hidden="true">📱</span>
                <span className="contact-label">Phone</span>
                <span className="contact-value">{profile.phone}</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">📍</span>
                <span className="contact-label">Location</span>
                <span className="contact-value">{profile.location}</span>
              </div>
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary contact-cta">
              Send a Message
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
