import type { Profile, Experience, Project, Skill, Education } from '../types';

export const profile: Profile = {
  name: 'Pere Collet Montaña',
  title: 'Software Engineer · Backend Developer',
  email: 'perecolletmontana@gmail.com',
  location: 'Argentona, Barcelona',
  summary: `Back-end developer with 5+ years of experience designing and building scalable REST APIs and backend systems, primarily with Java and Spring Boot.
Throughout my career at NTT DATA, I've worked on projects for public institutions such as the Generalitat de Catalunya's health department and the CTTI (Centre de Telecomunicacions i Tecnologies de la Informació), where I developed and maintained critical backend services used by thousands of users.
I care about writing clean, maintainable code and applying solid engineering principles. I enjoy tackling complex technical challenges and collaborating with cross-functional teams to deliver real impact.
Currently open to new opportunities as a Back-end or Software Engineer, preferably working with Java-based stacks in product-oriented or technically challenging environments.`,
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
    id: 'career-break',
    company: 'Career Break',
    role: 'Software Engineer',
    location: 'Barcelona',
    startDate: 'Apr 2025',
    endDate: 'Present',
    achievements: [
      {
        description: 'Took a sabbatical to invest in professional growth through independent study and hands-on personal projects. Used this time to deepen expertise in areas of strategic interest, build side projects from the ground up, and maintain a proactive approach to learning outside of a traditional workplace setting.',
        stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'REST API', 'Git', 'DDD', 'Microservices', 'Hexagonal architecture'],
      },
    ],
  },
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
        stack: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Spring Data JPA', 'REST API', 'Git'],
      },
      {
        description: 'Built a dedicated COVID-19 sample tracking application, enhancing traceability of samples for investigation purposes.',
        stack: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Spring Data JPA', 'REST API', 'Git'],
      },
      {
        description: 'Automated XML ingestion from SFTP servers.',
        stack: ['Java', 'Spring', 'WebLogic', 'Oracle SQL', 'Spring Data JPA', 'Git'],
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
    url:'https://github.com/somhackathon19/somhackathon19-kteam',
  },
  {
    id: 'homelab',
    name: 'Homelab',
    description:
      'Personal homelab running on a mini PC. All services are containerised with Docker Compose, exposed via a Cloudflare Tunnel (no port forwarding needed), and routed by Caddy.',
    url:'https://github.com/perecollet/homelab',
  },
  {
    id: 'perecolletsite',
    name: 'perecolletsite',
    description:
      'Personal portfolio and CV for Pere Collet Montaña — Backend Engineer specializing in Java · Spring Boot · Barcelona.',
    url:'https://github.com/perecollet/perecolletsite',
  },
  {
    id: 'impostor-game',
    name: 'impostor-game (in-progress)',
    description:
      'Multiplayer social deduction word game built as a Java/Spring Boot microservices system — hexagonal architecture, DDD, and TDD as core learning goals.',
    url:'https://github.com/perecollet/impostor-game',
  },
  {
    id: 'appesdeveniments',
    name: 'app-esdeveniments',
    description:
      'Full-stack mobile app for managing sporting and leisure events — create, join, and generate PDF ▎ registration forms. Bachelors Final Project.',
    url:'https://github.com/perecollet/app-esdeveniments',
  },
  {
    id: 'mangojavachallenge',
    name: 'mango-java-challenge',
    description:
      'Spring Boot 4 / Java 21 REST API for product price history, with PostgreSQL exclusion constraints, Caffeine caching and two-layer overlap validation.',
    url:'https://github.com/perecollet/mango-java-challenge',
  },
  {
    id: 'pokemonapi',
    name: 'pokemon-api',
    description:
      'Pokémon ranking REST API in Spring Boot 3.5 / Java 21 with hexagonal architecture, incremental PokéAPI sync, Caffeine cache, and Resilience4j',
    url:'https://github.com/perecollet/pokemon-api',
  },

];

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'Languages' },
  { name: 'PL/SQL', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Frameworks
  { name: 'Spring Boot', category: 'Frameworks' },
  { name: 'Spring Data JPA', category: 'Frameworks' },
  { name: 'Hibernate', category: 'Frameworks' },
  { name: 'Spring Security', category: 'Frameworks' },
  { name: 'React.js', category: 'Frameworks' },

  // Architecture
  { name: 'Hexagonal Architecture', category: 'Architecture' },
  { name: 'Domain-Driven Design (DDD)', category: 'Architecture' },
  { name: 'Microservices', category: 'Architecture' },
  { name: 'Layered Architecture', category: 'Architecture' },
  { name: 'REST API design', category: 'Architecture' },
  { name: 'CQRS', category: 'Architecture' },

  // Databases & Caching
  { name: 'PostgreSQL', category: 'Databases & Caching' },
  { name: 'Oracle SQL', category: 'Databases & Caching' },
  { name: 'Caffeine', category: 'Databases & Caching' },
  { name: 'Redis', category: 'Databases & Caching' },

  // Testing
  { name: 'JUnit', category: 'Testing' },
  { name: 'Mockito', category: 'Testing' },
  { name: 'Testcontainers', category: 'Testing' },
  { name: 'JaCoCo', category: 'Testing' },
  { name: 'JMeter', category: 'Testing' },

  // Resilience & Observability
  { name: 'Resilience4j', category: 'Resilience & Observability' },
  { name: 'Prometheus', category: 'Resilience & Observability' },
  { name: 'Micrometer', category: 'Resilience & Observability' },
  { name: 'Grafana', category: 'Resilience & Observability' },

  // Security
  { name: 'JWT', category: 'Security' },
  { name: 'OAuth2', category: 'Security' },
  { name: 'RS256', category: 'Security' },

  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools' },
  { name: 'Docker Compose', category: 'DevOps & Tools' },
  { name: 'Git', category: 'DevOps & Tools' },
  { name: 'Maven', category: 'DevOps & Tools' },
  { name: 'Jenkins', category: 'DevOps & Tools' },
  { name: 'CI/CD', category: 'DevOps & Tools' },
  { name: 'Caddy', category: 'DevOps & Tools' },
  { name: 'n8n', category: 'DevOps & Tools' },
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
