"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="education" 
      className="relative bg-gradient-to-br from-white via-pink-50 to-rose-100 py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <motion.div
        className="container mx-auto px-6 lg:px-8 flex flex-col items-center relative z-[1]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          variants={itemVariants} 
          className="font-display text-primary text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative w-full max-w-6xl">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 hidden lg:block"></div>
          
          {/* Timeline dots */}
          <div className="absolute left-1/2 top-32 w-6 h-6 bg-accent rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg hidden lg:block z-10"></div>
          <div className="absolute left-1/2 bottom-32 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg hidden lg:block z-10"></div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Education Card (University) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-start-1 lg:row-start-1 lg:justify-self-end lg:mt-0"
            >
              <div className="relative w-full lg:max-w-md">
                {/* Connecting line from card to center */}
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                
                <div className="bg-white border-2 border-accent p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-body text-foreground text-xl font-semibold">Netaji Subhas University of Technology</h3>
                  </div>
                  <h4 className="font-body text-primary text-base font-medium mb-3">Bachelor of Technology in Computer Science</h4>
                  <p className="font-body text-muted-foreground text-sm mb-2">2022 - 2026</p>
                  <p className="font-body text-accent text-base font-semibold mb-4">CGPA : 8.0</p>
                  <p className="font-body text-foreground text-sm leading-relaxed">Relevant coursework: Data Structures, Algorithms, Web Development, Database Management Systems, Operating Systems, Artificial Intelligence, Machine Learning, Deep Learning, Cryptography, Data Analytics with Python</p>
                </div>
              </div>
            </motion.div>

            {/* Right Education Card (High School) */}
            <motion.div
              variants={itemVariantsRight}
              className="lg:col-start-2 lg:row-start-2 lg:justify-self-start lg:mt-16"
            >
              <div className="relative w-full lg:max-w-md">
                {/* Connecting line from center to card */}
                <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-l from-primary to-transparent"></div>
                
                <div className="bg-white border-2 border-primary p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-body text-foreground text-xl font-semibold">OPG World School</h3>
                  </div>
                  <h4 className="font-body text-primary text-base font-medium mb-3">High School</h4>
                  <p className="font-body text-muted-foreground text-sm mb-3">2018 - 2022</p>
                  <div className="space-y-2">
                    <p className="font-body text-foreground text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      10th Grade: <span className="font-semibold text-accent">96.1%</span>
                    </p>
                    <p className="font-body text-foreground text-base flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      12th Grade: <span className="font-semibold text-primary">93.2%</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;