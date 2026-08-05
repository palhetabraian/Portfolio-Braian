export type Profile = {
  brand: string;
  name: string;
  whatsappUrl: string;
};

export type SocialLink = {
  id: 'github' | 'linkedin' | 'email' | 'resume';
  href: string;
  isExternal: boolean;
  download?: boolean;
};

export type FeaturedProject = {
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl: string;
  thumbnailLabel: string;
};
