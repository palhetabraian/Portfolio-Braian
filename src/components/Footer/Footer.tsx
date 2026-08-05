import { FiArrowUp } from 'react-icons/fi';

import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { profile, socialLinks } from '@/data/portfolio';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';

export function Footer() {
  const isBackToTopVisible = useScrollVisibility();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="border-t border-border px-6 py-14 text-text">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <p className="text-sm font-bold">{profile.copyright}</p>

        <SocialLinks links={socialLinks} />
      </div>

      <button
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 right-6 grid size-11 place-items-center rounded-full border border-border bg-surface text-text transition duration-200 ease-portfolio hover:-translate-y-0.5 hover:border-border-strong hover:bg-hover active:translate-y-0 ${
          isBackToTopVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        onClick={scrollToTop}
        type="button"
      >
        <FiArrowUp aria-hidden="true" />
      </button>
    </footer>
  );
}
