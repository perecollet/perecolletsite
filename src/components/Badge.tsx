import type { Skill } from '../types';

interface BadgeProps {
  name: string;
  category?: Skill['category'];
  size?: 'sm' | 'md';
}

const categoryClass: Record<Skill['category'], string> = {
  Languages: 'badge-languages',
  Frameworks: 'badge-frameworks',
  Architecture: 'badge-architecture',
  "Databases & Caching": 'badge-databases',
  Testing: 'badge-testing',
  "Resilience & Observability":'badge-resilience',
  Security:'badge-security',
  "DevOps & Tools":'badge-devops',
};

export function Badge({ name, category, size = 'sm' }: BadgeProps) {
  const colorClass = category ? categoryClass[category] : 'badge-other';
  return (
    <span className={`badge ${colorClass} badge-${size}`}>{name}</span>
  );
}
