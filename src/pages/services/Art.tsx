
import React from "react";
import { Palette, Star, Lightbulb, Users, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Art = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#F2FCE2] to-[#E5DEFF] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Palette size={64} className="mx-auto text-[#9b87f5] mb-6" />
          <h1 className="text-4xl font-bold mb-4">Art Adventures</h1>
          <p className="text-lg text-gray-700 mb-2">
            Ignite imagination and self-expression through joyful art sessions.
          </p>
        </div>
        <div className="bg-white/70 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            At Rainbow Spark, Art is more than paint and brushes—it's a gateway to confidence, curiosity, and creativity. Children explore techniques in painting, drawing, and sculpture, collaborating on playful, project-based masterpieces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>Our art sessions merge technical skills with open-ended exploration. Children learn color theory, composition, and various techniques while being encouraged to express their unique perspective.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Confidence soars as children proudly share their creations.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Cross-curricular projects build teamwork, literacy & numeracy.</li>
                <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Creative problem-solving skills inspire a lifelong love of learning.</li>
                <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Fine motor development and spatial awareness improve through hands-on creation.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Art Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Preschool Art Play (Ages 3-5)</h3>
                  <p className="text-sm">Sensory exploration and basic skill development through playful projects.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Primary Artists (Ages 6-11)</h3>
                  <p className="text-sm">Developing technical skills and creative expression through varied media and art history.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Young Creators (Ages 12-16)</h3>
                  <p className="text-sm">Advanced techniques and conceptual development for passionate young artists.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Inclusive Art Studio (All Ages)</h3>
                  <p className="text-sm">Adaptive approaches for children with diverse needs and abilities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">What Parents & Teachers Say</h3>
            <blockquote className="italic mb-3">
              "My daughter was always reluctant to try new things for fear of making mistakes. Through Rainbow Spark's art program, she's learned that creativity is about the journey, not perfection. Now she approaches all subjects with more confidence."
            </blockquote>
            <p className="text-right font-medium">— Parent of 8-year-old participant</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Enrol in Art</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Every session includes gentle literacy & numeracy activities through art, developing vital life skills in a nurturing, inclusive space.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Art;
