"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function FadeIn({ children, delay = 0, duration = 1000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
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
    <main className="bg-[#18181b] pt-24 min-h-screen text-white">
      {/* HOME */}
      <section id="home" className="px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          <div className="text-center md:text-left">
            <FadeIn delay={100} duration={800}>
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl my-6">
                Hello!
              </h1>
            </FadeIn>

            <FadeIn delay={1200} duration={800}>
              <p className="text-lg sm:text-xl md:text-2xl mb-6">
                Great to see you here, welcome to my portfolio.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={1800} duration={800}>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-160 h-140 rounded-full bg-red-500/40 blur-3xl animate-spin z-10"></div>

              <Image
                src="/daniel.png"
                alt="Me"
                width={500}
                height={480}
                unoptimized
                className="w-120 h-140 rounded-lg border-4 border-red-600 object-cover relative z-20"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold">About Me</h1>
          <hr className="w-32 border-t-4 border-red-600 my-6" />
          <p className="text-base sm:text-lg md:text-xl opacity-85">
            My name is Daniel, I'm a 19 years old software developer. Graduated
            in Internet Systems at the Catholic University of Pernambuco. I
            learned Front End and Back End programming, developed projects and
            participated in the Porto Digital Technology Residency.
          </p>
        </div>
      </section>

      {/* ACADEMIC */}
      <section
        id="academic"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Academic</h1>
          <hr className="w-32 border-t-4 border-red-600 my-6" />
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="border-4 border-red-600 rounded-lg p-6 max-w-sm">
              <p className="text-lg font-bold opacity-85">
                Undergraduate in Internet Systems at the Catholic University of
                Pernambuco.
              </p>
              <p className="text-sm text-red-400 font-bold mt-2">
                2024.1 - 2026.1
              </p>
              <p className="text-sm opacity-80 font-bold mt-4 text-left">
                Graduation in progress of the Higher Course in Internet Systems
                Technology at the Catholic University of Pernambuco.
              </p>
            </div>
            <div className="border-4 border-red-600 rounded-lg p-6 max-w-sm">
              <p className="text-lg font-bold opacity-85">
                Porto Digital Technology Residency.
              </p>
              <p className="text-sm text-red-400 font-bold mt-2">
                2024.1 - 2026.1
              </p>
              <p className="text-sm opacity-80 font-bold mt-4 text-left">
                Where I am trained through challenges and courses alongside
                renowned companies that are partners of Porto Digital in Recife
                and the Northeast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Skills</h1>
          <hr className="w-32 border-t-4 border-red-600 my-6" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6">
            {[
              "java",
              "python",
              "react",
              "mysql",
              "js",
              "html",
              "css",
              "node",
              "git",
            ].map((skill) => (
              <Image
                key={skill}
                src={`/${skill}.png`}
                alt={`${skill} logo`}
                width={64}
                height={64}
                unoptimized
                className="w-16 h-16"
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
          <hr className="w-32 border-t-4 border-red-600 my-6" />
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-6">
            {[
              {
                name: "Bulls & Cows",
                url: "https://bulls-and-cows-rho.vercel.app/",
                img: "/bulls&cows.png",
              },
              {
                name: "Healnet",
                url: "https://healnet-ipw.vercel.app/",
                img: "/healnet.png",
              },
              {
                name: "Conversor de Valores",
                url: "https://pfe-2025-1-nine.vercel.app/app-conversores",
                img: "/conversor.png",
              },
            ].map((project) => (
              <div key={project.name} className="flex flex-col items-center">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={project.img}
                    alt={project.name}
                    width={300}
                    height={180}
                    unoptimized
                    className="w-full max-w-xs rounded-lg border-4 border-red-600 object-cover mb-2 transition hover:scale-105"
                  />
                </a>
                <p className="text-lg">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          <hr className="w-32 border-t-4 border-red-600 my-6" />
          <p className="text-base sm:text-lg md:text-xl opacity-85">
            If you are interested in my work or want to know me better, contact
            me in one of these ways:
          </p>
          <div className="flex gap-6 mt-10 justify-center">
            {[
              {
                url: "https://www.linkedin.com/in/imdaniellevi/",
                icon: "/linkedin.png",
              },
              {
                url: "https://wa.me/5581988397114?text=Oi%2C%20quero%20saber%20mais%20sobre%20seus%20serviços!",
                icon: "/whatsapp.png",
              },
              {
                url: "mailto:danilevi2005@outlook.com",
                icon: "/email.png",
              },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={contact.icon}
                  alt="Contact Icon"
                  width={40}
                  height={40}
                  unoptimized
                  className="w-10 h-10 transition hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
