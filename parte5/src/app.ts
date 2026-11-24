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

app.get("/saudacao/:nome", (req, res) => {

    const nome = req.params.nome;
    const hora = Number(req.query.hora);

    if (!nome)
    {
        return res.status(400).send("Erro: DIgite um nome válido.");
    }

    if (hora >= 0 && hora < 5)
    {
        res.send(`Vai dormir, ${nome}`);
    }

    else if (hora >= 5 && hora < 13)
    {
        res.send(`Bom dia, ${nome}!`);
    }

    else if (hora >= 13 && hora < 18)
    {
        res.send(`Boa tarde, ${nome}`);
    }

    else if (hora >= 18 && hora <= 23)
    {
        res.send(`Boa noite, ${nome}`);
    }

    else 
    {
        return res.status(400).send("Erro: Digite um horário válido (Ex: 0-23)");
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});