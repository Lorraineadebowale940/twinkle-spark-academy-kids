
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    tags: string[];
    content: string;
  };
  onBack: () => void;
}

const BlogPost = ({ post, onBack }: BlogPostProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-64 md:h-80">
        <img 
          className="h-full w-full object-cover" 
          src={post.image} 
          alt={post.title} 
        />
      </div>
      
      <div className="p-6 md:p-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={onBack}
        >
          <ArrowLeft size={18} className="mr-2" /> Back to all articles
        </Button>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-rainbow-purple/10 text-rainbow-purple px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b">
          <div className="flex items-center gap-4">
            <div className="bg-rainbow-blue/20 p-2 rounded-full">
              <User size={16} className="text-rainbow-blue" />
            </div>
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>5 min read</span>
          </div>
        </div>
        
        <article 
          className="prose prose-lg max-w-none prose-headings:text-rainbow-purple prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:my-4 prose-a:text-rainbow-blue prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ul:my-4 prose-li:my-1 prose-li:pl-1"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-12 pt-8 border-t flex flex-wrap items-center justify-between gap-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
          >
            <ArrowLeft size={16} className="mr-2" /> Back to all articles
          </Button>
          
          <div className="flex items-center gap-6">
            <div>
              <span className="text-sm text-gray-600 block mb-2">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-blue-100 text-blue-500 hover:bg-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Button>
              </div>
            </div>
            
            <div>
              <span className="text-sm text-gray-600 block mb-2">Related topics:</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <Link 
                    key={i}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
