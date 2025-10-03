import Navigation from '@/app/component/Navigation';
import Header from '@/app/component/Header';
import Portfolio from '@/app/component/Portfolio';
import Services from '@/app/component/Services';
import About from '@/app/component/About';


export default function HomePage() {
  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <Services />
      <About />
    </>
  );
}
