import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload, FiExternalLink, FiMail } from 'react-icons/fi';

import type { SocialLink } from '@/types/portfolio';

type SocialLinksProps = {
  links: SocialLink[];
};

function getLinkIcon(label: string) {
  if (label === 'GitHub') {
    return <FaGithub aria-hidden="true" className="size-4" />;
  }

  if (label === 'LinkedIn') {
    return <FaLinkedinIn aria-hidden="true" className="size-4" />;
  }

  if (label === 'E-mail') {
    return <FiMail aria-hidden="true" className="size-4" />;
  }

  if (label === 'Baixar currículo') {
    return <FiDownload aria-hidden="true" className="size-4" />;
  }

  return <FiExternalLink aria-hidden="true" className="size-4" />;
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Links sociais">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noopener noreferrer' : undefined}
          download={link.download}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-[11px] font-bold uppercase text-text no-underline transition duration-200 ease-portfolio hover:-translate-y-px hover:border-border-strong hover:bg-hover active:translate-y-0 active:bg-active"
        >
          {getLinkIcon(link.label)}
          {link.label}
        </a>
      ))}
    </div>
  );
}
