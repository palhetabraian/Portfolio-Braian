import type { FeaturedProject, Profile, SocialLink } from '@/types/portfolio';

export const profile: Profile = {
  brand: 'braian.dev',
  name: 'Braian Nickolas',
  whatsappUrl: 'https://wa.me/5521980758914',
};

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    href: 'https://github.com/palhetabraian',
    isExternal: true,
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/braian-nickolas-4177a7295/',
    isExternal: true,
  },
  {
    id: 'email',
    href: 'mailto:braiannickolas12@gmail.com',
    isExternal: false,
  },
  {
    id: 'resume',
    href: '/assets/curriculo-braian-nickolas.pdf',
    isExternal: false,
    download: true,
  },
];

export const stackItems: string[] = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Docker',
  'Prisma',
  'Git',
  'GitHub',
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'HelpDesk',
    description:
      'HelpDesk é um sistema de atendimento para gerenciar chamados entre clientes, técnicos e administradores, desenvolvido como monorepo com backend em Node.js, Express, PostgreSQL, Prisma, TypeScript, Docker, autenticação JWT e validações com Zod.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Docker',
    ],
    repositoryUrl: 'https://github.com/palhetabraian/HelpDesk',
    demoUrl: '',
    thumbnailUrl: '/assets/projects/HelpDesk.png',
    thumbnailLabel: 'Thumbnail do projeto HelpDesk',
  },
  {
    title: 'Sistema de Reembolso',
    description:
      'Aplicação web para adicionar e visualizar despesas para reembolso, permitindo cadastrar nome, categoria e valor da despesa, listar os registros e exibir o total acumulado.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repositoryUrl: 'https://github.com/palhetabraian/APP-Reembolso',
    demoUrl: '',
    thumbnailUrl: '/assets/projects/Sistema de Reembolso.png',
    thumbnailLabel: 'Thumbnail do projeto Sistema de Reembolso',
  },
];
