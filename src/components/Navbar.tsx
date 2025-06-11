// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { useState, useLayoutEffect, useRef, useEffect } from "react";

// O array de itens permanece o mesmo
const navItems = [
    { label: "Home", to: "/" },
    { label: "Biografia", to: "/sobre" },
    { label: "Blog", to: "/blog" },
    { label: "Materiais", to: "/materiais" },
    { label: "Projetos", to: "/projetos" },
    { label: "Portfólio", to: "/portfolio" },
    { label: "Mapa de Estudos", to: "/mapa-estudos" },
    { label: "Extensão/IA", to: "/extensao-ensino-ia" },
    { label: "FAQ", to: "/faq" },
  ];

export default function Navbar() {
  const location = useLocation();
  const tabsRef = useRef<HTMLUListElement>(null);

  // 1. Estado para guardar a posição e largura do slider
  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });

  // 2. useLayoutEffect para medir o item ativo e atualizar o slider
  useLayoutEffect(() => {
    const activeTab = tabsRef.current?.querySelector<HTMLLIElement>(`li[data-path='${location.pathname}']`);

    if (activeTab) {
      setSliderStyle({
        width: activeTab.clientWidth,
        left: activeTab.offsetLeft,
        opacity: 1,
      });
    }
  }, [location.pathname]); // Roda sempre que a rota mudar

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-xl tracking-wide">
            Prof. Carlos André
          </span>
          
          {/* 3. A lista de navegação agora é o container relativo para o slider */}
          <div className="relative">
            <ul ref={tabsRef} className="flex items-center space-x-4">
              {navItems.map((item) => (
                <li
                  key={item.to}
                  data-path={item.to} // Atributo para encontrar o li ativo
                  className="relative"
                >
                  <Link
                    to={item.to}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
                    ${
                      location.pathname === item.to ? "text-white" : "text-blue-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* 4. O elemento slider que será animado */}
            <div
              className="absolute bottom-[-8px] h-1 bg-cyan-300 rounded-full transition-all duration-500 ease-in-out"
              style={sliderStyle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}