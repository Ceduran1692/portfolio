import { Header, Hero, About, Services, Contact, Footer } from '@/components';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}