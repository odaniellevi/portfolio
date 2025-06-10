"use client";

import "./globals.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

      <section
        id="about"
        className="min-h-screen px-6 mt-[50px] flex items-center justify-center"
      >
        <div className="flex mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-100 font-bold">About Me</h1>
          <br></br>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <p className="opacity-85 text-3xl mt-7 max-w-2xl text-left">
            My name is Daniel, i&apos;m a 19 years old software developer.
            Graduated in Internet Systems at the Catholic University of
            Pernambuco. I learned Front End and Back End programming, developed
            projects and participated in the Porto Digital Technology Residency.
          </p>
        </div>
      </section>

      <section
        id="academic"
        className="min-h-screen px-6 mt-[10px] flex items-center justify-center"
      >
        <div className="flex gap-6 mt-90 flex-col items-center">
          <h1 className="text-4xl -mt-95 font-bold">Academic</h1>
          <hr className="w-100 border-t-4 border-red-600 my-6" />
          <div className="flex gap-30">
            <div className="border-4 w-110 h-80 border-red-600 bg-none rounded-lg p-6">
              <br></br>
              <p className="text-2xl font-bold opacity-85">
                Undergraduate in Internet Systems at the Catholic University of
                Pernambuco.
              </p>
              <p className="text-1xl text-red-400 font-bold opacity-75">
                2024.1 - 2026.1
              </p>
              <br></br>
              <p className="text-1xl opacity-80 font-bold text-left">
                Graduation in progress of the Higher Course in Internet Systems
                Technology at the Catholic University of Pernambuco.
              </p>
            </div>
            <div className="border-4 w-110 h-80 border-red-600 bg-none rounded-lg p-6">
              <p className="text-2xl font-bold opacity-85">
                Porto Digital Technology Residency.
              </p>
              <p className="text-1xl text-red-400 font-bold opacity-75">
                2024.1 - 2026.1
              </p>
              <br></br>
              <p className="text-1xl opacity-80 font-bold text-left">
                Where I am trained through challenges and courses alongside
                renowned companies that are partners of Porto Digital in Recife
                and the Northeast.
              </p>
            </div>
          </div>
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
            <Image
              src="/java.png"
              alt="Java Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20"
            ></Image>

            <Image
              src="/python.png"
              alt="Python Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4 justify-between"
            ></Image>

            <Image
              src="/react.png"
              alt="React Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>
          </div>

          <div className="flex gap-8 mt-4">
            <Image
              src="/mysql.png"
              alt="MySQL Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>

            <Image
              src="/js.png"
              alt="JavaScript Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>

            <Image
              src="/html.png"
              alt="HTML Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>
          </div>

          <div className="flex gap-8 mt-4">
            <Image
              src="/css.png"
              alt="CSS Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>

            <Image
              src="/node.png"
              alt="Node.js Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>

            <Image
              src="/git.png"
              alt="Git Logo"
              width={20}
              height={20}
              unoptimized
              className="w-20 h-20 mt-4"
            ></Image>
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
                href="https://bulls-and-cows-rho.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/bulls&cows.png"
                  alt="Bulls & Cows Project"
                  width={90}
                  height={50}
                  unoptimized
                  className="w-90 h-50 rounded-lg border-4 border-red-600 object-cover mb-4 transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              </a>
              <div className="text-center">
                <p className="text-2xl mb-4">Bulls & Cows</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://healnet-ipw.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/healnet.png"
                  alt="Healnet Project"
                  width={90}
                  height={50}
                  unoptimized
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
                <Image
                  src="/conversor.png"
                  alt="Conversor Project"
                  width={90}
                  height={50}
                  unoptimized
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
              <Image
                src="/linkedin.png"
                alt="LinkedIn Icon"
                width={15}
                height={15}
                unoptimized
                className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
              />
            </a>

            <a
              href="https://wa.me/5581988397114?text=Oi%2C%20quero%20saber%20mais%20sobre%20seus%20serviços!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp Icon"
                width={15}
                height={15}
                unoptimized
                className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
              />
            </a>

            <a
              href="mailto: danilevi2005@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/email.png"
                alt="Email Icon"
                width={15}
                height={15}
                unoptimized
                className="w-15 h-15 transition duration-300 hover:scale-105 hover:shadow-lg"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
