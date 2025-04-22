
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Star, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Inclusive Drama Project at Meadow Primary School",
      summary: "A 12-week drama program that dramatically improved confidence and communication skills for 28 students with diverse needs.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      outcomes: [
        "100% of participants reported increased confidence",
        "93% improvement in verbal communication skills",
        "Teachers observed enhanced classroom participation",
        "Final performance attended by over 200 community members"
      ],
      quote: "The transformation in our students was remarkable. Children who wouldn't speak in class were volunteering for speaking parts by the end of the program.",
      quoteAuthor: "Emma Richardson, Headteacher",
      date: "January - March 2024"
    },
    {
      title: "Art Therapy Sessions for Autistic Youth Group",
      summary: "A specialized 8-week program that provided new creative outlets and self-regulation strategies for autistic children aged 8-12.",
      image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      outcomes: [
        "Developed personalized sensory art kits for each participant",
        "Created a gallery exhibition celebrating neurodiversity",
        "Parents reported reduced anxiety at home",
        "80% of children continued art practices independently"
      ],
      quote: "For the first time, my son has a way to express his feelings that works for him. The difference in his emotional regulation has been life-changing for our family.",
      quoteAuthor: "Parent of 10-year-old participant",
      date: "September - November 2023"
    },
    {
      title: "Music and Movement for Early Years",
      summary: "A nursery-based program introducing music, rhythm, and creative movement to support early development in 3-5 year olds.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      outcomes: [
        "Improved physical coordination and spatial awareness",
        "Enhanced counting and pattern recognition skills",
        "Developed turn-taking and collaborative play",
        "Expanded vocabulary through musical storytelling"
      ],
      quote: "The Rainbow Spark sessions became the highlight of our week. We've incorporated many of the activities into our daily routines because the children respond so positively to them.",
      quoteAuthor: "Sunflower Nursery Manager",
      date: "Ongoing weekly sessions since 2022"
    },
    {
      title: "Youth Leadership Through Film & Digital Media",
      summary: "A 16-week after-school program where teenagers created short films addressing social issues important to them.",
      image: "https://images.unsplash.com/photo-1598899190311-9fdcb2a716bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      outcomes: [
        "Produced 6 short films screened at local youth film festival",
        "Developed technical skills in filming, editing and production",
        "Improved critical thinking about media representation",
        "Three participants pursuing further education in media studies"
      ],
      quote: "This program showed me that my voice matters. I learned that creativity can be a powerful tool for change, and I discovered talents I didn't know I had.",
      quoteAuthor: "Maya, 16-year-old participant",
      date: "April - July 2023"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-rainbow-purple/10 to-transparent">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Case Studies</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Explore how our creative learning programs have made a difference in schools, community groups, and for individual children with diverse needs and abilities.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        className="h-48 w-full object-cover md:h-full" 
                        src={study.image} 
                        alt={study.title} 
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar size={16} />
                        <span>{study.date}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 text-rainbow-purple">{study.title}</h2>
                      <p className="mb-4">{study.summary}</p>
                      
                      <h3 className="font-bold flex items-center gap-1 mb-2">
                        <Star size={18} className="text-yellow-500" />
                        Key Outcomes
                      </h3>
                      <ul className="mb-4 space-y-1 text-sm">
                        {study.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-primary font-bold">•</span> {outcome}
                          </li>
                        ))}
                      </ul>
                      
                      <blockquote className="italic text-sm border-l-4 border-rainbow-blue pl-3 mb-2">
                        "{study.quote}"
                      </blockquote>
                      <div className="text-sm flex items-center gap-1">
                        <User size={14} className="text-gray-500" />
                        <span>{study.quoteAuthor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gradient-to-r from-rainbow-blue/20 to-rainbow-purple/20 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Interested in creating a similar impact?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                We work with schools, community organizations, and other groups to design bespoke creative learning programs tailored to your specific needs and goals.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us About Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
