import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, BookOpen, Sparkles, Star, Lightbulb, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const SpecialNeeds = () => {
  const specialNeedsInfo = [{
    name: "Autism Spectrum",
    description: "Creative arts provide autistic children with sensory-appropriate ways to express themselves, develop social skills, and build confidence. Our structured yet flexible approach accommodates different sensory needs while celebrating neurodiversity.",
    benefits: ["Visual schedules and consistent routines provide security", "Sensory-friendly spaces with adjustable lighting and sound", "Creative expression without social pressure", "Development of communication skills through art, music and drama"]
  }, {
    name: "PDA (Pathological Demand Avoidance)",
    description: "Our child-led approach is perfect for children with PDA profiles. By framing activities as invitations rather than demands, and offering meaningful choices, we create a low-pressure environment where creativity can flourish.",
    benefits: ["Child-directed activities reduce demand anxiety", "Flexible session structure with multiple pathways to engagement", "Indirect learning through play and creativity", "Focus on intrinsic motivation and collaborative approaches"]
  }, {
    name: "ADHD",
    description: "Our movement-friendly, hands-on creative activities are ideal for children with ADHD. We provide the structure, positive reinforcement, and multisensory experiences that help channel energy into creative expression.",
    benefits: ["Physically engaging activities harness natural energy", "Clear, achievable goals with immediate creative rewards", "Regular movement breaks and transitions between activities", "Multiple ways to participate based on attention span"]
  }, {
    name: "Dyslexia & Dyscalculia",
    description: "Arts education offers alternative pathways to learning that often bypass text-based challenges. Our multisensory approach helps strengthen areas that support literacy and numeracy through creative means.",
    benefits: ["Visual and tactile learning reinforces concepts", "Drama and music improves sequencing and pattern recognition", "Confidence building counters academic frustration", "Strengths-based approach celebrates diverse learning styles"]
  }, {
    name: "Physical Disabilities",
    description: "We believe in arts access for all bodies. Our adaptable approach ensures every child can fully participate in creative activities regardless of mobility or physical limitations.",
    benefits: ["Adapted tools and equipment for different physical abilities", "Flexible participation options for all activities", "Space designed for wheelchair and mobility aid access", "Staff trained in inclusive physical facilitation"]
  }];
  const gamingForLearning = [{
    name: "Minecraft",
    benefits: "Spatial awareness, planning, collaboration, creativity",
    appeal: "Open-ended building, predictable rules, visual learning"
  }, {
    name: "Animal Crossing",
    benefits: "Social skills, routine management, organization",
    appeal: "Low pressure, predictable positive interactions, collecting"
  }, {
    name: "Pokémon Games",
    benefits: "Pattern recognition, categorization, strategy, memory",
    appeal: "Collecting, clear rules, special interests support"
  }, {
    name: "Mario Kart",
    benefits: "Turn-taking, handling competition, spatial awareness",
    appeal: "Short play sessions, clear visual feedback, structured fun"
  }, {
    name: "Roblox Creative Modes",
    benefits: "Digital literacy, creative design, self-expression",
    appeal: "Customizable environments, special interest exploration"
  }, {
    name: "Sensory Apps",
    benefits: "Self-regulation, cause and effect understanding",
    appeal: "Visual stimulation, predictable responses, calming effects"
  }];
  const lorraineProfile = {
    name: "Lorraine Adebowale",
    role: "Founder & Artistic Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "With over 15 years of experience in inclusive learning environments, Lorraine has taught and directed performances worldwide at prestigious venues including The Royal Albert Hall, the O2 Arena, London Palladium, and Disney. Her passion for accessible arts education has transformed countless lives.",
    training: "Lorraine trained with Bigfoot Arts, Chickenshed, and the Candoco company to ensure learning is accessible and empowering for every individual, regardless of their needs, abilities, or disabilities.",
    philosophy: "I believe that creative expression is not a luxury but a necessity for every child's development. When we remove barriers to arts participation, we unlock limitless potential in young people who may struggle in traditional learning environments.",
    achievements: ["Directed inclusive performances at The Royal Albert Hall", "Led workshops for educators in 15+ countries", "Developed pioneering sensory-inclusive curriculum", "Mentored over 300 young leaders from diverse backgrounds"]
  };
  return <section id="special-needs" className="py-20">
      <div className="container px-4">
        <div className="flex flex-col gap-12">
          {/* Profile Section */}
          

          {/* Special Needs Services */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Inclusive Arts for Every Child</h2>
            <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
              At Rainbow Spark, we believe that every child deserves access to high-quality creative education. 
              Our specialized programs and trained staff ensure that children with special needs can fully 
              participate and thrive in our inclusive environment.
            </p>
            
            <Tabs defaultValue="approach">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="approach">Our Approach</TabsTrigger>
                <TabsTrigger value="needs">Special Needs</TabsTrigger>
                <TabsTrigger value="gaming">Learning Through Gaming</TabsTrigger>
              </TabsList>
              
              <TabsContent value="approach" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                    <Heart className="h-10 w-10 text-rainbow-red mb-4" />
                    <h3 className="text-xl font-bold mb-2">Inclusive Environment</h3>
                    <p>Thoughtfully designed spaces that accommodate various needs and abilities.</p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                    <BookOpen className="h-10 w-10 text-rainbow-blue mb-4" />
                    <h3 className="text-xl font-bold mb-2">Tailored Learning</h3>
                    <p>Personalized approaches that adapt to each child's unique strengths and challenges.</p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                    <Users className="h-10 w-10 text-rainbow-green mb-4" />
                    <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
                    <p>Specialists trained in various special education approaches and therapies.</p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-xl flex flex-col items-center text-center">
                    <Sparkles className="h-10 w-10 text-rainbow-purple mb-4" />
                    <h3 className="text-xl font-bold mb-2">Creative Expression</h3>
                    <p>Programs that encourage self-expression and build confidence through the arts.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="needs" className="mt-0">
                <div className="space-y-6">
                  {specialNeedsInfo.map((need, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-xl font-bold mb-2 text-primary">{need.name}</h3>
                      <p className="mb-4">{need.description}</p>
                      <h4 className="font-bold mb-2">How We Help:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {need.benefits.map((benefit, i) => <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>)}
                      </ul>
                    </div>)}
                </div>
              </TabsContent>
              
              <TabsContent value="gaming" className="mt-0">
                <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">Learning Through Gaming</h3>
                  <p className="mb-6">
                    Digital games offer structured, predictable environments that many neurodivergent children, particularly those with autism, find comforting and engaging. We incorporate gaming elements and principles into our learning to create bridges between special interests and broader skills development.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gamingForLearning.map((game, index) => <div key={index} className="bg-muted p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-1">{game.name}</h4>
                        <p className="text-sm mb-2"><span className="font-medium">Learning benefits:</span> {game.benefits}</p>
                        <p className="text-sm"><span className="font-medium">Appeal:</span> {game.appeal}</p>
                      </div>)}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <p>
                        <span className="font-bold">Our approach:</span> We don't just use games as rewards, but integrate gaming principles into learning. Through game-based activities, we develop transferable skills like turn-taking, collaboration, problem-solving, and creative expression in ways that feel safe and motivating.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-primary hover:bg-primary/90">Schedule a Consultation</Button>
              <Button variant="outline">Learn About Our Approach</Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SpecialNeeds;