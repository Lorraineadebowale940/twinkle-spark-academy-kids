
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Heart, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-rainbow-purple/10 to-transparent">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Rainbow Spark</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Empowering children through creative arts education that celebrates individuality, builds confidence, and nurtures talent.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Rainbow Spark was founded in 2018 by Lorraine Adebowale, a passionate arts educator with a vision to make creative 
                  education accessible to all children, regardless of background or ability.
                </p>
                <p className="mb-4">
                  After years of witnessing how creative expression transformed children's confidence, emotional wellbeing, and academic 
                  engagement, Lorraine developed the Rainbow Spark approach – a method that blends traditional creative arts with innovative 
                  teaching techniques tailored to diverse learning styles.
                </p>
                <p>
                  What began as after-school workshops in a local community center has grown into a comprehensive creative education 
                  provider, partnering with schools, community organizations, and families across the region to deliver inspiring, 
                  inclusive arts education.
                </p>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://res.cloudinary.com/dydlkejl0/image/upload/v1741904845/pexels-cliff-booth-4058218_u6x2m7.jpg" 
                    alt="Children engaged in creative activities" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rainbow-yellow/20 rounded-full -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-rainbow-blue/20 rounded-full -z-10"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Values</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-rainbow-red mr-2" /> Our Mission
                  </h3>
                  <p className="mb-4">
                    To spark joy, confidence, and creative thinking in every child through accessible, inclusive arts education that 
                    celebrates their unique voice and develops essential life skills.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Star className="h-5 w-5 text-rainbow-yellow mr-2" /> Our Vision
                  </h3>
                  <p className="mb-4">
                    A world where all children have the opportunity to express themselves creatively, building the confidence, 
                    communication skills, and innovative thinking needed to thrive in a complex world.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                <CheckCircle2 className="h-5 w-5 text-rainbow-green mr-2" /> Our Core Values
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-rainbow-blue">Creativity</h4>
                  <p>We nurture imagination and creative thinking in everything we do.</p>
                </div>
                
                <div className="border border-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-rainbow-purple">Inclusivity</h4>
                  <p>We create environments where every child feels valued and can participate fully.</p>
                </div>
                
                <div className="border border-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-rainbow-green">Growth</h4>
                  <p>We believe in the potential of every child to develop and flourish.</p>
                </div>
                
                <div className="border border-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold mb-2 text-rainbow-red">Joy</h4>
                  <p>We make learning a joyful experience that children look forward to.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-rainbow-blue/10 to-rainbow-purple/10 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                  <p className="mb-4">
                    At Rainbow Spark, we believe that creativity is a fundamental human need and a powerful tool for learning. 
                    Our approach combines:
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-2 text-rainbow-purple">
                        <Users size={16} />
                      </div>
                      <p><strong>Child-centered learning</strong> that follows interests and celebrates individuality</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-2 text-rainbow-purple">
                        <Users size={16} />
                      </div>
                      <p><strong>Multiple creative disciplines</strong> to engage different learning styles and interests</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-2 text-rainbow-purple">
                        <Users size={16} />
                      </div>
                      <p><strong>Inclusive teaching methods</strong> that adapt to diverse needs and abilities</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-2 text-rainbow-purple">
                        <Users size={16} />
                      </div>
                      <p><strong>Positive reinforcement</strong> that builds confidence and intrinsic motivation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white p-1 rounded-full mr-2 text-rainbow-purple">
                        <Users size={16} />
                      </div>
                      <p><strong>Real-world applications</strong> that connect creative skills to life success</p>
                    </li>
                  </ul>
                </div>
                
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://res.cloudinary.com/dydlkejl0/image/upload/v1741882559/kid_speaking_into_microphone_j7fcs2.jpg" 
                      alt="Child expressing creativity" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
