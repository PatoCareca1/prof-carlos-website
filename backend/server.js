require('dotenv').config(); // Carrega as variáveis do arquivo .env

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares essenciais
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Habilita o servidor a receber e interpretar JSON no corpo das requisições

// Roteamento
app.use('/api/auth', authRoutes); // Todas as rotas em 'auth.js' serão prefixadas com '/api/auth'

// Uma rota de teste para verificar se o servidor está no ar
app.get('/', (req, res) => {
  res.send('API do Professor Carlos está online e funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor back-end rodando na porta ${PORT}`);
  console.log(`Acesse http://localhost:${PORT} para testar a conexão.`);
});