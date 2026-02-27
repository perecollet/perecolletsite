import type { Skill } from '../types';

interface BadgeProps {
  name: string;
  category?: Skill['category'];
  size?: 'sm' | 'md';
}

const categoryClass: Record<Skill['category'], string> = {
  Backend: 'badge-backend',
  Frontend: 'badge-frontend',
  Database: 'badge-database',
  DevOps: 'badge-devops',
  Other: 'badge-other',
};

export function Badge({ name, category, size = 'sm' }: BadgeProps) {
  const colorClass = category ? categoryClass[category] : 'badge-other';
  return (
    <span className={`badge ${colorClass} badge-${size}`}>{name}</span>
  );
}
