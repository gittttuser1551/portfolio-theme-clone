"use client";

import React from "react";
import { Download, Sparkles } from "lucide-react";

const ResumeSection = () => {
  return (
    <section 
      id="resume" 
      className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      {/* Decorative sparkles */}
      <div className="absolute top-20 left-20 text-primary opacity-20">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-32 text-accent opacity-20">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute top-1/2 right-20 text-success opacity-20">
        <Sparkles className="w-10 h-10" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-primary text-4xl md:text-5xl font-bold mb-6">
            Resume
          </h2>
          <p className="font-body text-foreground text-lg leading-relaxed mb-12">
            Always eager to tackle new challenges and deliver impactful solutions. 
            <br />
            Kindly find my resume below.
          </p>

          <div className="relative inline-block group">
            {/* Gradient glow background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            
            <a
              href="/resume.pdf"
              download
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white font-body text-lg font-semibold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-6 h-6" />
              Download Resume
            </a>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-success/20 to-transparent rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;