import React from "react";
import { Users, Star, Heart, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Art = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FFD6E0] to-[#FFF0F5] flex items-center">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <svg
                width="64"
                height="64"
                className="mx-auto mb-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#FF6B8B"
                  strokeWidth="2"
                />
                <path
                  d="M8 16h8M12 4v2m0 12v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M20 12h-2M6 12H4m2.83-7.07 1.41 1.41M19.07 4.93l-1.41 1.41"
                  stroke="#FF6B8B"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-4xl font-bold mb-4">
                Visual Arts & Creativity
              </h1>
              <p className="text-lg text-gray-700 mb-2">
                Explore, create, and express—art for every child!
              </p>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
              <p className="mb-6 text-xl">
                From painting and drawing to sculpture and mixed media, children
                discover their artistic voice while developing fine motor
                skills, visual thinking, and creative problem-solving abilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">
                    The Rainbow Spark Approach
                  </h2>
                  <p>
                    Our art programs focus on process over product, encouraging
                    experimentation, self-expression, and the joy of creation in
                    a supportive environment.
                  </p>

                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Heart className="text-red-400" size={20} />
                    Learning Outcomes
                  </h3>
                  <ul className="text-base mb-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Star className="text-yellow-400" size={20} /> Builds
                      confidence through creative self-expression
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="text-green-500" size={20} /> Develops
                      fine motor skills and hand-eye coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="text-red-400" size={20} /> Enhances
                      visual literacy and observational skills
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="text-blue-400" size={20} /> Fosters
                      creative problem-solving and critical thinking
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Our Art Programs
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold">Little Artists (Ages 3-6)</h3>
                      <p className="text-sm">
                        Sensory exploration, basic techniques, and joyful
                        creative play.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold">
                        Creative Explorers (Ages 7-11)
                      </h3>
                      <p className="text-sm">
                        Diverse media exploration, art history connections, and
                        skill development.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold">
                        Young Artists Studio (Ages 12-16)
                      </h3>
                      <p className="text-sm">
                        Advanced techniques, personal projects, and portfolio
                        development.
                      </p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-bold">Adaptive Art (All Ages)</h3>
                      <p className="text-sm">
                        Customized approaches for diverse abilities and sensory
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rainbow-red/10 to-rainbow-yellow/10 p-5 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3">
                  Art Techniques We Explore
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-3">
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Drawing</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Painting</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Sculpture</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Printmaking</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Collage</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Textiles</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Digital Art</span>
                  </div>
                  <div className="bg-white/60 py-2 px-3 rounded-lg text-center">
                    <span className="font-medium">Mixed Media</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <Lightbulb className="text-yellow-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Each technique is adapted to be accessible for all
                    abilities, with a focus on exploration and creative
                    expression rather than perfect results.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">
                  Join Art Classes
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <p className="text-center text-gray-600">
              Every child is an artist! We provide the tools, techniques, and
              encouragement to help them discover their unique creative voice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Art;
