import { useAuth } from '../context/AuthContext';

export default function BlogPesquisa() {
  const { user } = useAuth();

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Blog de Pesquisa</h1>
      <p>
        Aqui serão destacados projetos em andamento, publicações recentes, apresentações e resultados preliminares.
      </p>
      {!user && (
        <p className="mt-6 text-sm text-gray-600">
          Faça login para reagir ou comentar nas postagens.
        </p>
      )}
    </main>
  );
}
