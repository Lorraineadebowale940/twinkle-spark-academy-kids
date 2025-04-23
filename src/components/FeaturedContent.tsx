
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
  const featuredCase = {
    title: "Inclusive Drama Project at Meadow Primary School",
    summary: "A 12-week drama program that dramatically improved confidence and communication skills for 28 students with diverse needs.",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  };

  const featuredPosts = [
    {
      title: "How Drama Builds Confidence in Shy Children",
      excerpt: "From reluctance to resilience: see how dramatic play helps children overcome social anxiety.",
      image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      id: "drama-builds-confidence"
    },
    {
      title: "Understanding PDA: Creative Approaches",
      excerpt: "Learn how arts-based methods can reduce pressure for children with PDA profiles.",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      id: "understanding-pda"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Content</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our case studies and latest blog posts to learn more about our approach and impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Case Study with Lorraine's photo */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex h-full">
              <div className="md:w-1/2">
                <img 
                  className="h-64 w-full object-cover md:h-full" 
                  src={featuredCase.image} 
                  alt={featuredCase.title} 
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wide">Case Study</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{featuredCase.title}</h3>
                  <p className="mb-6">{featuredCase.summary}</p>
                </div>
                <div className="mt-auto">
                  <Button asChild>
                    <Link to="/case-studies">
                      Read Case Study <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Blog Posts Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Latest Articles</h3>
            
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow flex">
                <img 
                  className="w-24 h-24 object-cover" 
                  src={post.image} 
                  alt={post.title} 
                />
                <div className="p-4 flex-1">
                  <h4 className="font-bold mb-1 text-sm">{post.title}</h4>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.excerpt}</p>
                  <Link 
                    to={`/blog`} 
                    state={{ postId: post.id }}
                    className="text-xs text-primary font-medium flex items-center"
                  >
                    Read more <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-4">
              <Button variant="outline" asChild>
                <Link to="/blog">Browse All Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
