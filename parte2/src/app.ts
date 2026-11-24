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

app.get('/calculadora', (req, res) => {
    const numUm = Number(req.query.numUm);
    const numDois = Number(req.query.numDois);
    const operacao = req.query.operacao;

    if (!operacao)
    {
        return res.status(400).send('Erro: Escreva uma operação válida.');
    }


    else if (isNaN(numUm) || isNaN(numDois))
    {
        return res.status(400).send('Erro: Os parâmetros devem ser números válidos.');
    }

    

    if(operacao == 'soma')
    {
        const result = numUm + numDois;
        res.send(`O resultado da soma é: ${result}`);
    }
    
    else if(operacao == 'subtracao')
    {
        const result = numUm - numDois;
        res.send(`O resultado da subtração é: ${result}`);
    }

    else if(operacao == 'multiplicacao')
    {
        const result = numUm * numDois;
        res.send(`O resultado do produto é: ${result}`);
    }

    else if(operacao == 'divisao')
    {
        const result = numUm / numDois;
        res.send(`O resultado da divisão é: ${result}`);
    }

    else
    {
        return res.status(400).send('Erro: Escreva uma operação válida. Ex: "soma", "subtracao", "multiplicacao", "divisao".');
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});