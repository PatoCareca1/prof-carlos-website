import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main className="container mx-auto px-4 py-16 text-center text-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao site do Professor Carlos André</h1>
      <p className="mb-6">Conheça nossos projetos, materiais didáticos e mais.</p>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link to="/register" className="px-4 py-2 bg-green-600 text-white rounded">Registrar</Link>
      </div>
    </main>
  );
}
