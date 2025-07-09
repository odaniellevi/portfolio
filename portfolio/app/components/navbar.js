"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Academic", href: "#academic" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">Daniel Levi</div>

        {/* Botão de menu (mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links no desktop */}
        <ul className="hidden md:flex gap-6 list-none">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="border-2 border-red-600 opacity-80 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-center gap-4">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block border-2 border-red-600 opacity-90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
                onClick={() => setIsOpen(false)} // Fecha ao clicar
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
