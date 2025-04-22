
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    title: "The Power of Creative Expression for Children with Special Needs",
    excerpt: "Discover how arts education creates unique pathways for learning, communication, and emotional development for children with diverse abilities.",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "April 15, 2025",
    author: "Lorraine Adebowale",
    tags: ["Special Needs", "Creative Arts", "Inclusion"]
  };

  const blogPosts = [
    {
      title: "How Drama Builds Confidence in Shy Children",
      excerpt: "From reluctance to resilience: see how dramatic play helps children overcome social anxiety and find their voice.",
      image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "April 10, 2025",
      author: "Sarah Martins",
      tags: ["Drama", "Confidence", "Social Skills"]
    },
    {
      title: "The Math in Music: Cross-Curricular Learning Through Rhythm",
      excerpt: "Explore how musical activities naturally reinforce mathematical concepts through patterns, counting, and fractions.",
      image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "April 5, 2025",
      author: "Michael Chen",
      tags: ["Music", "Mathematics", "Curriculum"]
    },
    {
      title: "Creating Inclusive Art Spaces: A Guide for Parents and Educators",
      excerpt: "Practical tips for establishing creative environments that welcome and support children of all abilities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 28, 2025",
      author: "Amara Okafor",
      tags: ["Inclusivity", "Art Education", "Accessibility"]
    },
    {
      title: "Digital Storytelling: Film Projects for Young Creators",
      excerpt: "How technology and traditional storytelling combine to give children powerful tools for self-expression.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 21, 2025",
      author: "David Kapoor",
      tags: ["Film", "Digital Media", "Storytelling"]
    },
    {
      title: "Understanding PDA: Creative Approaches to Pathological Demand Avoidance",
      excerpt: "Learn how arts-based methods can reduce pressure and build engagement for children with PDA profiles.",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 15, 2025",
      author: "Lorraine Adebowale",
      tags: ["PDA", "Autism", "Teaching Strategies"]
    },
    {
      title: "Dance and Movement for Early Development",
      excerpt: "How creative movement supports physical coordination, spatial awareness, and cognitive development in young children.",
      image: "https://images.unsplash.com/photo-1471666875520-c75081f42081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      date: "March 8, 2025",
      author: "Elena Torres",
      tags: ["Dance", "Early Years", "Development"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Insights, ideas, and inspiration for creative education, inclusive learning, and supporting children's artistic development.
            </p>
            
            {/* Featured Post */}
            <div className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    className="h-64 w-full object-cover md:h-full" 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredPost.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-rainbow-purple/10 text-rainbow-purple px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="mb-4 text-lg">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    className="h-48 w-full object-cover" 
                    src={post.image} 
                    alt={post.title} 
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-rainbow-purple/10 text-rainbow-purple px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90 p-0">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
