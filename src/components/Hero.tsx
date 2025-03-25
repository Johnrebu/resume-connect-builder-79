
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full">
              Transform your LinkedIn profile
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-balance">
              From LinkedIn to Standout CV in <span className="text-primary">Seconds</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg">
              Import your LinkedIn profile and instantly create a beautifully designed, professional CV that gets you noticed by employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button size="lg" className="group">
                Create Your CV Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Templates
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-3 animate-float"></div>
              <div className="relative glassmorphism rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">LinkedIn Profile</h3>
                    <p className="text-sm text-muted-foreground">Connect and import</p>
                  </div>
                </div>
                
                <div className="h-[300px] bg-muted rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-muted-foreground">Preview of LinkedIn import</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-muted-foreground/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Linkedin } from "lucide-react";
export default Hero;
