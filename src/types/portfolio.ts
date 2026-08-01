export type Profile = {
  brand: string;
  name: string;
  role: string;
  intro: string;
  whatsappUrl: string;
  copyright: string;
};

export type SocialLink = {
  label: string;
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
