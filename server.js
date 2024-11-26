const express = require('express'); //Link doc: https://expressjs.com/en/guide/routing.html
const path = require('path'); //Link doc: https://nodejs.org/api/path.html

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'arquivos')));

// Rota padrão (Página Inicial)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'arquivos', 'index.html'));
});

// Nova rota para a página Sobre
app.get('/espaco', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos', 'espaco.html'));
  });

app.get('/cardapio', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos', 'cardapio.html'));
  });

app.get('/reserva', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos', 'reserva.html'));
  });  

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos', 'contato.html'));
  });

  app.get('/entradas', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos/menu', 'entradas.html'));
  });

  app.get('/prato-principal', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos/menu', 'prato-principal.html'));
  });

  app.get('/sobremesas', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos/menu', 'sobremesas.html'));
  });

  app.get('/bebidas', (req, res) => {
    res.sendFile(path.join(__dirname, 'arquivos/menu', 'bebidas.html'));
  });

  // Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
