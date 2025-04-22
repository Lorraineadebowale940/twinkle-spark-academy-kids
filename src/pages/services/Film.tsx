
import React from "react";
import { Video, BookOpen, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FilmPage = () => (
  <section className="py-14 min-h-[90vh] bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] flex items-center">
    <div className="container px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <Video size={64} className="mx-auto text-[#9b87f5] mb-6" />
        <h1 className="text-4xl font-bold mb-4">Film & Animation</h1>
        <p className="text-lg text-gray-700 mb-2">
          Lights, camera, creativity—storytelling beyond the page.
        </p>
      </div>
      <div className="bg-white/80 rounded-xl shadow p-6 mb-6">
        <p className="mb-4 text-xl">
          Children become directors, actors, and editors as they create their own short films and animations, learning collaboration and digital literacy every step of the way.
        </p>
        <ul className="text-base mb-4 space-y-2">
          <li className="flex items-center gap-2"><Star className="text-yellow-400" size={20}/> Boosts creativity and self-expression with every project.</li>
          <li className="flex items-center gap-2"><BookOpen className="text-blue-400" size={20}/> Develops storytelling, planning, sequencing—vital for literacy and numeracy.</li>
          <li className="flex items-center gap-2"><Users className="text-green-500" size={20}/> Teamwork and leadership skills shine through group filming and editing sessions.</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-3">
          <Button className="bg-primary hover:bg-primary/90 font-bold text-lg">Become a Young Filmmaker</Button>
          <Button variant="outline" asChild>
            <a href="#contact">Book a free taster</a>
          </Button>
        </div>
      </div>
      <p className="text-center text-gray-600">Film at Rainbow Spark links digital skills, collaboration, and creativity—inspiring learning for all!</p>
    </div>
  </section>
);

export default FilmPage;
