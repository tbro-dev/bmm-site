// app/page.tsx

import Navigation from '@/component/views/Navigation';
import Header from '@/component/views/Header';
import Portfolio from '@/component/views/Portfolio';
import Services from '@/component/views/Services';
import About from '@/component/views/About';
import Footer from '@/component/views/Footer';
import Contact from '@/component/views/Contact';
import clientApp from '@/component/api/clientApp';

export default async function HomePage() {
  const appConfig = clientApp();

  return (
    <>
      <Navigation />
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Contact url={appConfig.teams} />
      <Footer />
    </>
  );
}
