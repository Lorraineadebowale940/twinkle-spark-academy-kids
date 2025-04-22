
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="mb-6">Last Updated: April 22, 2025</p>
              
              <div className="prose prose-lg max-w-none">
                <h2>Introduction</h2>
                <p>
                  Rainbow Spark ("we," "our," or "us") is committed to protecting the privacy of all individuals who interact with our services. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you participate in our programs, 
                  visit our website, or communicate with us in any way.
                </p>
                
                <h2>Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                
                <h3>Personal Information</h3>
                <p>For participants in our programs:</p>
                <ul>
                  <li>Child's name, age, and date of birth</li>
                  <li>Parent/guardian contact information (name, email, phone number, address)</li>
                  <li>Emergency contact details</li>
                  <li>Medical information relevant to participation (allergies, conditions, medications)</li>
                  <li>Special educational needs or requirements</li>
                  <li>School information</li>
                </ul>
                
                <p>For schools and organizations:</p>
                <ul>
                  <li>Contact person's name and position</li>
                  <li>Organization name and address</li>
                  <li>Email address and phone number</li>
                  <li>Billing information</li>
                </ul>
                
                <h3>Media and Creative Work</h3>
                <ul>
                  <li>Photographs and videos of activities and events (with consent)</li>
                  <li>Creative work produced during programs</li>
                  <li>Feedback and testimonials</li>
                </ul>
                
                <h3>Website and Communication Data</h3>
                <ul>
                  <li>IP address and browser information</li>
                  <li>Interaction with our website</li>
                  <li>Communication records (emails, calls, messages)</li>
                </ul>
                
                <h2>How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                  <li>To provide and manage our programs and services</li>
                  <li>To ensure the safety and well-being of participants</li>
                  <li>To communicate with parents/guardians and organizations</li>
                  <li>To tailor our approaches to meet individual needs</li>
                  <li>To improve our programs and develop new offerings</li>
                  <li>To process payments and maintain accurate records</li>
                  <li>To comply with legal obligations</li>
                  <li>For marketing and promotional purposes (with consent)</li>
                </ul>
                
                <h2>Data Protection and Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, accidental loss, or damage. We regularly review and update our security practices.
                </p>
                <p>
                  Our staff receive regular training on data protection and confidentiality. Access to personal information
                  is restricted to staff members who need it to perform their roles.
                </p>
                
                <h2>Sharing Your Information</h2>
                <p>We may share your information with:</p>
                <ul>
                  <li>Staff and facilitators directly involved in program delivery</li>
                  <li>Partner organizations when necessary for collaborative programs (with disclosure)</li>
                  <li>Regulatory authorities when legally required</li>
                  <li>Emergency services when necessary for health and safety</li>
                </ul>
                <p>
                  We never sell personal information to third parties. We share information with third-party service providers only to the
                  extent necessary to deliver our services (e.g., payment processors, email services).
                </p>
                
                <h2>Your Rights</h2>
                <p>Under data protection legislation, you have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information in certain circumstances</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Object to processing in certain circumstances</li>
                  <li>Request restriction of processing</li>
                  <li>Request data portability where applicable</li>
                </ul>
                
                <h2>Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                  unless a longer retention period is required by law. For program participants, we typically retain information for
                  3 years after the last activity, after which it is securely deleted or anonymized.
                </p>
                
                <h2>Children's Privacy</h2>
                <p>
                  We are committed to protecting the privacy of children. We collect information about children only with the consent
                  of parents or guardians, or through schools acting in loco parentis. We take additional measures to protect children's
                  data and use it only for the purposes directly related to the programs in which they are participating.
                </p>
                
                <h2>Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the
                  new policy on our website or through direct communication.
                </p>
                
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer via email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
