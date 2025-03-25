
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import LinkedInForm from '../components/LinkedInForm';
import CVPreview from '../components/CVPreview';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CheckCircle2, Linkedin } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        <Hero />
        
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Why Choose LinkedCV?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Our platform makes creating professional CVs from LinkedIn profiles simple, fast, and effective.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glassmorphism p-6 rounded-xl animate-scale-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <LinkedInForm />
        
        <CVPreview />
        
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Linkedin className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your LinkedIn Profile into an Impressive CV?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who have streamlined their job application process with LinkedCV.
              </p>
              <Button size="lg" className="group">
                Get Started for Free
                <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="mt-8 flex justify-center space-x-6 text-sm text-muted-foreground">
                {socialProof.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Linkedin size={20} className="text-primary" />
              <span className="font-semibold">LinkedCV</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Templates</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LinkedCV. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for features section
const features = [
  {
    icon: Linkedin,
    title: "LinkedIn Import",
    description: "Instantly import your work history, skills, and recommendations from your LinkedIn profile."
  },
  {
    icon: CheckCircle2,
    title: "ATS-Optimized",
    description: "Our CV templates are designed to pass through Applicant Tracking Systems with ease."
  },
  {
    icon: ArrowRightIcon,
    title: "Tailored for Your Industry",
    description: "Choose from templates specifically designed for your professional field and career level."
  }
];

// Social proof data
const socialProof = [
  "No credit card required",
  "Used by 100,000+ professionals",
  "4.9/5 average rating"
];

export default Index;
