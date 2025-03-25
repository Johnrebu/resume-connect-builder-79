
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism px-6 py-4 transition-all duration-300 animate-slide-down">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Linkedin size={24} className="text-primary" />
            <span className="font-semibold text-lg tracking-tight">LinkedCV</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#templates" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Templates
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
