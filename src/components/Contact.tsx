
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions about our programs? Want to learn more about how we can support your child?
            Reach out to us and our team will be happy to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 py-6">Send Message</Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Our Location</h4>
                  <p className="mt-1">123 Creative Lane, Sparkville,<br />Rainbow County, RC1 2AB</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Phone Number</h4>
                  <p className="mt-1">+44 (0) 123 456 7890</p>
                  <p className="text-sm text-muted-foreground">Monday to Friday, 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Email Address</h4>
                  <p className="mt-1">hello@rainbowspark.edu</p>
                  <p className="text-sm text-muted-foreground">We aim to respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-bold mb-2">Connect With Us</h4>
              <p>Follow us on social media for updates, creative inspiration, and community events!</p>
              <div className="flex gap-4 mt-4">
                {/* Social media icons would go here */}
                <div className="w-10 h-10 rounded-full bg-rainbow-blue flex items-center justify-center text-white">FB</div>
                <div className="w-10 h-10 rounded-full bg-rainbow-red flex items-center justify-center text-white">IG</div>
                <div className="w-10 h-10 rounded-full bg-rainbow-yellow flex items-center justify-center text-white">TW</div>
                <div className="w-10 h-10 rounded-full bg-rainbow-green flex items-center justify-center text-white">YT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
