"use client";

import React from "react";
import { Briefcase, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section 
      id="experience" 
      className="relative bg-gradient-to-br from-white via-rose-50 to-pink-100 py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <h2 className="font-display text-primary text-4xl md:text-5xl font-bold text-center mb-16">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Experience 1 */}
          <div className="bg-white border-2 border-primary p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-body text-foreground text-2xl font-semibold">Charismatic Electronics</h3>
                <p className="font-body text-primary text-lg font-medium mt-1">Full Stack Developer Intern</p>
                <p className="font-body text-muted-foreground text-sm mt-1">January 2025 - April 2025</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <a 
                href="https://charismaticelectronics.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-primary font-body text-sm font-semibold underline transition-colors duration-300"
              >
                Live Site <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/sanyagargg/ecommerce-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-primary font-body text-sm font-semibold underline transition-colors duration-300"
              >
                GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <ul className="space-y-3 font-body text-foreground text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Developed a full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React, Node.js)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Designed and implemented custom forms for transformer specifications and bulk order inquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></span>
                <span>Integrated MongoDB for efficient data storage and retrieval of product information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Collaborated with the team using Git for version control and code management</span>
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="bg-white border-2 border-accent p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-body text-foreground text-2xl font-semibold">DRDO (Defence Research & Development Organization)</h3>
                <p className="font-body text-accent text-lg font-medium mt-1">Software Intern</p>
                <p className="font-body text-muted-foreground text-sm mt-1">May 2025 - July 2025</p>
              </div>
            </div>

            <ul className="space-y-3 font-body text-foreground text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Worked on quantum computing simulation projects, focusing on quantum circuits and algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Contributed to the development of modular architecture for scalable quantum simulation software</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></span>
                <span>Implemented teleportation simulation modules using Python and quantum computing libraries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                <span>Collaborated with research teams to optimize code and improve simulation accuracy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;