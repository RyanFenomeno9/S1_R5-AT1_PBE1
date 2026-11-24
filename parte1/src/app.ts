// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// 1. Adição
app.get('/soma/:numUm/:numDois', (req, res) => {
  const numUm = Number(req.params.numUm);
  const numDois = Number(req.params.numDois);

  if (isNaN(numUm) || isNaN(numDois)) {
    return res.status(400).send('Erro: Os parâmetros devem ser números válidos.');
  }

  const resultado = numUm + numDois;
  res.send(`Resultado da soma: ${resultado}`);
});

// 2. Subtração
app.get('/subtracao/:numUm/:numDois', (req, res) => {
    const numUm = Number(req.params.numUm);
    const numDois = Number(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois))
    {
        return res.status(400).send('Erro: Os parâmetros devem ser números válidos.');
    }

    const result = numUm - numDois;
    res.send(`O resultado da subtração é ${result}`);
});

// 3. Multiplicação
app.get('/multiplicacao/:numUm/:numDois', (req, res) => {
    const numUm = Number(req.params.numUm);
    const numDois = Number(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois))
    {
        return res.status(400).send('Erro: Os parâmetros devem ser números válidos.');
    }

    const result = numUm * numDois;
    res.send(`O resultado do produto é ${result}`);
});

// 4. Divisão
app.get('/divisao/:numUm/:numDois', (req, res) => {
    const numUm = Number(req.params.numUm);
    const numDois = Number(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois))
    {
        return res.status(400).send('Erro: Os parâmetros devem ser números válidos.');
    }

    const result = numUm / numDois;
    res.send(`O resultado da divisão é ${result}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});