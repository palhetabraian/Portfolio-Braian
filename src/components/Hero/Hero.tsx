import { FiMessageCircle } from 'react-icons/fi';

import { PrimaryStack } from '@/components/PrimaryStack/PrimaryStack';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { profile, socialLinks, stackItems } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-5 pb-20 pt-32 sm:px-6 md:pb-32 md:pt-40"
      id="inicio"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
        01 / Apresentação
      </p>

      <p className="mb-6 text-sm text-text">$ {profile.role}</p>

      <h1 className="text-4xl font-bold tracking-[-2px] sm:text-5xl md:text-7xl">
        {profile.name}
      </h1>

      <p className="mt-8 max-w-3xl text-base font-bold leading-relaxed text-text md:text-lg">
        {profile.intro}
      </p>

      <div className="mt-8 flex flex-col items-start gap-4">
        <a
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-text px-6 text-center text-[11px] font-bold text-bg no-underline transition duration-200 ease-portfolio hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 sm:w-auto"
          href={profile.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <FiMessageCircle aria-hidden="true" />
          Enviar mensagem no WhatsApp
        </a>

        <SocialLinks links={socialLinks} />
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">
          Stack principal
        </p>

        <PrimaryStack items={stackItems} />
      </div>
    </section>
  );
}
