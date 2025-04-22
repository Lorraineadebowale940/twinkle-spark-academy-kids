import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import { Calendar, User, ArrowRight, Tag, Clock } from "lucide-react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: "the-power-of-creative-education",
      title: "The Power of Creative Education in Child Development",
      excerpt:
        "Exploring how arts education develops critical thinking, emotional intelligence, and confidence in children of all abilities.",
      image:
        "https://res.cloudinary.com/dydlkejl0/image/upload/v1741905419/pexels-borishamer-29545228_tthnex.jpg",
      date: "April 15, 2025",
      author: "Lorraine Adebowale",
      tags: ["Child Development", "Creative Education", "Research"],
      content: `
        <h2>How Creative Education Shapes Young Minds</h2>
        
        <p>When children engage in creative activities, they're doing far more than making art—they're building neural pathways that will serve them throughout their lives. Research consistently shows that arts education develops critical cognitive functions including problem-solving, pattern recognition, and abstract thinking.</p>

        <p>The impact of creative education extends far beyond the development of artistic skills. Children who regularly participate in arts programs show measurable improvements in:</p>

        <ul>
          <li><strong>Cognitive development</strong> - Enhanced brain connectivity and executive function</li>
          <li><strong>Emotional intelligence</strong> - Greater ability to understand and manage emotions</li>
          <li><strong>Social skills</strong> - Improved collaboration and communication abilities</li>
          <li><strong>Academic performance</strong> - Higher achievement across all subjects</li>
          <li><strong>Confidence and self-efficacy</strong> - Stronger belief in their capabilities</li>
        </ul>

        <h3>The Brain on Creativity</h3>
        
        <p>Neuroscience research reveals that arts engagement activates multiple brain regions simultaneously, creating connections between different areas of the brain. This neural connectivity is particularly important during key developmental stages.</p>

        <p>When a child learns to play music, for example, they're not just developing musical abilities—they're enhancing mathematical thinking, spatial awareness, and memory. Similarly, dramatic play builds emotional regulation capacity and perspective-taking. Visual arts strengthen visual-spatial abilities that underpin science and technology skills.</p>

        <h3>Breaking Down Barriers</h3>
        
        <p>One of the most powerful aspects of creative education is its accessibility. While traditional academic approaches sometimes create barriers for children with learning differences or developmental delays, the arts offer multiple entry points that accommodate diverse abilities and learning styles.</p>

        <p>We've witnessed children who struggle with traditional classroom participation bloom when given creative outlets for expression. The flexibility inherent in creative processes allows for personalization that respects individual development trajectories while still challenging each child appropriately.</p>

        <h3>Emotional Development Through Creativity</h3>
        
        <p>The arts provide safe spaces for children to explore and process complex emotions. Through creative expression, children develop emotional literacy—the ability to identify, understand, and express feelings in healthy ways.</p>

        <p>Particularly in today's challenging world, children need outlets for processing experiences and building resilience. Creative activities offer therapeutic benefits, allowing children to work through anxieties and develop coping strategies through symbolic expression.</p>

        <h3>Creativity as Future Preparation</h3>
        
        <p>As we prepare children for a rapidly changing future, the skills developed through creative education become increasingly valuable. The World Economic Forum consistently ranks creativity among the top skills employers will seek in the coming decades.</p>

        <p>Creative thinking enables innovation, adaptability, and problem-solving—precisely the capabilities needed for navigating an unpredictable future. By investing in creative education now, we're giving children tools that will serve them throughout their lives, regardless of their chosen paths.</p>

        <h3>Practical Applications</h3>
        
        <p>How can parents and educators incorporate more creativity into children's lives?</p>

        <ul>
          <li>Provide open-ended materials without prescribing outcomes</li>
          <li>Value process over product, emphasizing exploration</li>
          <li>Ask open questions that encourage divergent thinking</li>
          <li>Expose children to diverse creative expressions across cultures</li>
          <li>Model creative thinking by sharing your own creative process</li>
          <li>Create safe spaces where experimentation is encouraged and "mistakes" are viewed as learning opportunities</li>
        </ul>

        <h3>Conclusion</h3>
        
        <p>Creative education isn't a luxury or an add-on—it's fundamental to developing well-rounded individuals with the cognitive flexibility, emotional intelligence, and innovative thinking needed for success in both personal and professional realms.</p>

        <p>As we advocate for educational approaches that truly serve children's development, creative arts must be recognized as core curriculum, equally valued alongside literacy and numeracy. The evidence is clear: creativity doesn't just enhance learning—it is learning, in its most comprehensive and meaningful form.</p>
      `,
    },
    {
      id: "inclusive-arts-education",
      title:
        "Creating Truly Inclusive Arts Spaces for Children with Special Needs",
      excerpt:
        "Practical strategies for making creative programs accessible and meaningful for neurodivergent children and those with disabilities.",
      image:
        "https://res.cloudinary.com/dydlkejl0/image/upload/v1741905079/pexels-shkrabaanthony-6288088_qbrzhu.jpg",
      date: "March 28, 2025",
      author: "Maya Sharma",
      tags: ["Inclusion", "Special Needs", "Accessibility"],
      content: `
        <h2>Beyond Accommodation: Building Genuinely Inclusive Creative Spaces</h2>
        
        <p>True inclusion goes beyond simply allowing children with diverse needs to participate in existing programs. Authentic inclusion requires thoughtful program design that considers the full spectrum of abilities from the outset, rather than as an afterthought.</p>

        <p>At Rainbow Spark, we've developed approaches to creative education that embrace neurodiversity and disability as valuable dimensions of human experience—not as problems to be solved or accommodated. This foundational shift in perspective transforms how we structure programs and measure success.</p>

        <h3>Understanding Sensory Experiences</h3>
        
        <p>Many children with autism, ADHD, and sensory processing differences experience the world with heightened or altered sensory perception. Creative settings often involve multiple sensory elements—sounds, textures, movements, visual stimuli—that can be either enriching or overwhelming, depending on the individual.</p>

        <p>Practical strategies for creating sensory-aware environments include:</p>

        <ul>
          <li>Offering sensory maps of spaces so children know what to expect</li>
          <li>Providing designated calming areas for sensory breaks</li>
          <li>Making sensory tools available (noise-canceling headphones, fidget objects, weighted items)</li>
          <li>Considering lighting carefully—many children are sensitive to fluorescent lights</li>
          <li>Communicating transitions clearly to reduce anxiety</li>
          <li>Creating flexible expectations around participation</li>
        </ul>

        <h3>Communication Accessibility</h3>
        
        <p>Creative expression requires communication, but communication doesn't always mean speech. Inclusive arts programs recognize and value multiple communication modalities:</p>

        <ul>
          <li>Visual supports and schedules</li>
          <li>Sign language and gesture</li>
          <li>Augmentative and alternative communication (AAC) devices</li>
          <li>Written options for verbal instructions</li>
          <li>Creative expression itself as communication</li>
        </ul>

        <p>When facilitators understand that behavior is communication, they become more responsive to children's needs. A child who seems disengaged may actually be communicating sensory overload or conceptual confusion—valuable information that helps us adjust our approach.</p>

        <h3>Flexible Expectations and Multiple Access Points</h3>
        
        <p>One of the most significant barriers to inclusion is rigid expectations about participation. An inclusive program recognizes that engagement can look different for each child:</p>

        <ul>
          <li>A child might observe from the periphery before feeling confident to join</li>
          <li>Participation might be intermittent rather than continuous</li>
          <li>Success might be measured by individual growth rather than standardized outcomes</li>
          <li>The same activity might be approached in multiple ways depending on a child's strengths</li>
        </ul>

        <p>For example, in a music session, one child might play an instrument, another might express themselves through movement, while a third might engage through technology or visual representation of sound. All are valid forms of musical engagement.</p>

        <h3>Environmental Design and Physical Accessibility</h3>
        
        <p>Physically accessible spaces are fundamental to inclusion. Beyond basic requirements like wheelchair access, consider:</p>

        <ul>
          <li>Clear pathways and organization of materials</li>
          <li>Furniture that accommodates different postures and physical needs</li>
          <li>Adaptive tools and equipment</li>
          <li>Height-adjustable surfaces</li>
          <li>Physical spaces that allow for movement and calming</li>
        </ul>

        <h3>Collaborative Planning with Families</h3>
        
        <p>Parents and caregivers are experts on their children. Inclusive programs engage families as partners in planning:</p>

        <ul>
          <li>Detailed intake processes that gather specific information about preferences, triggers, and successful strategies</li>
          <li>Regular communication channels that flow both ways</li>
          <li>Flexibility to incorporate family suggestions and feedback</li>
          <li>Recognition of cultural perspectives on disability and neurodiversity</li>
        </ul>

        <h3>Staff Training and Attitudes</h3>
        
        <p>The most important element of inclusive programming is the mindset of the facilitators. Staff need both specific knowledge about various conditions and a foundational belief in every child's capacity for creative expression.</p>

        <p>Effective training includes:</p>

        <ul>
          <li>Understanding of diverse developmental paths</li>
          <li>Specific strategies for common challenges</li>
          <li>Person-first language and respectful communication</li>
          <li>Recognition of unconscious biases and assumptions</li>
          <li>Creative problem-solving approaches when standard methods aren't working</li>
        </ul>

        <h3>Conclusion: The Benefits of True Inclusion</h3>
        
        <p>When creative programs are genuinely inclusive, <em>everyone</em> benefits—not just the children with identified needs. All participants develop:</p>

        <ul>
          <li>Greater empathy and understanding of diverse experiences</li>
          <li>Appreciation for different forms of expression and communication</li>
          <li>More flexible thinking and problem-solving skills</li>
          <li>Stronger community connections</li>
        </ul>

        <p>Inclusive creative spaces mirror the diversity of our communities and prepare children to navigate a complex world with compassion and understanding. By designing programs that embrace human variation from the start, we create environments where all children can discover their creative voice and express it to the world.</p>
      `,
    },
    {
      id: "child-led-learning",
      title:
        "The Magic of Child-Led Creative Learning: When to Guide and When to Step Back",
      excerpt:
        "Finding the balance between structure and freedom in children's creative development through thoughtful facilitation.",
      image:
        "https://res.cloudinary.com/dydlkejl0/image/upload/v1741904845/pexels-cliff-booth-4058218_u6x2m7.jpg",
      date: "February 12, 2025",
      author: "James Wilson",
      tags: ["Teaching Methods", "Child-led Learning", "Creative Development"],
      content: `
        <h2>Balancing Structure and Freedom in Creative Education</h2>
        
        <p>One of the most challenging aspects of facilitating creative learning is knowing when to provide structure and when to allow children's own ideas to lead the way. Too much structure can stifle imagination and ownership; too little can leave children feeling unsupported or overwhelmed by possibilities.</p>

        <p>Through years of creative education practice, we've discovered that the most powerful learning happens in the sweet spot between guidance and autonomy—where children feel secure enough to explore but free enough to discover their own creative voice.</p>

        <h3>The Case for Child-Led Learning</h3>
        
        <p>When children direct their own creative explorations, several important developmental processes are activated:</p>

        <ul>
          <li><strong>Intrinsic motivation</strong> flourishes when children pursue their genuine interests</li>
          <li><strong>Agency and self-efficacy</strong> develop as children make decisions and see the results</li>
          <li><strong>Deeper engagement</strong> occurs when activities connect to personal curiosity</li>
          <li><strong>Authentic problem-solving</strong> emerges when challenges arise in self-directed work</li>
          <li><strong>Metacognition</strong> strengthens as children reflect on their own creative processes</li>
        </ul>

        <p>When a child has an idea—even one that seems unusual or challenging—and is supported in bringing that idea to life, they gain confidence that extends far beyond the creative activity itself.</p>

        <h3>The Essential Role of Structure</h3>
        
        <p>However, complete freedom without any framework can be disorienting, especially for children who are still developing executive function skills. Thoughtful structure provides:</p>

        <ul>
          <li><strong>Scaffolding</strong> that allows children to build skills progressively</li>
          <li><strong>Boundaries</strong> that create psychological safety for risk-taking</li>
          <li><strong>Exposure</strong> to techniques and ideas children might not discover independently</li>
          <li><strong>Multi-modal engagement</strong> that ensures activities reach different learning styles</li>
          <li><strong>Group cohesion</strong> when working with multiple children</li>
        </ul>

        <p>Structure doesn't mean controlling outcomes—it means creating conditions where creative exploration can thrive.</p>

        <h3>Finding the Balance: The Semi-Structured Approach</h3>
        
        <p>At Rainbow Spark, we've developed a semi-structured approach that provides enough framework to support learning while leaving substantial space for child-directed exploration:</p>

        <ol>
          <li><strong>Inspiration Phase:</strong> Introduce concepts, materials, or techniques without prescribing what children should create with them</li>
          <li><strong>Exploration Phase:</strong> Allow free experimentation with materials and ideas, with adults available as resources rather than directors</li>
          <li><strong>Development Phase:</strong> Offer selective guidance to help children refine ideas and overcome technical challenges</li>
          <li><strong>Reflection Phase:</strong> Facilitate discussion about process, discoveries, and potential next steps</li>
        </ol>

        <p>This cycle can repeat multiple times within a creative project, with the balance shifting depending on the stage of the project and the needs of the children.</p>

        <h3>The Adult as "Guide on the Side"</h3>
        
        <p>In child-led learning, the educator's role transforms from instructor to facilitator—a "guide on the side" rather than a "sage on the stage." Effective facilitation involves:</p>

        <ul>
          <li>Asking open questions that prompt thinking rather than directing</li>
          <li>Offering techniques as tools for realizing children's visions, not as ends in themselves</li>
          <li>Noticing and naming the creative strategies children are already using</li>
          <li>Providing just-in-time support when children hit obstacles</li>
          <li>Modeling curiosity, experimentation, and comfort with uncertainty</li>
        </ul>

        <p>A skilled facilitator constantly assesses when to step in and when to step back, reading subtle cues from children about when guidance is needed versus when independent exploration is flourishing.</p>

        <h3>Creating Environments That Support Autonomy</h3>
        
        <p>The physical environment plays a crucial role in enabling child-led learning. Spaces that support creative autonomy include:</p>

        <ul>
          <li>Accessible, organized materials that children can select independently</li>
          <li>Documentation of process visible in the space to inspire and prompt reflection</li>
          <li>Flexible arrangements that can adapt to different types of creative work</li>
          <li>Examples that suggest possibilities without prescribing a "right way"</li>
          <li>Space for works-in-progress to be stored and revisited</li>
        </ul>

        <h3>When More Direction Is Appropriate</h3>
        
        <p>While child-led learning is our ideal, we recognize that there are times when more direct instruction is valuable:</p>

        <ul>
          <li>When introducing potentially hazardous materials or tools</li>
          <li>When teaching technical skills that require specific sequences</li>
          <li>When children express frustration with not knowing how to realize their ideas</li>
          <li>When time constraints require more efficient approaches</li>
          <li>When scaffolding participation for children who find open-ended tasks overwhelming</li>
        </ul>

        <p>The key is that even more directed teaching should ultimately serve children's creative agency, not replace it.</p>

        <h3>Conclusion: Trust the Process</h3>
        
        <p>Perhaps the most important element in balancing structure and freedom is trust—trust in children's innate creativity and in the organic unfolding of the creative process. When we truly trust children as creative beings, we become more comfortable with the messiness, false starts, unexpected directions, and surprising outcomes that characterize authentic creative learning.</p>

        <p>By creating conditions where children can safely explore their own ideas while benefiting from thoughtful guidance, we nurture not just artistic skills but the creative thinking that will serve them throughout their lives. The magic happens not when we control the creative journey, but when we create the conditions for children to discover their own path—and then have the privilege of walking alongside them as they explore.</p>
      `,
    },
    {
      id: "digital-creativity",
      title:
        "Digital Creativity: Balancing Screen Time with Meaningful Creative Engagement",
      excerpt:
        "How digital tools can enhance rather than replace traditional creative experiences for today's children.",
      image:
        "https://res.cloudinary.com/dydlkejl0/image/upload/v1741882559/child_playing_with_dinosaur_gv7xpm.jpg",
      date: "January 20, 2025",
      author: "Alex Chen",
      tags: ["Digital Learning", "Technology", "Creative Tools"],
      content: `
        <h2>Finding the Sweet Spot: Creative Technology in Childhood</h2>
        
        <p>In today's digital world, parents and educators often find themselves in a challenging position: how do we harness the creative potential of technology while ensuring children maintain a balanced relationship with screens and develop hands-on creative skills?</p>

        <p>At Rainbow Spark, we believe that digital tools can either enhance or diminish creative development, depending on how they're integrated into children's lives. The key is not whether children use technology, but <em>how</em> they use it—as active creators rather than passive consumers.</p>

        <h3>Beyond the False Dichotomy</h3>
        
        <p>The debate around children's technology use often falls into an unhelpful binary: digital tools are either demonized as creativity-killers or uncritically embraced as inherently educational. The reality is more nuanced.</p>

        <p>Digital tools can:</p>
        <ul>
          <li>Expand creative possibilities beyond physical limitations</li>
          <li>Make certain forms of creation more accessible to children with diverse abilities</li>
          <li>Connect children with creative communities and inspirations</li>
          <li>Develop technical skills that enable new forms of expression</li>
          <li>Document and extend learning from physical creative experiences</li>
        </ul>

        <p>However, when digital experiences replace rather than complement hands-on creativity, children miss crucial sensory, physical, and social learning opportunities.</p>

        <h3>Meaningful Digital Creation vs. Consumption</h3>
        
        <p>The distinction between active creation and passive consumption is central to healthy technology use. When evaluating apps, games, or programs, consider:</p>

        <ul>
          <li>Does the child actively make choices and create something original?</li>
          <li>Does the technology offer genuine creative freedom or just pre-set options?</li>
          <li>Is the focus on the process of creation or just producing a polished end product?</li>
          <li>Does the experience build skills that transfer beyond the specific app?</li>
          <li>Is the child's role primarily reactive or generative?</li>
        </ul>

        <p>For example, a drawing app that only allows children to color in pre-drawn templates offers less creative development than one where they can create original designs. Similarly, a music app that only allows arranging pre-recorded loops offers less compositional learning than one where children create their own musical elements.</p>

        <h3>Digital Creation in Our Programs</h3>
        
        <p>At Rainbow Spark, we integrate digital creativity tools in ways that enhance rather than replace traditional creative experiences:</p>

        <ul>
          <li><strong>Stop-motion animation:</strong> Combines physical creation of characters and settings with digital capture and editing</li>
          <li><strong>Digital storytelling:</strong> Uses recording and multimedia tools to bring traditionally written stories to life</li>
          <li><strong>Music production:</strong> Combines acoustic sound exploration with digital composition and arrangement</li>
          <li><strong>Game design:</strong> Uses game creation platforms to develop narrative, visual design, and logical thinking skills</li>
          <li><strong>Digital documentation:</strong> Teaches photography and video as ways to capture and reflect on creative processes</li>
        </ul>

        <p>In each case, the technology serves the creative vision rather than determining it, and digital tools are integrated with physical materials and face-to-face collaboration.</p>

        <h3>Developmental Considerations</h3>
        
        <p>Children's developmental readiness for various forms of digital creativity changes as they grow:</p>

        <ul>
          <li><strong>Early years (4-6):</strong> Limited screen-based creation, with emphasis on simple tools that extend physical play (e.g., taking photos of block structures or recording stories about artwork)</li>
          <li><strong>Primary years (7-11):</strong> Gradual introduction of creation-focused apps and programs, always balanced with hands-on creativity and with emphasis on open-ended tools rather than template-based options</li>
          <li><strong>Secondary years (12+):</strong> More sophisticated digital creation tools that develop transferable skills, with emphasis on critical thinking about digital media and creative integrity</li>
        </ul>

        <p>Across all ages, we maintain a focus on the creative process rather than just the digital output, encouraging reflection, iteration, and connection between digital and physical creative experiences.</p>

        <h3>Practical Tips for Parents and Educators</h3>
        
        <p>To foster healthy digital creativity in children's lives:</p>

        <ul>
          <li>Curate a small collection of high-quality creative apps rather than downloading many mediocre options</li>
          <li>Sit alongside children as they explore new digital tools, asking open questions about their creative choices</li>
          <li>Look for tools that allow saving and revisiting work over time, encouraging the development of projects rather than quick consumption</li>
          <li>Establish clear boundaries about when and for how long digital tools are used</li>
          <li>Create intentional bridges between digital and physical creativity (e.g., drawing characters on paper before animating them digitally)</li>
          <li>Model your own thoughtful use of technology as a creative tool rather than primarily for consumption</li>
        </ul>

        <h3>Conclusion: Technology as Creative Amplifier</h3>
        
        <p>When thoughtfully integrated, technology can amplify children's creative capabilities without diminishing their connection to physical materials, sensory experiences, and face-to-face collaboration. The goal is to develop young people who move fluidly between digital and non-digital creative modes, choosing the right tools for their expressive purposes.</p>

        <p>By fostering this balanced approach, we help children develop both the traditional creative foundations that humans have used for millennia and the digital literacy needed for creative expression in the contemporary world. The sweet spot isn't about finding a perfect amount of "screen time"—it's about ensuring that time with technology builds rather than limits creative capacity.</p>
      `,
    },
  ];

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-rainbow-blue/10 to-transparent">
          <div className="container px-4">
            {selectedPost ? (
              <BlogPost post={selectedPost} onBack={handleBack} />
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  Our Blog
                </h1>
                <p className="text-lg text-center max-w-3xl mx-auto mb-12">
                  Insights, ideas, and inspiration from the world of creative
                  education for children.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-56 md:h-64 overflow-hidden">
                        <img
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          src={post.image}
                          alt={post.title}
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-rainbow-purple/10 text-rainbow-purple px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h2 className="text-xl font-bold mb-3 hover:text-rainbow-purple transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4">{post.excerpt}</p>

                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="opacity-70" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="opacity-70" />
                            <span>5 min read</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <div className="bg-rainbow-blue/20 p-2 rounded-full">
                            <User size={14} className="text-rainbow-blue" />
                          </div>
                          <span className="text-sm font-medium">
                            {post.author}
                          </span>
                        </div>

                        <button
                          onClick={() => handlePostSelect(post)}
                          className="flex items-center font-bold text-rainbow-purple hover:text-rainbow-blue transition-colors"
                        >
                          Read More <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
