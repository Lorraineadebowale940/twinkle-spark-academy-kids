
import React from 'react';

const TeamSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Meet the passionate professionals behind Rainbow Spark's creative learning experiences.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <img 
                  className="h-full w-full object-cover" 
                  src="https://res.cloudinary.com/dydlkejl0/image/upload/v1737651234/Lorraine_t6eo0p.jpg" 
                  alt="Lorraine Adebowale" 
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-primary font-semibold">Founder & Creative Director</div>
                <h3 className="mt-1 text-2xl font-bold">Lorraine Adebowale</h3>
                <p className="mt-2 text-gray-600">
                  With over 15 years of experience in creative arts education, Lorraine has dedicated her career to making arts accessible to all children, regardless of background or ability. Her innovative approach blends traditional creative disciplines with modern techniques to engage young minds.
                </p>
                <p className="mt-4 text-gray-600">
                  Lorraine holds qualifications in Drama Education, Special Needs Teaching, and NLP for Children. Her work has been recognized with multiple awards for inclusive creative education.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Specialist Team</h3>
            <p className="mb-4">
              Rainbow Spark works with a diverse team of qualified professionals, including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Professional theatre practitioners with education experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Specialist arts educators with expertise in inclusive teaching methods</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>SEN-trained facilitators who understand diverse learning needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Practicing artists who bring authentic creative industry experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">•</span>
                <span>Child psychologists who help design developmentally appropriate activities</span>
              </li>
            </ul>
            <p className="mt-4">
              All team members are DBS checked, fully insured, and receive regular training in safeguarding and inclusive practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
