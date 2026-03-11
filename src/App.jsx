import { useState, useEffect } from 'react';

import Navbar        from './components/Navbar';
import Hero          from './sections/Hero';
import Services      from './sections/Services';
import StatsSection  from './sections/StatsSection';
import Portfolio     from './sections/Portfolio';
import Testimonials  from './sections/Testimonials';
import Subscribe     from './sections/Subscribe';
import Footer        from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar       scrolled={scrolled} />
      <Hero         />
      <Services     />
      <StatsSection />
      <Portfolio    />
      <Testimonials />
      <Subscribe    />
      <Footer       />
    </div>
  );
}

export default App;
