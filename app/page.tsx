import Navigation from '@/component/Navigation';
import Header from '@/component/Header';
import Portfolio from '@/component/Portfolio';
import Services from '@/component/Services';
import About from '@/component/About';
import Footer from '@/component/Footer';
import Contact from '@/component/Contact';


export default function HomePage() {
  return (    
      <div>
        <Navigation /> {/* done */}        
        <Header /> {/* done */}
        <Services /> {/* done */}
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>  
  );
}
