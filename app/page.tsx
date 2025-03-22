import Navbar from "../app/components/Navbar";
import Header from "../app/components/Header";
import About from "../app/components/About";
// import Whatwedo from './components/Whatwedo'
// import Impact from "../app/components/Impact";
import Services from "../app/components/Services";
import Gallery from "../app/components/Gallery";

// Import Testimonials component
// import Partner from "./components/partner";

import Footer from "../app/components/Footer";
import Hero2 from "../app/components/Hero2";
import BlogSection from "./components/Blog";

// export const metadata = {
//   title: 'Carelife Foundation',
//   description: ' NGO, Charity, Support, Intervention programs, Nigeria,UK.', // Updated description
//   icons: {
//     icon: '/favicon.ico',
//   },
// };

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Whatwedo/> */}
      {/* <Impact /> */}
      <Services />
      <Gallery />

      
     

      <Hero2 />
      <BlogSection />

      <Footer />
    </>
  );
}
