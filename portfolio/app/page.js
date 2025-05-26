import { Saira } from 'next/font/google';
import './globals.css';
import React from 'react';

const saira = Saira({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
  return (
    <main className={saira.className + "bg-gray-900 min-h-screen"}>
      <div className="text-line ml-30 mt-95">
        <h1 className="text-font font-bold text-6xl text-left my-10 mb-1 text-white">
          Hello!
        </h1>
        <p className = "text-font text-2xl text-left my-5 mt-0 text-white">
          Great see you here, welcome to my portfolio.
        </p>
      </div>
    </main>
  )
}