const express = require('express');
const app = express();
const port = 3000;

// 1. Rota GET para listar usuários
app.get('/usuarios', (req, res) => {
  const usuarios = [{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Beto' }];
  res.json(usuarios);
});

// 2. Rota GET para listar tarefas
app.get('/tarefas', (req, res) => {
  const tarefas = [{ id: 1, titulo: 'Estudar Node' }, { id: 2, titulo: 'Fazer exercícios' }];
  res.json(tarefas);
});

// 3. Rota GET para mostrar reservas
app.get('/reservas', (req, res) => {
  const reservas = [{ id: 1, local: 'Sala 01' }, { id: 2, local: 'Auditório' }];
  res.json(reservas);
});

// 4. Rota GET para mostrar uma mensagem de sistema ativo
app.get('/status', (req, res) => {
  res.send('Sistema ativo e operando!');
});

// 5. Rota GET que devolva um array com três turmas
app.get('/turmas', (req, res) => {
  const turmas = ['Turma A', 'Turma B', 'Turma C'];
  res.json(turmas);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
