import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="container mx-auto px-4 py-16 text-center text-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao site do Prof. Carlos</h1>
      <p className="mb-8">Este é o blog do professor para compartilhar artigos e projetos.</p>
      <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Enter
      </Link>
    </main>
  );
}
