"use client";

import './globals.css';
import React, { useState, useEffect } from 'react';

function FadeIn({ children, delay = 0, duration = 1000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#18181b] ml-1 pt-24 min-h-screen text-white">
      
      <section id="home">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-8">
          <div className="text-line text-center -ml-20 md:text-left">
            <FadeIn delay={100} duration={800}>
              <h1 className="font-bold text-6xl my-10 mb-1">
                Hello!
              </h1>
            </FadeIn>

            <FadeIn delay={1200} duration={800}>
              <p className="text-2xl my-5 mt-0">
                Great to see you here, welcome to my portfolio.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={1800} duration={800}>
            <img
              src="/daniel.png"
              alt="Minha foto"
              className="w-100 h-120 rounded-lg border-4 border-red-600 object-cover"
            />
          </FadeIn>
        </div>
        </section>

      <section id="about" className="min-h-screen px-6 mt-[50px] flex items-center justify-center">
        <h1 className="text-4xl -mt-100 font-bold">About Me</h1>
      </section>

      <section id="skills" className="min-h-screen px-6 mt-[50px] flex items-center justify-center">
        <h2 className="text-4xl -mt-95 font-bold">Skills</h2>
      </section>

      <section id="projects" className="min-h-screen px-6 mt-[50px] flex items-center justify-center">
        <h2 className="text-4xl -mt-95 font-bold">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen px-6 mt-[50px] flex items-center justify-center">
        <h2 className="text-4xl -mt-95 font-bold">Contact</h2>
      </section>

      </main>
    );
}
