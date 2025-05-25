import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BlogPesquisa from './pages/BlogPesquisa';
import MateriaisDidaticos from './pages/MateriaisDidaticos';
import ProjetosPesquisa from './pages/ProjetosPesquisa';
import PortfolioAlunos from './pages/PortfolioAlunos';
import MapaEstudos from './pages/MapaEstudos';
import SobreProfessor from './pages/SobreProfessor';
import FAQ from './pages/FAQ';
import ExtensaoEnsinoIA from './pages/ExtensaoEnsinoIA';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPesquisa />} />
        <Route path="/materiais" element={<MateriaisDidaticos />} />
        <Route path="/projetos" element={<ProjetosPesquisa />} />
        <Route path="/portfolio" element={<PortfolioAlunos />} />
        <Route path="/mapa-estudos" element={<MapaEstudos />} />
        <Route path="/sobre" element={<SobreProfessor />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/extensao-ensino-ia" element={<ExtensaoEnsinoIA />} />
      </Routes>
    </Router>
  );
}
export default App;
