"use client";

import { Github, Linkedin, Mail, Code } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/sanyagargg",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sanya-garg-397902276/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://leetcode.com/u/s161204/",
    icon: Code,
    label: "LeetCode",
  },
  {
    href: "mailto:sanyaa.gargg@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export const SocialSidebar = () => (
  <aside className="fixed bottom-10 left-4 md:left-8 z-50 hidden md:flex flex-col gap-4">
    {socialLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="text-primary hover:text-accent transition-colors duration-300 hover:scale-110"
      >
        <link.icon className="w-10 h-10" />
      </a>
    ))}
  </aside>
);

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-rose-100 via-pink-100 to-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="font-display text-primary text-4xl md:text-5xl font-bold mb-6">
          Get In Touch
        </h2>
        <p className="font-body text-foreground/80 text-base md:text-lg mb-12 max-w-2xl">
          Have a question or want to work together? Contact me at:
        </p>
        
        <div className="bg-white border-2 border-border rounded-2xl shadow-2xl p-10 md:p-12 max-w-2xl w-full">
          <div className="space-y-5 font-body text-left">
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold min-w-[80px]">Name:</span>
              <span className="text-foreground">Sanya Garg</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold min-w-[80px]">Email:</span>
              <a
                href="mailto:sanyaa.gargg@gmail.com"
                className="text-primary hover:text-accent underline transition-colors duration-300"
              >
                sanyaa.gargg@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold min-w-[80px]">GitHub:</span>
              <a
                href="https://github.com/sanyagargg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline transition-colors duration-300"
              >
                github.com/sanyagargg
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-semibold min-w-[80px]">LinkedIn:</span>
              <a
                href="https://linkedin.com/in/sanya-garg-397902276/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent underline transition-colors duration-300"
              >
                linkedin.com/in/sanya-garg-397902276/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;