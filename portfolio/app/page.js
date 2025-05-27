"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";

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
              <h1 className="font-bold text-6xl my-10 mb-1">Hello!</h1>
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

      <section
        id="about"
        className="min-h-screen px-6 mt-[50px] flex items-center justify-center"
      >
        <div className="flex mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-100 font-bold">About Me</h1>
          <br></br>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <p className="opacity-85 text-3xl mt-7 max-w-2xl text-left">
            My name is Daniel, i'm a 19 years old software developer. Graduated
            in Internet Systems at the Catholic University of Pernambuco. I
            learned Front End and Back End programming, developed projects and
            participated in the Porto Digital Technological Residency.
          </p>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen px-6 mt-[10px] flex items-center justify-center"
      >
        <div className="flex mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-95 font-bold">Skills</h1>
          <br></br>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <br></br>
          <div className="flex gap-8">
            <img src="/java.png" alt="Java Logo" className="w-20 h-20"></img>

            <img
              src="/python.png"
              alt="Python Logo"
              className="w-20 h-20 mt-4 justify-between"
            ></img>

            <img
              src="/react.png"
              alt="React Logo"
              className="w-20 h-20 mt-4"
            ></img>
          </div>

          <div className="flex gap-8 mt-4">
            <img
              src="/mysql.png"
              alt="MySQL Logo"
              className="w-20 h-20 mt-4"
            ></img>

            <img
              src="/js.png"
              alt="JavaScript Logo"
              className="w-20 h-20 mt-4"
            ></img>

            <img
              src="/html.png"
              alt="HTML Logo"
              className="w-20 h-20 mt-4"
            ></img>
          </div>

          <div className="flex gap-8 mt-4">
            <img src="/css.png" alt="CSS Logo" className="w-20 h-20 mt-4"></img>

            <img
              src="/node.png"
              alt="Node.js Logo"
              className="w-20 h-20 mt-4"
            ></img>

            <img src="/git.png" alt="Git Logo" className="w-20 h-20 mt-4"></img>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen px-6 mt-[50px] flex items-center justify-center"
      >
        <div className="flex mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-95 font-bold">Projects</h1>
          <br></br>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <br></br>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <a
                href="https://healnet-ipw.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/healnet.png"
                  alt="Healnet Project"
                  className="w-90 h-50 rounded-lg border-4 border-red-600 object-cover mb-4 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>
              <div className="text-center">
                <p className="text-2xl mb-4">Healnet</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://pfe-2025-1-nine.vercel.app/app-conversores"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/conversor.png"
                  alt="Conversor Project"
                  className="w-90 h-50 rounded-lg border-4 border-red-600 object-cover mb-4 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>
              <div className="text-center">
                <p className="text-2xl mb-4">Conversor de Valores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen px-6 mt-[50px] flex items-center justify-center"
      >
        <div className="flex mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-95 font-bold">Contact</h1>
          <br></br>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <p className="opacity-85 text-2xl mt-7 max-w-2xl text-center">
            If you are interested in my work or want to know me better, contact
            me in one of these ways:
          </p>

        <div className="flex gap-8 mt-20 justify-center">
              <a
                href="https://www.linkedin.com/in/imdaniellevi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn Icon"
                  className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>

              <a
                href="https://wa.me/5581988397114?text=Oi%2C%20quero%20saber%20mais%20sobre%20seus%20serviços!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp Icon"
                  className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>

              <a
                href="mailto: danilevi2005@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/email.png"
                  alt="Email Icon"
                  className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>
          </div>  
        </div>
      </section>
    </main>
  );
}
