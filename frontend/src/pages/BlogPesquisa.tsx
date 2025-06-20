import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { posts } from '../data/posts';

export default function BlogPesquisa() {
  const { user } = useAuth();

  return (
    <main className="container mx-auto px-4 py-8 text-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Blog de Pesquisa</h1>

      <ul className="space-y-8">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-blue-800 hover:underline">
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>

      {!user && (
        <p className="mt-10 text-sm text-gray-600">
          Faça login para reagir ou comentar nas postagens.
        </p>
      )}
    </main>
  );
}
