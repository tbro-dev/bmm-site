import Navigation from '@/component/Navigation';
import Header from '@/component/Header';
import Portfolio from '@/component/Portfolio';
import Services from '@/component/Services';
import About from '@/component/About';
import Footer from '@/component/Footer';
import Contact from '@/component/Contact';
import AppAppBar from '@/component/AppAppbar';


export default function HomePage() {
  return (
    <>
      <div>
        <AppAppBar />
        <Navigation />
        <Header />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
