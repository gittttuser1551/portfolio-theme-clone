"use client";

import React from "react";

const AboutSection = () => {
  const skills = [
    "React.js", "Node.js", "JavaScript", "TypeScript", 
    "HTML/CSS", "SQL", "Git", "UI/UX Design"
  ];

  return (
    <section 
      id="about" 
      className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <h2 className="font-display text-primary text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30"></div>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/profile-1.jpg"
                alt="Sanya Garg"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <p className="font-body text-foreground text-base leading-relaxed">
              I am a Computer Science student at Netaji Subhas University of Technology with a passion for building impactful web applications. My journey in tech has been fueled by curiosity and a love for solving real-world problems through code.
            </p>
            <p className="font-body text-foreground text-base leading-relaxed">
              As a part of the WE Program at my university, I have had the opportunity to work on diverse projects, from e-commerce platforms to AI-powered tools. I thrive in collaborative environments and enjoy learning new technologies.
            </p>
            <p className="font-body text-foreground text-base leading-relaxed">
              When I'm not coding, you can find me exploring design trends, contributing to open-source projects, or brainstorming ideas for my next project. Let's connect and create something amazing together!
            </p>

            <div className="pt-4">
              <h3 className="font-body text-primary text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill} 
                    className={`
                      font-body text-sm px-4 py-2 rounded-full border-2 
                      transition-all duration-300 hover:scale-105 hover:shadow-lg
                      ${index % 3 === 0 ? 'bg-primary/10 border-primary text-primary hover:bg-primary hover:text-white' : ''}
                      ${index % 3 === 1 ? 'bg-accent/10 border-accent text-accent hover:bg-accent hover:text-white' : ''}
                      ${index % 3 === 2 ? 'bg-success/10 border-success text-success hover:bg-success hover:text-white' : ''}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;