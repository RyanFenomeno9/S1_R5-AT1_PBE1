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

app.get("/ano/:ano", (req, res) => {

    const ano = Number(req.params.ano);

    let anobi = false;

    if (isNaN(ano))
    {
        return res.status(400).send("Erro: Digite um ano válido");
    }

    if (ano % 100 == 0)
    {
        if (ano % 400 == 0)
        {
            anobi = true;
        }
    }

    else
    {
        if (ano % 4 == 0)
        {
            anobi = true;
        }
    }

    if (anobi == true)
    {
        res.send(`O ano ${ano} é bissexto`);
    }

    else if (anobi == false)
    {
        res.send(`O ano ${ano} não é bissexto`);
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});