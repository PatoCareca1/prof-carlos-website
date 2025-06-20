/* src/components/Navbar.tsx */
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4 py-4 flex items-center justify-between">
        <Link to="/blog" className="text-xl font-semibold text-blue-800 hover:underline">
          Home
        </Link>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setOpen(o => !o)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {user.name}
            </button>
            {open && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow p-2">
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
