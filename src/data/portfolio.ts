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
    title: 'Projeto em destaque 01',
    description: 'Conteúdo pendente. Este projeto será definido manualmente.',
    technologies: ['Tecnologias'],
    repositoryUrl: '',
    demoUrl: '',
    thumbnailLabel: 'Thumbnail do projeto',
  },
  {
    title: 'Projeto em destaque 02',
    description: 'Conteúdo pendente. Este projeto será definido manualmente.',
    technologies: ['Tecnologias'],
    repositoryUrl: '',
    demoUrl: '',
    thumbnailLabel: 'Thumbnail do projeto',
  },
];
