import type { GithubLanguagesResponse } from '@/types/github';

const readmeTitleRegex = /^#\s.+$/gm;
const markdownSyntaxRegex = /[#>*_`[\]()]/g;
const multipleSpacesRegex = /\s+/g;

const knownTechnologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'Next.js',
  'Vite',
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'PostgreSQL',
  'Prisma',
  'Docker',
  'Git',
  'GitHub',
];

const technologyAliases: Record<string, string> = {
  node: 'Node.js',
  nodejs: 'Node.js',
  'node.js': 'Node.js',
  next: 'Next.js',
  nextjs: 'Next.js',
  'next.js': 'Next.js',
  tailwind: 'Tailwind CSS',
  tailwindcss: 'Tailwind CSS',
  postgres: 'PostgreSQL',
  postgresql: 'PostgreSQL',
  js: 'JavaScript',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  typescript: 'TypeScript',
};

export function getReadmeSummary(readme: string | null) {
  if (!readme) {
    return null;
  }

  const cleanReadme = readme
    .replace(readmeTitleRegex, '')
    .replace(markdownSyntaxRegex, '')
    .replace(multipleSpacesRegex, ' ')
    .trim();

  if (!cleanReadme) {
    return null;
  }

  const firstSentence = cleanReadme.split('. ')[0];

  if (firstSentence.length <= 180) {
    return firstSentence.endsWith('.') ? firstSentence : `${firstSentence}.`;
  }

  return `${firstSentence.slice(0, 177).trim()}...`;
}

export function normalizeTechnologies(
  languages: GithubLanguagesResponse,
  topics: string[],
  readme: string | null
) {
  const technologies = new Set<string>();

  Object.keys(languages).forEach((language) => {
    technologies.add(language);
  });

  topics.forEach((topic) => {
    const normalizedTopic = normalizeTechnologyName(topic);

    if (normalizedTopic) {
      technologies.add(normalizedTopic);
    }
  });

  knownTechnologies.forEach((technology) => {
    const normalizedReadme = readme?.toLowerCase() ?? '';
    const normalizedTechnology = technology.toLowerCase();

    if (normalizedReadme.includes(normalizedTechnology)) {
      technologies.add(technology);
    }
  });

  return Array.from(technologies).sort((firstTechnology, secondTechnology) =>
    firstTechnology.localeCompare(secondTechnology)
  );
}

function normalizeTechnologyName(value: string) {
  const normalizedValue = value.toLowerCase().replaceAll('-', '');

  return technologyAliases[normalizedValue] ?? formatTechnologyName(value);
}

function formatTechnologyName(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(' ');
}
