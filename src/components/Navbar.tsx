import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Biografia', to: '/sobre' },
  { label: 'Blog de Pesquisa', to: '/blog' },
  { label: 'Materiais Didáticos', to: '/materiais' },
  { label: 'Projetos de Pesquisa', to: '/projetos' },
  { label: 'Portfólio de Alunos', to: '/portfolio' },
  { label: 'Mapa de Estudos', to: '/mapa-estudos' },
  { label: 'Extensão/Ensino/IA', to: '/extensao-ensino-ia' },
  { label: 'FAQ', to: '/faq' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        {/* Logo e título */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo Professor Carlos André"
            className="h-10 w-10 mr-2 rounded-full"
          />
          <span className="text-2xl font-semibold text-gray-800">
            Prof. Carlos André
          </span>
        </Link>

        {/* Navegação principal */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            {navItems.map(item => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`text-gray-700 hover:text-blue-800 transition ${
                    location.pathname === item.to ? 'font-semibold text-blue-800' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile menu (toggle) - placeholder para futura implementação */}
        </nav>
      </div>
    </header>
  );
}