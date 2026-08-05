import { FeaturedProjects } from '@/components/FeaturedProjects/FeaturedProjects';
import { Footer } from '@/components/Footer/Footer';
import { GithubProjects } from '@/components/GithubProjects/GithubProjects';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { PreviewComponents } from '@/pages/PreviewComponents';

export default function App() {
  if (window.location.pathname === '/components') {
    return <PreviewComponents />;
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <Header />

      <div className="grid gap-8">
        <Hero />

        <FeaturedProjects />

        <GithubProjects />
      </div>

      <Footer />
    </main>
  );
}
