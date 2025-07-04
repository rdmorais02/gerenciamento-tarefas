# 📝 Projeto: Lista de Tarefas (To-Do List)

Este é um sistema completo de gerenciamento de tarefas (To-Do List), com **backend em Spring Boot** e **frontend em React**. Ele permite que o usuário cadastre, visualize, edite e exclua tarefas de forma prática e rápida.

---

## 🔧 Tecnologias Utilizadas

### Backend:
- Java 17  
- Spring Boot  
- Spring Data JPA  
- MySQL  
- Maven  
- Postman (para testes)

### Frontend:
- React  
- Axios  
- Bootstrap  
- HTML5 & CSS3  
- JavaScript (ES6+)

---

## ⚙️ Funcionalidades

- ✅ Criar uma nova tarefa  
- 📋 Listar todas as tarefas  
- ✏️ Editar tarefa existente  
- 🗑️ Excluir tarefa  
- 💾 Persistência no banco de dados MySQL  

---

## 🔙 Backend - Spring Boot

### Endpoints principais

| Método | Endpoint          | Descrição                     |
|--------|-------------------|-------------------------------|
| GET    | `/tasks`          | Lista todas as tarefas        |
| GET    | `/tasks/{id}`     | Retorna tarefa por ID         |
| POST   | `/tasks`          | Cria nova tarefa              |
| PUT    | `/tasks/{id}`     | Atualiza tarefa existente     |
| DELETE | `/tasks/{id}`     | Deleta tarefa                 |

### Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

🛠️ Configurando o Banco de Dados (MySQL)
Antes de rodar a aplicação, você precisa configurar o banco de dados no backend. Siga os passos abaixo:

1. Crie o banco de dados no MySQL
Abra o MySQL e crie um banco com o nome desejado. Exemplo:

sql
Copiar
Editar
CREATE DATABASE todolist;
📌 Dica: Você pode usar o MySQL Workbench, DBeaver ou linha de comando.
