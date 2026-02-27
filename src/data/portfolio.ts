import type { Profile, Experience, Project, Skill, Education } from '../types';

export const profile: Profile = {
  name: 'Pere Collet Montaña',
  title: 'Software Engineer · Backend Developer',
  email: 'pcollet@telefonica.net',
  location: 'Argentona, Barcelona',
  summary:
    'Backend-focused Software Engineer with 5+ years of experience building robust Java/Spring Boot applications in the healthcare sector. Passionate about clean code, system reliability, and continuous improvement.',
  languages: [
    { name: 'English', level: 'Intermediate' },
    { name: 'Spanish', level: 'Native' },
    { name: 'Catalan', level: 'Native' },
  ],
  interests: ['Weightlifting', 'Trekking', 'Reading', 'Traveling', 'Boxing'],
  linkedin: 'https://www.linkedin.com/in/pere-collet/',
  github: 'https://github.com/perecollet',
  cvUrl: '/CV_Pere_Collet_en.pdf',
};

export const experiences: Experience[] = [
  {
    id: 'ntt-data',
    company: 'NTT DATA',
    role: 'Software Engineer',
    location: 'Barcelona',
    startDate: 'Sep 2020',
    endDate: 'Apr 2025',
    achievements: [
      {
        description: 'Led updates to support accreditation of new health centers.',
        stack: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'JPA', 'REST API', 'Git'],
      },
      {
        description: 'Built a dedicated COVID-19 sample tracking application, enhancing traceability of samples for investigation purposes.',
        stack: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'JPA', 'REST API', 'Git'],
      },
      {
        description: 'Automated XML ingestion from SFTP servers.',
        stack: ['Java', 'Spring Boot', 'WebLogic', 'Oracle SQL', 'JPA', 'Git'],
      },
      {
        description: 'Adapted COVID-19 app to evolving pandemic scenarios.',
        stack: ['PL/SQL'],
      },
    ],
  },
  {
    id: 'everis-backend',
    company: 'Everis',
    role: 'Backend Developer Intern',
    location: 'Barcelona',
    startDate: 'Oct 2019',
    endDate: 'Jun 2020',
    achievements: [
      {
        description: 'Maintenance of Health Department apps and new feature development in Java.',
        stack: ['Java'],
      },
    ],
  },
  {
    id: 'everis-db',
    company: 'Everis',
    role: 'Database & ETL Intern',
    location: 'Barcelona',
    startDate: 'Nov 2018',
    endDate: 'Aug 2019',
    achievements: [
      {
        description: 'Database maintenance and ETL implementation with Talend Studio.',
        stack: ['Talend Studio', 'SQL'],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'mataroviva',
    name: 'MataroViva',
    description:
      'Web app for creating events to improve public space usage and neighborhood interaction in Mataró.',
    award: '🏆 1st Place · SomHackathon',
    date: 'Feb 2019',
  },
];

export const skills: Skill[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'PL/SQL', category: 'Backend' },
  { name: 'JPA', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'WebLogic', category: 'Backend' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Oracle SQL', category: 'Database' },
  { name: 'Git', category: 'DevOps' },
  { name: 'Talend Studio', category: 'Other' },
  { name: 'XML', category: 'Other' },
  { name: 'SFTP', category: 'Other' },
];

export const education: Education[] = [
  {
    id: 'tecnocampus',
    institution: 'TecnoCampus Mataró-Maresme',
    degree: 'Engineering in Computer Management and Information Systems',
    location: 'Mataró',
    startYear: 2016,
    endYear: 2020,
  },
  {
    id: 'ies-argentona',
    institution: 'IES Argentona',
    degree: 'Baccalaureate in Technology',
    location: 'Argentona',
    startYear: 2014,
    endYear: 2016,
  },
];
