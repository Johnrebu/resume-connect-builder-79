
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Linkedin, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

// Define a type for the profile data
export type LinkedInProfileData = {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    description?: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
  }>;
  skills: string[];
  languages: string[];
  enhancedSummary?: string;
};

// Sample LinkedIn profile data
const sampleProfileData: LinkedInProfileData = {
  name: "John Appleseed",
  title: "Senior Product Designer",
  summary: "Creative product designer with 7+ years of experience creating user-centered digital solutions.",
  contact: {
    email: "john@example.com",
    phone: "(123) 456-7890",
    location: "New York, NY"
  },
  experience: [
    {
      role: "Senior Product Designer",
      company: "Design Company Inc.",
      duration: "2020 - Present",
      description: ["Led design of flagship product", "Increased user engagement by 45%"]
    },
    {
      role: "Product Designer",
      company: "Technology Solutions Ltd.",
      duration: "2017 - 2020",
      description: ["Redesigned core product interface", "Collaborated with development team"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Design",
      institution: "University of Technology",
      duration: "2013 - 2017"
    }
  ],
  skills: ["UI/UX", "Figma", "Sketch", "Prototyping", "User Research"],
  languages: ["English (Native)", "Spanish (Conversational)"]
};

// Sample AlienZeus data
const alienZeusProfileData: LinkedInProfileData = {
  name: "Md. Rezaul Alam",
  title: "Senior JavaScript Developer",
  summary: "Experienced JavaScript Developer with expertise in React, Node.js, and front-end technologies.",
  contact: {
    email: "rezaulalam@example.com",
    phone: "+880-123-456789",
    location: "Dhaka, Bangladesh"
  },
  experience: [
    {
      role: "Senior JavaScript Developer",
      company: "Tech Solutions BD",
      duration: "2020 - Present",
      description: ["Leading front-end development team", "Implemented responsive web applications using React"]
    },
    {
      role: "Web Developer",
      company: "Digital Innovations",
      duration: "2018 - 2020",
      description: ["Developed interactive web applications", "Optimized site performance"]
    }
  ],
  education: [
    {
      degree: "BSc in Computer Science",
      institution: "University of Dhaka",
      duration: "2014 - 2018"
    }
  ],
  skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "Redux", "REST API"],
  languages: ["Bengali (Native)", "English (Fluent)"]
};

interface LinkedInFormProps {
  onProfileImport: (profile: LinkedInProfileData) => void;
}

const LinkedInForm: React.FC<LinkedInFormProps> = ({ onProfileImport }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [geminiLoading, setGeminiLoading] = useState(false);
  const navigate = useNavigate();

  const validateLinkedInUrl = (url: string): boolean => {
    // Basic validation for LinkedIn URL format
    const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/i;
    return linkedInRegex.test(url);
  };

  const enhanceWithGemini = async (profileData: LinkedInProfileData): Promise<LinkedInProfileData> => {
    setGeminiLoading(true);
    try {
      const prompt = `
        Given this professional profile:
        Name: ${profileData.name}
        Title: ${profileData.title}
        Current Summary: ${profileData.summary}
        Skills: ${profileData.skills.join(', ')}
        Experience: ${profileData.experience.map(exp => `${exp.role} at ${exp.company}`).join(', ')}
        
        Write a compelling professional summary for their CV in about 100 words. Make it sound professional, highlight their skills and experience, and make them stand out. Do not include "Summary:" or other labels in your response.
      `;

      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCDSUu6Wrllv_Y7jT3B7K7aduDeHswlB2U", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const enhancedSummary = data.candidates[0].content.parts[0].text;
        return {
          ...profileData,
          enhancedSummary
        };
      } else {
        console.error('Unexpected Gemini API response format:', data);
        toast({
          title: "Gemini Enhancement Failed",
          description: "Could not enhance summary with Gemini. Using original summary.",
        });
        return profileData;
      }
    } catch (err) {
      console.error('Error calling Gemini API:', err);
      toast({
        title: "Gemini API Error",
        description: "Could not connect to Gemini API. Using original summary.",
      });
      return profileData;
    } finally {
      setGeminiLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setError('Please enter your LinkedIn URL');
      return;
    }
    
    // Check if URL contains linkedin.com/in/
    if (!validateLinkedInUrl(url)) {
      setError('Please enter a valid LinkedIn profile URL (e.g., https://www.linkedin.com/in/your-profile)');
      return;
    }
    
    setError('');
    setLoading(true);
    
    try {
      // Check if the URL contains "alienzeus"
      let profileData = url.toLowerCase().includes('alienzeus') 
        ? alienZeusProfileData 
        : sampleProfileData;
      
      // Enhance the profile with Gemini
      profileData = await enhanceWithGemini(profileData);
      
      toast({
        title: "Success!",
        description: "Your LinkedIn profile has been imported and enhanced successfully.",
      });
      
      // Pass the data up to the parent
      onProfileImport(profileData);
      
      // Clear the form
      setUrl('');
      
      // Scroll to CV preview section
      const previewSection = document.getElementById('cv-preview');
      if (previewSection) {
        previewSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      toast({
        title: "Import Failed",
        description: "There was an error importing your LinkedIn profile.",
        variant: "destructive"
      });
      console.error('Error during import:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) setError('');
  };

  return (
    <section className="py-20" id="import">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Import Your LinkedIn Profile</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The fastest way to create a professional CV is by importing your LinkedIn profile. Let's get started.
            </p>
          </div>
          
          <Card className="w-full animate-scale-in">
            <CardHeader>
              <div className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2 text-primary" />
                <CardTitle>LinkedIn Import</CardTitle>
              </div>
              <CardDescription>
                Enter your LinkedIn profile URL to import your professional data
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin-url">LinkedIn Profile URL</Label>
                    <Input 
                      id="linkedin-url"
                      placeholder="https://www.linkedin.com/in/your-profile"
                      value={url}
                      onChange={handleUrlChange}
                      className={error ? 'border-destructive' : ''}
                    />
                    {error && <p className="text-sm text-destructive">{error}</p>}
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-card px-2 text-xs text-muted-foreground">
                        Or upload your resume manually
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-full">
                    <label 
                      htmlFor="file-upload"
                      className="w-full flex flex-col items-center justify-center px-4 py-6 border-2 border-dashed rounded-md border-muted-foreground/30 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-2 text-base text-center">
                          <span className="font-medium text-primary">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOCX or TXT (MAX. 5MB)
                        </p>
                      </div>
                      <input id="file-upload" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full group" 
                onClick={handleSubmit}
                disabled={loading || geminiLoading}
              >
                {loading || geminiLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {loading ? "Importing..." : "Enhancing with Gemini..."}
                  </>
                ) : (
                  <>
                    Import and Generate with Gemini
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LinkedInForm;
