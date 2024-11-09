# Projeto de Login e Registro

Este é um projeto back-end desenvolvido com Node.js. Sem utilização de banco de dados, foi criado com o objetivo de praticar.

## Funcionalidades

- Cadastro de usuário
- Login de usuário
- Apagar cadastro
- Trocar senha do usuário
- Consultar todos os usuários
- Consultar usuário específico por ID

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
    "name": "string",
    "lastName": "string",
    "age": number,
    "email": "string",
    "password": "string"
}
    ```

- **`/users/change-password/:id` (PUT)**  
  Altera a senha de um usuário específico.
  - **Parâmetro**: `id` - ID do usuário que deseja alterar a senha.
  - **Body**:
    ```json
    {
    "password": "caio123"
    }
    ```

- **`/login` (POST)**  
  Realiza o login de um usuário.
  - **Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

## Tecnologias Utilizadas

- Node.js
- Express
- Yup
- bcrypt
- uuid
