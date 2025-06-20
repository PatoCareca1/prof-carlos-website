import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogPesquisa from './pages/BlogPesquisa';
import PostDetail from './pages/PostDetail';
import MateriaisDidaticos from './pages/MateriaisDidaticos';
import ProjetosPesquisa from './pages/ProjetosPesquisa';
import PortfolioAlunos from './pages/PortfolioAlunos';
import MapaEstudos from './pages/MapaEstudos';
import SobreProfessor from './pages/SobreProfessor';
import FAQ from './pages/FAQ';
import ExtensaoEnsinoIA from './pages/ExtensaoEnsinoIA';

export default function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

function PageLayout() {
  const location = useLocation();
  const hideLayout = ['/', '/login', '/register'].includes(location.pathname) ||
    location.pathname.startsWith('/blog/');

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-200 to-teal-50">
      {!hideLayout && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<BlogPesquisa />} />
          <Route path="/blog/:postId" element={<PostDetail />} />
          <Route path="/materiais" element={<MateriaisDidaticos />} />
          <Route path="/projetos" element={<ProjetosPesquisa />} />
          <Route path="/portfolio" element={<PortfolioAlunos />} />
          <Route path="/mapa-estudos" element={<MapaEstudos />} />
          <Route path="/sobre" element={<SobreProfessor />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/extensao-ensino-ia" element={<ExtensaoEnsinoIA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}