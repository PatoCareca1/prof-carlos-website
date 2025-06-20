import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="container mx-auto px-4 py-16 text-center text-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Prof. Carlos' Site</h1>
      <p className="mb-8">A small corner of the web to compartilhar artigos e projetos do professor.</p>
      <Link to="/login" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Enter
      </Link>
    </main>
  );
}
