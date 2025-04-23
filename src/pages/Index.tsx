
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import AfterSchool from '../components/AfterSchool';
import BigBangDays from '../components/BigBangDays';
import SpecialNeeds from '../components/SpecialNeeds';
import FeaturedContent from '../components/FeaturedContent';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div id="programs">
          <Programs />
        </div>
        <div id="after-school">
          <AfterSchool />
        </div>
        <BigBangDays />
        <div id="special-needs">
          <SpecialNeeds />
        </div>
        <FeaturedContent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
