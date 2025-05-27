import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Daniel Levi | Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
