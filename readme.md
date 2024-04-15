# [M1S10] Mini-Projeto nº 2 - Tarefas

## Introdução
Optei pelo mini projeto de gestão de tarefas que oferece funcionalidades básicas de um CRUD (Create, Read, Update, Delete) para gerenciar tarefas. O projeto inclui rotas para criar, listar, atualizar e excluir tarefas, bem como a implementação de middlewares para validar dados e opcionalmente autenticar usuários.

## Funcionalidades - CRUD
### Criar Tarefa
- Rota POST para adicionar uma nova tarefa.
- Os dados da tarefa são enviados em formato JSON.
- A validação dos dados é realizada no servidor antes de adicionar a tarefa à lista temporária.

### Listar Tarefas
- Rota GET para obter todas as tarefas.
- Retorna a lista de tarefas em formato JSON.

### Atualizar Tarefa
- Rota PUT para atualizar uma tarefa existente.
- Recebe um JSON com os dados atualizados da tarefa, incluindo o ID.
- Localiza a tarefa na lista pelo ID e atualiza seus dados.

### Excluir Tarefa
- Rota DELETE para excluir uma tarefa existente.
- Recebe o ID da tarefa a ser excluída.
- Localiza a tarefa na lista pelo ID e a remove.

## Middlewares
**Validação de Dados**
- Middleware para validar os dados recebidos nas requisições de criação e atualização de tarefas.
- Verifica a presença dos campos obrigatórios e se estão no formato correto.

## Testando com o Postman
- Uma coleção no Postman está disponível para realizar as operações CRUD.
- As rotas enviam requisições utilizando os métodos HTTP corretos (POST, GET, PUT, DELETE).

## Recursos Adicionais (Opcional)
- Lógica de paginação para lidar com grandes quantidades de tarefas.
- Middleware de autenticação para proteger as rotas de CRUD e garantir acesso apenas a usuários autorizados.

## Executando o Projeto
Para executar o projeto, siga estas etapas:
1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor usando `npm start`.
4. Teste as rotas usando a coleção do Postman ou outras ferramentas de requisição HTTP.

## Vamos preparar o ambiente!
Para executar este mini-projeto, você deverá ter instalado o Node.js e as dependências do NPM. Além pode-se fazer requisições do métodos HTTP com a plataforma Postman.

Seguiremos a ordem de instalações no terminal:

O **NPM (Node Package Manager)** é uma ferramenta usada no desenvolvimento de software com Node.js.
```git 
npm init
```
Se desejar, também pode inserir no terminal para validar as informações automaticamente. 
```git 
npm init -y
```
O **Express.js** é um Framework rápido e um dos mais utilizados em conjunto com o Node.js, facilitando no desenvolvimento de aplicações back-end e até, em conjunto com sistemas de templates, aplicações full-stack. 
```git 
npm install express --save
```
O **nodemon** é uma biblioteca que ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor. 
```git 
npm install nodemon --save
```
Para rodar o servidor local:
```git 
npm start
```

## Json ou Schema
O Json ou a Schema é a forma de apresentar os dados de tal CRUD. Exemplo da tarefa criada de n 1 para testar no Postman:

```json
{   "id":1,
        "titulo": "Estudar Node.js",
        "descricao": "Aprender sobre o framework Express.js",
        "data_conclusao": "2024-04-15"
    }
    
``` 
## Postman
O Postman é uma ferramenta que dá suporte à documentação das requisições feitas pela API. Executa testes de APIs e requisições em geral. Tais testes estão organizados na ferramenta Postman em uma Collection.Utilizando o Postman, clique em import folder collections para testar os endpoints

Endpoit
Get | http://localhost:3333/tarefas/
Post | http://localhost:3333/tarefas 
Put | http://localhost:3333/tarefas/1
Delete | 
