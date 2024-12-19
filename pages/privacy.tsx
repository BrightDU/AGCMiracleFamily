'use client';


import 'tailwindcss/tailwind.css'; // This should be in your globals or _app.js
import  PrivacyPolicy from '../app/components/privacy';
import Navbar from '../app/components/Navbar';
import favicon from '../app/public/favicon.ico'; // Explicit import for favicon
import Head from 'next/head'; // Import the Head component


const Privacy = () => {
 
  return (
    <>
     {/* Add Favicon and Title */}
     <Head>
        {/* Add global favicon link for SSR */}
        <link rel="icon" href={favicon.src} type="image/x-icon" sizes="any" />
        <meta name="description" content="NGO, Charity, Support, Intervention programs, Nigeria, UK." />
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <PrivacyPolicy />
      
    </>
  );
};

export default Privacy;










