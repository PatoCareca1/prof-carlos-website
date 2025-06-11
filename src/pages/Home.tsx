export default function Home() {
  const sections = [
  { name: "Biografia e Linha do Tempo", path: "/sobre" },
    { name: "Blog de Pesquisa", path: "/blog" },
    { name: "Repositório de Materiais Didáticos", path: "/materiais" },
    { name: "Projetos de Pesquisa", path: "/projetos" },
    { name: "Portfólio de Trabalhos de Alunos", path: "/portfolio" },
    { name: "Mapa de Estudos Interativo", path: "/mapa-estudos" },
    { name: "Extensão, Ensino e IA", path: "/extensao-ensino-ia" },
    { name: "Perguntas & Respostas (FAQ)", path: "/faq" },
  ];

return (
  <main className="container mx-auto px-4 py-12 bg-gray-50">
  {/* Seção de Boas-Vindas */}
  <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
    <img
      src="../assets/1.png" // Imagem de placeholder
      alt="Foto do Professor Carlos André"
      className="w-32 h-32 rounded-full object-cover shadow-lg"
    />
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Prof. Dr. Carlos André
      </h1>
      <p className="text-xl text-gray-600">
        Bem-vindo ao meu espaço digital acadêmico.
      </p>
    </div>
  </div>

  {/* Seção de Navegação Rápida */}
  <div>
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
      Explore as Seções do Site
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((section) => (
        <a
          key={section.path}
          href={section.path}
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 no-underline"
        >
          <h3 className="text-lg font-bold text-blue-800">{section.name}</h3>
          <p className="text-gray-600 mt-2">
            Clique para saber mais sobre {section.name.toLowerCase()}.
          </p>
        </a>
      ))}
    </div>
  </div>
  </main>
  );
}