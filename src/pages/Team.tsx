
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
