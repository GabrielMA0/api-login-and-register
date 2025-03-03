# Projeto de Login e Registro

Este é um projeto back-end desenvolvido com Node.js. Sem utilização de banco de dados, foi criado com o objetivo de praticar.

## Funcionalidades

- Cadastro de usuário
- Login de usuário
- Apagar cadastro
- Trocar senha do usuário
- Consultar todos os usuários
- Consultar usuário específico por ID

## URL: https://api-login-and-register.onrender.com

## Rotas

- **`/users` (GET)**  
  Retorna uma lista de todos os usuários.

- **`/users/:id` (GET)**  
  Retorna os dados de um usuário específico.
  - **Parâmetro**: `id` - ID do usuário (UUID gerado para cada usuário).

- **`/users/delete/:id` (DELETE)**  
  Exclui o cadastro de um usuário específico.
  - **Parâmetro**: `id` - ID do usuário a ser excluído.

- **`/users/register` (POST)**  
  Cadastra um novo usuário.
  - **Body**:
    ```json
    {
    "name": "Isaac",
    "lastName": "Tiago Jorge Bernardes",
    "age": 23,
    "email": "isaac_bernardes@proshock.com.br",
    "password": "Teste123"
    }
    ```

- **`/users/change-password/:id` (PUT)**  
  Altera a senha de um usuário específico.
  - **Parâmetro**: `id` - ID do usuário que deseja alterar a senha.
  - **Body**:
    ```json
    {
    "password": "12345"
    }
    ```

- **`/login` (POST)**  
  Realiza o login de um usuário.
  - **Body**:
    ```json
    {
      "email": "isaac_bernardes@proshock.com.br",
      "password": "12345"
    }
    ```

## Tecnologias Utilizadas

- Node.js
- Express
- Zod
- bcryptjs
- uuid
