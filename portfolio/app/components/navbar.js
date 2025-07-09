"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const MenuIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    if (isOpen) {
      if (menuEl) {
        setHeight(0);
        requestAnimationFrame(() => {
          setHeight(menuEl.scrollHeight);
        });
      }
    } else {
      setHeight(0);
      timeoutRef.current = setTimeout(() => {}, 300);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isOpen]);

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

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-white focus:outline-none w-8 h-8"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon className="w-8 h-8" />
            ) : (
              <MenuIcon className="w-8 h-8" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 list-none">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="border-2 border-red-600 opacity-80 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul
        ref={menuRef}
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
          transition: "height 300ms ease, opacity 300ms ease",
          overflow: "hidden",
        }}
        className="md:hidden mt-4 flex flex-col items-center gap-4"
      >
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="block border-2 border-red-600 opacity-90 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
