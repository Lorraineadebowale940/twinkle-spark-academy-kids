
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Star, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'award-winning-film',
      title: "Award-Winning Film Project with Forest School",
      summary: "A 12-week film-making program that resulted in students creating an award-winning short film about environmental conservation.",
      image: "https://res.cloudinary.com/dydlkejl0/image/upload/v1741905419/pexels-borishamer-29545228_tthnex.jpg",
      outcomes: [
        "Created a 10-minute short film that won 'Best Youth Film' at local film festival",
        "Students learned scriptwriting, camera operation, directing, and editing",
        "Integrated environmental science curriculum with creative arts",
        "Developed teamwork and leadership skills across age groups"
      ],
      quote: "The film project transformed our students' relationship with both technology and nature. They became not just consumers of media, but thoughtful creators with important messages to share.",
      quoteAuthor: "Ms. Janine Morris, Head Teacher",
      date: "January - April 2023"
    },
    {
      id: 'inclusive-arts-award',
      title: "Inclusive Arts Award for Special Needs Centre",
      summary: "A specialized 16-week arts program for children with diverse abilities that culminated in an inclusive exhibition.",
      image: "https://res.cloudinary.com/dydlkejl0/image/upload/v1741905079/pexels-shkrabaanthony-6288088_qbrzhu.jpg",
      outcomes: [
        "Developed adaptive tools for artistic expression for various ability levels",
        "Created sensory-friendly creative spaces that accommodated diverse needs",
        "Organized a gallery exhibition celebrating neurodiversity in art",
        "Project received the Regional Inclusive Arts Award for innovation"
      ],
      quote: "Rainbow Spark found ways for every single child to participate meaningfully, regardless of their communication style or sensory needs. The change in our children's self-expression was remarkable.",
      quoteAuthor: "Director, Sunshine Special Needs Centre",
      date: "September 2022 - January 2023"
    },
    {
      id: 'comic-book-project',
      title: "Comic Book Project for Literacy Engagement",
      summary: "A targeted program using comic creation to boost literacy and engagement for reluctant readers and English language learners.",
      image: "https://res.cloudinary.com/dydlkejl0/image/upload/v1741904845/pexels-cliff-booth-4058218_u6x2m7.jpg",
      outcomes: [
        "100% of participating students showed improved reading engagement",
        "85% demonstrated improved writing confidence and skills",
        "Created and published a school comic anthology",
        "Increased library usage among previously disengaged students"
      ],
      quote: "The comic book project reached students who had completely disengaged from traditional literacy instruction. By combining visual storytelling with text, we saw remarkable improvements in both technical skills and enthusiasm for reading and writing.",
      quoteAuthor: "Literacy Coordinator, Oakwood Primary",
      date: "February - July 2023"
    },
    {
      id: 'inclusive-arts-workshops',
      title: "Inclusive Arts Workshops for Community Integration",
      summary: "A community project bringing together children from diverse backgrounds through collaborative arts activities.",
      image: "https://res.cloudinary.com/dydlkejl0/image/upload/v1741882559/Theatre_production_n4vezy.jpg",
      outcomes: [
        "Created a community mural representing the diversity of local neighborhoods",
        "Facilitated cross-cultural understanding through shared creative experiences",
        "Developed language skills among refugee and immigrant participants",
        "Established ongoing youth arts exchange program between schools"
      ],
      quote: "These workshops created a space where language barriers disappeared and children found common ground through creativity. The relationships formed have extended well beyond the project itself.",
      quoteAuthor: "Community Outreach Coordinator",
      date: "Ongoing since April 2022"
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
            
            <div className="grid grid-cols-1 gap-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        className="h-60 w-full object-cover md:h-full" 
                        src={study.image} 
                        alt={study.title} 
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar size={16} />
                        <span>{study.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-rainbow-purple">{study.title}</h2>
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
                      <div className="text-sm flex items-center gap-1 mb-4">
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
              <Link to="/about" className="inline-block text-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
                Learn More About Our Approach
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
