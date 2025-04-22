
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, User, School, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Rainbow Spark has transformed the way our school approaches creative education. Their inclusive methods have reached students who previously struggled to engage with traditional teaching approaches.",
      author: "Dr. Emma Thompson",
      role: "Headteacher",
      organization: "Oakwood Primary School",
      rating: 5,
      type: "school"
    },
    {
      id: 2,
      quote: "My son has autism and has always found group activities challenging. The Rainbow Spark team created such a supportive environment that for the first time, he was able to participate fully in an arts program. The difference in his confidence is remarkable.",
      author: "Sarah Johnson",
      role: "Parent",
      organization: "Brighton",
      rating: 5,
      type: "parent"
    },
    {
      id: 3,
      quote: "The film-making workshops were the highlight of our school year. Students who typically disengage were suddenly taking leadership roles and showing incredible commitment to their projects. The technical and creative skills they developed were impressive.",
      author: "Michael Chen",
      role: "Year 6 Teacher",
      organization: "Westfield Academy",
      rating: 5,
      type: "school"
    },
    {
      id: 4,
      quote: "As a community center serving diverse neighborhoods, we've seen how Rainbow Spark's programs bridge cultural and language barriers. Their arts activities create common ground where children connect regardless of background or ability.",
      author: "Priya Sharma",
      role: "Community Coordinator",
      organization: "Riverdale Community Centre",
      rating: 5,
      type: "organization"
    },
    {
      id: 5,
      quote: "My daughter used to be so shy she wouldn't speak in groups. After a term in the drama program, she volunteered for a speaking role in the showcase performance. I couldn't believe it was the same child!",
      author: "James Wilson",
      role: "Parent",
      organization: "London",
      rating: 5,
      type: "parent"
    },
    {
      id: 6,
      quote: "The Big Bang Day that Rainbow Spark delivered was extraordinary - in just one day, they created an atmosphere of creativity and excitement that energized our entire school. Even weeks later, students were still talking about it.",
      author: "Vanessa Rodriguez",
      role: "Arts Coordinator",
      organization: "St. Mary's School",
      rating: 5,
      type: "school"
    },
    {
      id: 7,
      quote: "As an organization supporting children with special educational needs, we've worked with many providers. Rainbow Spark stands out for their genuine understanding of diverse needs and their ability to adapt activities to ensure everyone can participate meaningfully.",
      author: "Dr. Thomas Wright",
      role: "Director",
      organization: "Inclusive Learning Centre",
      rating: 5,
      type: "organization"
    },
    {
      id: 8,
      quote: "My twins have completely different interests and abilities, but both found their place in Rainbow Spark's after-school club. One flourished in drama while the other discovered a passion for digital art - the range of activities meant neither was left out.",
      author: "Amanda Foster",
      role: "Parent",
      organization: "Manchester",
      rating: 5,
      type: "parent"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-rainbow-yellow/10 to-transparent">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Testimonials</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Read what schools, parents, and organizations have to say about their experiences with Rainbow Spark's creative education programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-rainbow-purple to-rainbow-blue rounded-full p-2 mr-3 text-white">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        {testimonial.type === "school" ? (
                          <School className="h-4 w-4 text-gray-400 mr-1" />
                        ) : testimonial.type === "organization" ? (
                          <School className="h-4 w-4 text-gray-400 mr-1" />
                        ) : (
                          <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        )}
                        <span className="text-xs text-gray-500">{testimonial.organization}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
