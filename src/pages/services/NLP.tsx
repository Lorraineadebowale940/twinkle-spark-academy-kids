
import React from "react";
import { BookOpen, Lightbulb, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const NLPPage = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#FFE29F] to-[#FFDEE2] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <BookOpen size={64} className="mx-auto text-[#9b87f5] mb-6" />
        <h1 className="text-4xl font-bold mb-4">NLP for Kids</h1>
        <p className="text-lg text-gray-700 mb-2">
          Empower children to communicate, empathize and thrive!
        </p>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          NLP (Neuro-Linguistic Programming) for Kids builds confidence, emotional intelligence, and growth mindsets with playful, age-appropriate tools and stories.
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Heart className="text-red-400" size={20}/> Self-esteem and resilience through positive language and thinking.</li>
          <li className="flex items-center gap-2"><Lightbulb className="text-purple-500" size={20}/> Fosters flexible thinking and problem-solving, key for success across life and learning.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Communication games and storytelling connect literacy, numeracy, and leadership.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Start NLP Adventure</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Our sessions help children manage challenges, celebrate achievements and become enthusiastic, kind learners.</p>
    </div>
  </section>
);

export default NLPPage;
