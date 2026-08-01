import type { IconType } from 'react-icons';
import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from 'react-icons/si';

type PrimaryStackProps = {
  items: string[];
};

const stackIcons: Record<string, IconType> = {
  React: FaReact,
  TypeScript: SiTypescript,
  'Node.js': FaNodeJs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  Prisma: SiPrisma,
  Git: FaGitAlt,
  GitHub: FaGithub,
};

export function PrimaryStack({ items }: PrimaryStackProps) {
  return (
    <ul className="flex flex-wrap gap-6">
      {items.map((item) => {
        const Icon = stackIcons[item];
        return (
          <li
            className="grid min-w-20 justify-item-center gap-3 text-center"
            key={item}
          >
            <span className="grid size-12 place-items-center rounded-lg border border-border-strong bg-surface text-xl text-text transition duration-200 ease-portfolio hover:-translate-y-0.5 hover:bg-hover">
              {Icon ? <Icon aria-hidden="true" /> : item.slice(0, 2)}
            </span>

            <span className="text-[11px] font-bold text-text">{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
