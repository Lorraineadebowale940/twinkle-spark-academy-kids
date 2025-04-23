
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
import TeamSection from '../components/TeamSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <TeamSection 
          name="Lorraine Adebowale"
          role="Founder & Creative Director"
          image="https://res.cloudinary.com/dydlkejl0/image/upload/v1737651234/Lorraine_t6eo0p.jpg"
          bio={`With over 15 years of experience in inclusive learning environments, Lorraine has taught and directed performances worldwide at prestigious venues including The Royal Albert Hall, the O2 Arena, London Palladium, and Disney. Her passion for accessible arts education has transformed countless lives.

Lorraine trained with Bigfoot Arts, Chickenshed, and the Candoco company to ensure learning is accessible and empowering for every individual, regardless of their needs, abilities, or disabilities.

"I believe that creative expression is not a luxury but a necessity for every child's development. When we remove barriers to arts participation, we unlock limitless potential in young people who may struggle in traditional learning environments."

Key Achievements:
- Directed inclusive performances at The Royal Albert Hall
- Led workshops for educators in 15+ countries
- Developed pioneering sensory-inclusive curriculum
- Mentored over 300 young leaders from diverse backgrounds`}
        />
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
