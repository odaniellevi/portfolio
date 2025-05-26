import Link from 'next/link';

export default function Navbar() {
  const buttonStyle = {
    backgroundColor: '#dc2626', // Vermelho
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    display: 'inline-block'
  };

  const hoverStyle = {
    backgroundColor: '#b91c1c', // Mais escuro no hover
  };

  return (
    <nav style={{
      padding: '1rem 2rem',
      background: '#18181b',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ul style={{
        display: 'flex',
        gap: '1.5rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'About Me', href: '/about-me' },
          { label: 'Skills', href: '/skills' },
          { label: 'Projects', href: '/projects' },
          { label: 'Contact', href: '/contact' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={buttonStyle}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
