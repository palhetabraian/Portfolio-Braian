import { FeaturedProjects } from '@/components/FeaturedProjects/FeaturedProjects';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { PreviewComponents } from '@/pages/PreviewComponents';
import { GithubProjects } from '@/components/GithubProjects/GithubProjects';


export default function App() {
  if (window.location.pathname === '/components') {
    return <PreviewComponents />;
  }

  return (
    <main className="min-h-screen bg-bg text-text">
      <Header />

      <Hero />

      <FeaturedProjects />

      <GithubProjects />
    </main>
  );
}
