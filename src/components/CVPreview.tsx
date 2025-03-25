
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon, DownloadIcon, EyeIcon, PencilIcon } from "lucide-react";
import { LinkedInProfileData } from './LinkedInForm';

interface CVPreviewProps {
  profileData: LinkedInProfileData | null;
}

const CVPreview: React.FC<CVPreviewProps> = ({ profileData }) => {
  const hasData = profileData !== null;

  return (
    <section className="py-20 bg-muted/30" id="cv-preview">
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
              <Button size="lg" className="group" onClick={() => document.getElementById('import')?.scrollIntoView({ behavior: 'smooth' })}>
                {hasData ? "Edit Your CV" : "Create Your CV Now"}
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
                          <h3 className="text-2xl font-bold">{hasData ? profileData.name : "John Doe"}</h3>
                          <p className="text-primary">{hasData ? profileData.title : "Your Job Title"}</p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {hasData ? profileData.summary : "Enter a brief professional summary here."}
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
                            {hasData ? (
                              profileData.experience.map((exp, index) => (
                                <div key={index}>
                                  <div className="flex justify-between">
                                    <div>
                                      <h5 className="font-medium">{exp.role}</h5>
                                      <p className="text-sm">{exp.company}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{exp.duration}</p>
                                  </div>
                                  {exp.description && (
                                    <ul className="text-xs text-muted-foreground mt-1 space-y-1 list-disc list-inside">
                                      {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))
                            ) : (
                              <div>
                                <div className="flex justify-between">
                                  <div>
                                    <h5 className="font-medium">Your Position</h5>
                                    <p className="text-sm">Company Name</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground">Year - Year</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">EDUCATION</h4>
                          <div className="space-y-3">
                            {hasData ? (
                              profileData.education.map((edu, index) => (
                                <div key={index}>
                                  <div className="flex justify-between">
                                    <div>
                                      <h5 className="font-medium">{edu.degree}</h5>
                                      <p className="text-sm">{edu.institution}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{edu.duration}</p>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div>
                                <div className="flex justify-between">
                                  <div>
                                    <h5 className="font-medium">Your Degree</h5>
                                    <p className="text-sm">University Name</p>
                                  </div>
                                  <p className="text-xs text-muted-foreground">Year - Year</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">CONTACT</h4>
                          <div className="space-y-1 text-sm">
                            {hasData ? (
                              <>
                                <p>{profileData.contact.email}</p>
                                <p>{profileData.contact.phone}</p>
                                <p>{profileData.contact.location}</p>
                              </>
                            ) : (
                              <>
                                <p>email@example.com</p>
                                <p>(123) 456-7890</p>
                                <p>City, Country</p>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">SKILLS</h4>
                          <div className="flex flex-wrap gap-1">
                            {hasData ? (
                              profileData.skills.map((skill, index) => (
                                <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full">
                                  {skill}
                                </span>
                              ))
                            ) : (
                              <>
                                <span className="text-xs px-2 py-1 bg-muted rounded-full">Skill 1</span>
                                <span className="text-xs px-2 py-1 bg-muted rounded-full">Skill 2</span>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">LANGUAGES</h4>
                          <div className="space-y-1 text-sm">
                            {hasData ? (
                              profileData.languages.map((language, index) => (
                                <p key={index}>{language}</p>
                              ))
                            ) : (
                              <>
                                <p>Language 1 (Proficiency)</p>
                                <p>Language 2 (Proficiency)</p>
                              </>
                            )}
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
