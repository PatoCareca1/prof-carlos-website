import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Biografia", to: "/sobre" },
  { label: "Blog de Pesquisa", to: "/blog" },
  { label: "Materiais Didáticos", to: "/materiais" },
  { label: "Projetos de Pesquisa", to: "/projetos" },
  { label: "Portfólio de Alunos", to: "/portfolio" },
  { label: "Mapa de Estudos", to: "/mapa-estudos" },
  { label: "Extensão/Ensino/IA", to: "/extensao-ensino-ia" },
  { label: "FAQ", to: "/faq" }
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <span className="font-bold text-xl tracking-wide">Prof. Carlos André</span>
        <ul className="flex flex-wrap gap-3">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`px-3 py-1 rounded hover:bg-blue-700 transition ${
                  location.pathname === item.to ? "bg-blue-700 font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
