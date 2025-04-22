
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What ages do your programs cater to?",
      answer: "Our programs are designed for children aged 4-16 years. We have specific age-appropriate streams within each program to ensure activities match developmental stages. Early years (4-7), Primary (8-11), and Secondary (12-16) groups receive tailored content and approaches."
    },
    {
      question: "Do you work with children who have special educational needs?",
      answer: "Yes, inclusivity is at the core of our approach. All our programs are designed to be accessible to children with diverse needs, and we have specialized experience working with autism, ADHD, sensory processing needs, and learning differences. We collaborate with parents and educators to understand specific requirements and make appropriate accommodations."
    },
    {
      question: "How are your after-school clubs structured?",
      answer: "Our after-school clubs run for 1.5 hours (typically 3:30-5:00pm) once a week during term time. Each term focuses on a different creative theme, with activities spanning multiple art forms. Children receive consistent facilitation from the same team each week, building relationships and trust. Groups are limited to 15 children to ensure quality attention."
    },
    {
      question: "What qualifications do your facilitators have?",
      answer: "All our facilitators have professional qualifications in their creative specialties combined with educational training. They hold enhanced DBS checks, first aid certification, and undergo regular safeguarding training. Many have additional qualifications in special educational needs. We carefully match facilitators' expertise to program requirements."
    },
    {
      question: "Can you deliver programs at our school or venue?",
      answer: "Yes, we bring our programs to schools, community centers, and other venues across the region. Our mobile setup allows us to transform any suitable space into a creative environment. We require some basic facilities such as adequate space, access to water for cleanup, and electrical outlets, but we're adaptable to various settings."
    },
    {
      question: "How do you assess the impact of your programs?",
      answer: "We use a combination of quantitative and qualitative measures to evaluate outcomes. These include pre and post-program assessments of specific skills, observational records, feedback from children and staff, and creative portfolios documenting development. For longer programs, we provide detailed impact reports highlighting both individual and group progress."
    },
    {
      question: "Do you offer taster sessions before committing to a full program?",
      answer: "Yes, we understand that schools and organizations want to ensure our approach aligns with their needs. We offer standalone taster workshops that showcase our methodology while providing valuable creative experiences. These can be arranged at a reduced rate and the cost is deductible from any full program booked within three months."
    },
    {
      question: "What COVID-19 safety measures do you have in place?",
      answer: "We continuously update our health and safety protocols in line with current guidance. These include regular testing of staff, enhanced cleaning of equipment, appropriate ventilation, and adaptable activities that can accommodate physical distancing when required. We work closely with venues to ensure complementary approaches to health and safety."
    },
    {
      question: "How far in advance should we book?",
      answer: "For after-school clubs and regular programs, we recommend booking at least half a term in advance as spaces fill quickly. For Big Bang Days and one-off workshops, 4-6 weeks' notice is preferable but we occasionally have last-minute availability, so it's always worth asking about current openings."
    },
    {
      question: "Do you have public liability insurance?",
      answer: "Yes, Rainbow Spark carries comprehensive public liability insurance with coverage up to £5 million. We can provide certificates upon request. We also maintain professional indemnity insurance and ensure all our operations meet stringent health and safety standards."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-gradient-to-b from-rainbow-blue/10 to-transparent">
          <div className="container px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Find answers to common questions about our programs, approach, and logistics.
            </p>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md p-6">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
