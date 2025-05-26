import Link from 'next/link';

export default function Navbar() {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900 px-8 py-4 flex justify-center">
      <ul className="flex gap-6 list-none m-0 p-0">
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
    </nav>
  );
}
