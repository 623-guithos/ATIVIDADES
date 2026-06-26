const express = require('express');
const app = express();
const port = 3000;

// 1. Rota inicial com mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo à nossa aplicação!');
});

// 2. Rota /sobre com descrição do projeto
app.get('/sobre', (req, res) => {
  res.send('Este projeto é um sistema de rotas simples desenvolvido para fins educacionais.');
});

// 3. Rota /equipe com mensagem sobre o grupo
app.get('/equipe', (req, res) => {
  res.send('Nossa equipe é formada por desenvolvedores entusiastas de tecnologia.');
});

// 4. Rota /contato com frase orientando o usuário
app.get('/contato', (req, res) => {
  res.send('Para entrar em contato, envie um e-mail para suporte@exemplo.com.');
});

// 5. A aplicação acima já responde em mais de três rotas diferentes (/, /sobre, /equipe, /contato)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
