import { motion } from 'framer-motion';

interface TimelineCardProps {
  header: string;
  subheader: string;
  meta: string;
  dateRange: string;
  children?: React.ReactNode;
  index: number;
}

export function TimelineCard({
  header,
  subheader,
  meta,
  dateRange,
  children,
  index,
}: TimelineCardProps) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="timeline-dot" aria-hidden="true" />
      <div className="timeline-card">
        <div className="timeline-card-header">
          <div className="timeline-card-titles">
            <h3 className="timeline-company">{header}</h3>
            <p className="timeline-role">{subheader}</p>
            <p className="timeline-meta">{meta}</p>
          </div>
          <span className="timeline-date">{dateRange}</span>
        </div>
        {children && <div className="timeline-card-body">{children}</div>}
      </div>
    </motion.div>
  );
}
