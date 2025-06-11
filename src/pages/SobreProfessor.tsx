// src/pages/SobreProfessor.tsx

export default function SobreProfessor() {
  const timelineEvents = [
    { year: "2024", event: "Início do projeto de pesquisa em IA Generativa na Educação." },
    { year: "2022", event: "Publicação do artigo 'Impacto da Tecnologia no Ensino Superior' na conferência XYZ." },
    { year: "2020", event: "Recebeu o prêmio de Inovação Pedagógica da Universidade." },
    { year: "2018", event: "Concluiu o Pós-Doutorado em Ciência de Dados na Universidade de Exemplo." },
    { year: "2015", event: "Obteve o título de Doutor em Engenharia de Software." },
  ];

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Professor</h1>

      {/* Seção de Biografia */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Minha Trajetória</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Aqui entra um texto introdutório sobre a carreira do professor, sua filosofia de ensino, áreas de interesse e paixão pela pesquisa. Este parágrafo serve para dar um toque pessoal e acolhedor, conectando o leitor à jornada profissional e acadêmica descrita a seguir na linha do tempo.
        </p>
      </div>

      {/* Linha do Tempo */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">Marcos na Carreira</h2>
        <div className="relative border-l-4 border-blue-200">
          <ul className="list-none m-0 p-0">
            {timelineEvents.map((item, index) => (
              <li key={index} className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-8 ring-white">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{item.year}</h3>
                <p className="text-base font-normal text-gray-600">{item.event}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}