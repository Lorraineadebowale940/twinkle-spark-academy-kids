import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Art = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Art Program</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Discover and develop visual arts skills through exploration, expression, and creativity.
            </p>
            
            {/* Content will go here */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Our Art Program is Coming Soon!</h2>
              <p className="mb-4">
                We're currently developing an incredible art program that will inspire creativity, 
                build technical skills, and provide a supportive environment for artistic expression.
              </p>
              <p>
                Check back soon for details about our curriculum, teaching approach, and registration information.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
