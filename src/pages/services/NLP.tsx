
import React from "react";
import { BookOpen, Lightbulb, Heart, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NLPPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FFE29F] to-[#FFDEE2] flex items-center">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <BookOpen size={64} className="mx-auto text-[#9b87f5] mb-6" />
          <h1 className="text-4xl font-bold mb-4">NLP for Kids</h1>
          <p className="text-lg text-gray-700 mb-2">
            Empower children to communicate, empathize and thrive!
          </p>
        </div>
        <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
          <p className="mb-6 text-xl">
            NLP (Neuro-Linguistic Programming) for Kids builds confidence, emotional intelligence, and growth mindsets with playful, age-appropriate tools and stories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">The Rainbow Spark Approach</h2>
              <p>Our NLP programs translate powerful psychological tools into child-friendly, creative activities that build emotional resilience, communication skills, and positive thought patterns.</p>
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Heart className="text-red-400" size={20}/>
                Learning Outcomes
              </h3>
              <ul className="text-base mb-4 space-y-2">
                <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Self-esteem and resilience through positive language and thinking.</li>
                <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Fosters flexible thinking and problem-solving, key for success across life and learning.</li>
                <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Communication games and storytelling connect literacy, numeracy, and leadership.</li>
                <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Emotional regulation skills that benefit academic performance and social interactions.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our NLP Programs</h2>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Magical Mindsets (Ages 4-7)</h3>
                  <p className="text-sm">Stories and games that introduce positive thinking patterns and emotional awareness.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Mindful Explorers (Ages 8-11)</h3>
                  <p className="text-sm">Developing self-awareness, communication skills, and confidence through creative activities.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Teen Leaders (Ages 12-16)</h3>
                  <p className="text-sm">Advanced communication techniques, goal setting, and personal development for teens.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-bold">Neurodivergent Navigators (All Ages)</h3>
                  <p className="text-sm">Tailored NLP approaches for children with diverse neurological profiles, including autism and ADHD.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-rainbow-yellow/10 to-rainbow-pink/10 p-5 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-3">Key NLP Techniques We Use</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/60 p-3 rounded-lg">
                <h4 className="font-bold text-rainbow-purple">Anchoring</h4>
                <p className="text-sm">Children learn to create positive emotional states they can access during challenging situations.</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg">
                <h4 className="font-bold text-rainbow-blue">Reframing</h4>
                <p className="text-sm">Transforming negative thoughts into empowering perspectives through storytelling and play.</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg">
                <h4 className="font-bold text-rainbow-green">Visualization</h4>
                <p className="text-sm">Using guided imagery to build confidence, reduce anxiety, and rehearse success.</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg">
                <h4 className="font-bold text-rainbow-orange">Language Patterns</h4>
                <p className="text-sm">Learning how words shape thoughts and feelings, and how to use language positively.</p>
              </div>
            </div>
            <p className="text-sm italic text-center mt-3">All techniques are adapted to be developmentally appropriate and engaging through arts and play.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Start NLP Adventure</Button>
            <Button variant="outline" asChild>
              <a href="/#contact">Book a free taster</a>
            </Button>
          </div>
        </div>
        <p className="text-center text-gray-600">Our sessions help children manage challenges, celebrate achievements and become enthusiastic, kind learners.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default NLPPage;
