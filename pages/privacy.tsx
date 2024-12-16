'use client';

import React, { useState } from 'react';
import type { StaticImageData } from 'next/image';

import 'tailwindcss/tailwind.css'; // This should be in your globals or _app.js
import  PrivacyPolicy from '../app/components/privacy';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';


const Privacy = () => {
 
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default Privacy;










