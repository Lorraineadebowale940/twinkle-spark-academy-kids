
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import AfterSchool from '../components/AfterSchool';
import BigBangDays from '../components/BigBangDays';
import SpecialNeeds from '../components/SpecialNeeds';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <AfterSchool />
        <BigBangDays />
        <SpecialNeeds />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
