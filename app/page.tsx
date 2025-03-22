import Navbar from "../app/components/Navbar";
import Header from "../app/components/Header";
import About from "../app/components/About";
// import Whatwedo from './components/Whatwedo'
// import Impact from "../app/components/Impact";


// Import Testimonials component
// import Partner from "./components/partner";

import Footer from "../app/components/Footer";
import Hero2 from "../app/components/Hero2";
import BlogSection from "./components/Blog";
import Leaders from "../app/components/Services";
import Messages from "./components/Messages";

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
      <Leaders />
      <Messages />

      
     

      <Hero2 />
      <BlogSection />

      <Footer />
    </>
  );
}
