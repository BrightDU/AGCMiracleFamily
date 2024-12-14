import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
// import Whatwedo from './components/Whatwedo'
import Impact from './components/Impact'
import Services from './components/Services';
import Gallary from './components/Gallary'

import Testimonials from './components/Testimonials'; // Import Testimonials component


import Footer from './components/Footer';
import Hero2 from './components/Hero2';


export const metadata = {
  title: 'Carelife Foundation',
  description: ' NGO, Charity, Support, Intervention programs, Nigeria,UK.', // Updated description
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Whatwedo/> */}
      <Impact/>
      <Services />
      <Gallary/>
      
      
      <Testimonials /> 
      
      <Hero2 />
      
      <Footer />
    </>
  );
}


