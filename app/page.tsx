import Navigation from '@/component/Navigation';
import Header from '@/component/Header';
import Portfolio from '@/component/Portfolio';
import Services from '@/component/Services';
import About from '@/component/About';
import Footer from '@/component/Footer';
import Contact from '@/component/Contact';
import { Container } from '@mui/material';


export default function HomePage() {
  return (
    <Container>
     <div >        
        <div >
          <div>          
            <div>Busy Making Media</div>
            <h1>Busy Making Media</h1>
            <p>Services coming soon. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:tyler@busymakingmedia.onmicrosoft.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>        
      </div>
    </Container>
  );
}
