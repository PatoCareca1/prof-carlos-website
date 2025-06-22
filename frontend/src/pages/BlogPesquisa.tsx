// src/pages/BlogPesquisa.tsx
import { useAuth } from '../context/AuthContext'; // Importar o hook

// Componente para a seção de comentários que será condicional
function CommentSection() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="p-4 bg-gray-100 rounded-md text-center">
        <p className="text-gray-600">
          Você precisa fazer <span className="font-bold">login</span> para comentar ou reagir.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Deixe um Comentário</h3>
      <textarea
        className="w-full p-2 border rounded-md"
        rows={3}
        placeholder="Escreva sua dúvida ou comentário aqui..."
      ></textarea>
      <button className="mt-2 bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900">
        Enviar
      </button>
    </div>
  );
}


export default function BlogPesquisa() {
  // Dados de exemplo, como já estavam
  const blogPosts = [
    { title: "Resultados Preliminares do Uso de LLMs em Sala de Aula", date: "10 de Junho, 2025", excerpt: "Uma análise inicial sobre como modelos de linguagem ampla estão transformando a interação e o aprendizado dos alunos." },
    { title: "Apresentação na Conferência Anual de Tecnologia Educacional", date: "22 de Maio, 2025", excerpt: "Compartilhamos nossa experiência na implementação de um sistema de feedback automatizado para trabalhos acadêmicos." },
    { title: "Novo Projeto: Mapeando a Evasão com Machine Learning", date: "15 de Abril, 2025", excerpt: "Iniciamos um novo projeto de pesquisa para identificar padrões e predizer a evasão de alunos usando técnicas de aprendizado de máquina." },
  ];

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog de Pesquisa</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-3 text-blue-900">{post.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              {/* Adicionar a nova seção de comentários aqui */}
              <CommentSection />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}