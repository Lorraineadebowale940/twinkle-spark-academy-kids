
import React from "react";
import { Video, BookOpen, Users, Star, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const FilmPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Video size={64} className="mx-auto text-[#9b87f5] mb-6" />
          <h1 className="text-4xl font-bold mb-4">Film & Animation</h1>
          <p className="text-lg text-gray-700 mb-2">
            Lights, camera, creativity—storytelling beyond the page.
          </p>
        </div>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            Children become directors, actors, and editors as they create their own short films and animations, learning collaboration and digital literacy every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>Our film and animation programs blend technical skills with creative storytelling, allowing children to express ideas through the powerful medium of moving images.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Boosts creativity and self-expression with every project.</li>
                <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Develops storytelling, planning, sequencing—vital for literacy and numeracy.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Teamwork and leadership skills shine through group filming and editing sessions.</li>
                <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Problem-solving and critical thinking enhanced through production challenges.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Film Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Animation Station (Ages 6-9)</h3>
                  <p className="text-sm">Introduction to stop-motion and simple animation techniques through playful projects.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Young Filmmakers (Ages 10-13)</h3>
                  <p className="text-sm">Basic camera work, storytelling, and editing to create original short films.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Digital Storytellers (Ages 14-16)</h3>
                  <p className="text-sm">Advanced filmmaking techniques, genre exploration, and meaningful narrative development.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Inclusive Film Workshop (All Ages)</h3>
                  <p className="text-sm">Adapted filmmaking approaches for children with diverse needs and abilities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">The Filmmaking Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-rainbow-purple mb-1">Concept</span>
                <p className="text-xs">Developing ideas and stories</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-rainbow-purple mb-1">Scripting</span>
                <p className="text-xs">Writing dialogue and scenes</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-rainbow-purple mb-1">Production</span>
                <p className="text-xs">Filming and collecting footage</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-rainbow-purple mb-1">Editing</span>
                <p className="text-xs">Assembling and refining</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg text-center">
                <span className="block text-lg font-bold text-rainbow-purple mb-1">Screening</span>
                <p className="text-xs">Sharing and celebrating</p>
              </div>
            </div>
            <p className="text-sm italic text-center mt-3">Children participate in every stage, gaining comprehensive media literacy and production skills.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Become a Young Filmmaker</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Film at Rainbow Spark links digital skills, collaboration, and creativity—inspiring learning for all!</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default FilmPage;
