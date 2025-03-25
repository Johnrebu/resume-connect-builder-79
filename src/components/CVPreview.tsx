
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon, DownloadIcon, EyeIcon, PencilIcon } from "lucide-react";

const CVPreview: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Your Professional CV, Instantly Created</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose from various professional templates and customize to match your personal brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                <h3 className="text-xl font-semibold">Import Your Profile</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Link your LinkedIn account or upload your existing resume to instantly populate your CV with your professional history.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                <h3 className="text-xl font-semibold">Customize Your Design</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Choose from professional templates and customize colors, fonts, and layouts to match your personal brand.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                <h3 className="text-xl font-semibold">Download & Share</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Export your finalized CV as a PDF, share directly with employers, or generate a unique link to your online resume.
              </p>
            </div>
            
            <div className="pl-10 pt-4">
              <Button size="lg" className="group">
                Create Your CV Now
                <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/20 rounded-xl transform -rotate-2 animate-float"></div>
            <Card className="overflow-hidden relative z-10">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-4 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Button variant="secondary" size="sm" className="text-xs">
                      <EyeIcon className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                    <Button variant="secondary" size="sm" className="text-xs">
                      <PencilIcon className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <Button variant="secondary" size="sm" className="text-xs">
                    <DownloadIcon className="w-3 h-3 mr-1" />
                    Download
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 border-b">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">John Appleseed</h3>
                          <p className="text-primary">Senior Product Designer</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Creative product designer with 7+ years of experience creating user-centered digital solutions.
                          </p>
                        </div>
                        <div className="w-20 h-20 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 p-6">
                      <div className="col-span-2 space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">EXPERIENCE</h4>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h5 className="font-medium">Senior Product Designer</h5>
                                  <p className="text-sm">Design Company Inc.</p>
                                </div>
                                <p className="text-xs text-muted-foreground">2020 - Present</p>
                              </div>
                              <ul className="text-xs text-muted-foreground mt-1 space-y-1 list-disc list-inside">
                                <li>Led design of flagship product</li>
                                <li>Increased user engagement by 45%</li>
                              </ul>
                            </div>
                            
                            <div>
                              <div className="flex justify-between">
                                <div>
                                  <h5 className="font-medium">Product Designer</h5>
                                  <p className="text-sm">Technology Solutions Ltd.</p>
                                </div>
                                <p className="text-xs text-muted-foreground">2017 - 2020</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">EDUCATION</h4>
                          <div>
                            <div className="flex justify-between">
                              <div>
                                <h5 className="font-medium">Bachelor of Design</h5>
                                <p className="text-sm">University of Technology</p>
                              </div>
                              <p className="text-xs text-muted-foreground">2013 - 2017</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">CONTACT</h4>
                          <div className="space-y-1 text-sm">
                            <p>john@example.com</p>
                            <p>(123) 456-7890</p>
                            <p>New York, NY</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">SKILLS</h4>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">UI/UX</span>
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">Figma</span>
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">Sketch</span>
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">Prototyping</span>
                            <span className="text-xs px-2 py-1 bg-muted rounded-full">User Research</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">LANGUAGES</h4>
                          <div className="space-y-1 text-sm">
                            <p>English (Native)</p>
                            <p>Spanish (Conversational)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPreview;
