"use client";

import { useState } from "react";

const navLinks = [
"Home",
"About",
"Education",
"Experience",
"Projects",
"Resume",
"Contact"];


const HamburgerIcon = ({ isOpen }: {isOpen: boolean;}) =>
<div className="relative h-6 w-[25px]">
    <span
    className={`absolute left-0 block h-[3px] w-full rounded-sm bg-primary transition-transform duration-300 ease-in-out ${
    isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`
    }>
  </span>
    <span
    className={`absolute left-0 top-1/2 block h-[3px] w-full -translate-y-1/2 rounded-sm bg-primary transition-opacity duration-300 ease-in-out ${
    isOpen ? "opacity-0" : "opacity-100"}`
    }>
  </span>
    <span
    className={`absolute left-0 block h-[3px] w-full rounded-sm bg-primary transition-transform duration-300 ease-in-out ${
    isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"}`
    }>
  </span>
  </div>;


const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] h-[70px]">
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm border-b border-border"></div>
        <nav className="relative mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 md:px-6 lg:px-16 !opacity-100">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
              aria-label="Main menu">

              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {navLinks.map((item) =>
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-body text-base capitalize transition-colors duration-300 ${
                item === "Home" ?
                "text-primary font-semibold" :
                "text-foreground/70 hover:text-primary"}`
                }>

                  {item}
                  {item === "Home" &&
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"></span>
                }
                </a>
              )}
            </div>
          </div>
        </nav>
        {isMenuOpen &&
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-lg border-b border-border">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navLinks.map((item) =>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-md px-3 py-2 font-body text-base capitalize ${
              item === "Home" ?
              "text-primary bg-secondary font-semibold" :
              "text-foreground/70 hover:bg-secondary hover:text-primary"}`
              }>

                  {item}
                </a>
            )}
            </div>
          </div>
        }
      </header>
      
      <section
        id="home"
        className="relative flex h-screen min-h-[632px] w-full flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-white overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
        
        <div className="relative z-[1] text-center space-y-6 px-4">
            <h1 className="font-display text-6xl md:text-8xl leading-tight text-primary drop-shadow-sm">
              Sanya Garg
            </h1>
            <p className="font-body text-xl md:text-2xl text-foreground/80">Computer Science Student & Developer</p>
        </div>
      </section>
    </>);

};

export default HeroSection;