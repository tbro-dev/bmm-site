import Navigation from './component/Navigation';
import Header from './component/Header';
import Portfolio from './component/Portfolio';
import Services from './component/Services';
import About from './component/About';


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
