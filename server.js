const express = require("express");
const app = express();
const PORT = 3000;
const basicAuth = require("express-basic-auth");

let tarefas = [];

app.use(express.json());

// Middleware para log de horário
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] Nova solicitação recebida para: ${
      req.method
    } ${req.originalUrl}`
  );
  next();
});

// Middleware de autenticação básica
app.use(
  basicAuth({
    users: { anaisateodoro: "123456" }, // Substitua 'anaisateodoro' e '123456' pelos seus próprios valores a realizar o teste
    unauthorizedResponse: (req) => {
      return req.auth ? "Credenciais inválidas!" : "Credenciais necessárias!";
    },
  })
);

// Rota POST para criar uma nova tarefa
app.post("/tarefas", (req, res) => {
  const { titulo, descricao, data_conclusao } = req.body;

  if (!titulo || !descricao || !data_conclusao) {
    return res
      .status(400)
      .json({
        error:
          "Todos os campos (titulo, descricao, data de conclusao) são obrigatórios.",
      });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    descricao,
    data_conclusao,
  };
  tarefas.push(novaTarefa);

  return res.status(201).json(novaTarefa);
});

// Rota GET para listar todas as tarefas com paginação
app.get("/tarefas", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Página atual, padrão: 1
  const pageSize = parseInt(req.query.pageSize) || 10; // Tamanho da página, padrão: 10

  // Calcular o índice de início e fim das tarefas com base na paginação
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  // Obter o subconjunto de tarefas com base na paginação
  const tarefasSubset = tarefas.slice(startIndex, endIndex);

  // Retornar as tarefas junto com informações de paginação
  res.status(200).json({
    tarefas: tarefasSubset,
    currentPage: page,
    totalPages: Math.ceil(tarefas.length / pageSize),
    totalTasks: tarefas.length,
  });
});

// Rota PUT para atualizar uma tarefa existente
app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, data_conclusao } = req.body;

  const tarefa = tarefas.find((tarefa) => tarefa.id === Number(id));

  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada!" });
  }

  if (titulo) tarefa.titulo = titulo;
  if (descricao) tarefa.descricao = descricao;
  if (data_conclusao) tarefa.data_conclusao = data_conclusao;

  return res.status(200).json(tarefa);
});

// Rota DELETE para excluir uma tarefa
app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id === Number(id));

  if (tarefaIndex === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada!" });
  }

  tarefas.splice(tarefaIndex, 1);

  return res.status(200).json({ message: "Tarefa excluída com sucesso." });
});

app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
