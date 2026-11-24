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

app.post("/imc", (req, res) => {
    const peso = Number(req.query.peso);
    const altura = Number(req.query.altura);

    if (isNaN(peso) || isNaN(altura))
    {
        return res.status(400).send("Erro: Insira valores válidos para peso e altura.");
    }

    const imc = peso / ((altura)*(altura));

    if (imc < 18.5)
    {
        res.send(`Seu imc é ${imc}, você está abaixo do peso`);
    }

    if (imc >= 18.5 && imc <= 24.99)
    {
        res.send(`Seu imc é ${imc}, seu peso é normal`);
    }

    if (imc >= 25 && imc <= 29.9)
    {
        res.send(`Seu imc é ${imc}, você está com sobrepeso`);
    }

    if (imc >= 30)
    {
        res.send(`Seu imc é ${imc}, você tem obesidade`);
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});