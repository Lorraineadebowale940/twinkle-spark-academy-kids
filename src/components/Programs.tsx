import React from 'react';
import { 
  Palette, 
  Music, 
  Drama, 
  Video, 
  MicIcon as Mic, 
  BookText
} from 'lucide-react';
import { Link } from "react-router-dom";

const programData = [
  {
    id: 'art',
    title: 'Art',
    description: 'Explore painting, drawing, sculpture, and more in our creative art classes.',
    icon: Palette,
    className: 'program-card-art',
    path: '/services/art'
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Learn instruments, singing, and music theory in a fun, supportive environment.',
    icon: Music,
    className: 'program-card-music',
    path: '/services/music'
  },
  {
    id: 'drama',
    title: 'Drama',
    description: 'Develop confidence through acting, stage craft, and storytelling.',
    icon: Drama,
    className: 'program-card-drama',
    path: '/services/drama'
  },
  {
    id: 'dance',
    title: 'Dance',
    description: 'Experience a variety of dance styles from ballet to hip-hop and cultural dances.',
    icon: Drama,
    className: 'program-card-dance',
    path: '/services/dance'
  },
  {
    id: 'film',
    title: 'Film',
    description: 'Create movies, animation, and learn about storytelling through visual media.',
    icon: Video,
    className: 'program-card-film',
    path: '/services/film'
  },
  {
    id: 'nlp',
    title: 'NLP for Kids',
    description: 'Develop communication skills, emotional intelligence, and positive mindsets.',
    icon: BookText,
    className: 'program-card-nlp',
    path: '/services/nlp'
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Creative Programs</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the perfect program to spark your child's imagination and develop their creative talents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programData.map((program) => (
            <div key={program.id} className={`program-card text-white ${program.className}`}>
              <div className="mb-4 text-white">
                <program.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="mb-4">{program.description}</p>
              
              <Link
                to={program.path}
                className="inline-flex items-center font-bold underline underline-offset-2 story-link hover-scale"
              >
                Learn more
              </Link>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
