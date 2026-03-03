# 🛡️ Nexus Arena Auth

Sistema de autenticação completo com **registro, login e proteção de rotas utilizando JWT**.  
Projeto desenvolvido para estudo e prática de autenticação stateless no back-end.

---

## 📌 Sobre o Projeto

O **Nexus Arena Auth** é um sistema de autenticação construído com Node.js e Express que permite:

- ✅ Cadastro de usuários
- ✅ Login com validação de credenciais
- ✅ Geração de token JWT
- ✅ Proteção de rotas privadas
- ✅ Autenticação stateless

Esse projeto foi criado com foco em boas práticas de organização e separação de responsabilidades no back-end.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- JSON Web Token (JWT)
- Dotenv
- Banco de dados (conforme configurado no projeto)

---

## 📂 Estrutura do Projeto
```
nexus-arena-auth/
│
├── config/ # Configurações da aplicação
├── controllers/ # Lógica das rotas
├── middlewares/ # Middlewares (ex: autenticação)
├── models/ # Modelos do banco de dados
├── routes/ # Definição das rotas
├── db/ # Conexão com o banco
├── views/ # Views (caso utilize template engine)
├── index.js # Arquivo principal
├── package.json
└── README.md
```

---
## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Astaphaanos/nexus-arena-auth.git
cd nexus-arena-auth
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
JWT_SECRET=seu_segredo
```

⚠️ Nunca suba o arquivo `.env` para o GitHub.

---

## ▶️ Executando o Projeto

Modo normal:

```bash
npm start
```

Modo desenvolvimento (caso use nodemon):

```bash
npm run dev
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 📡 Endpoints Principais

### 📝 Registro

```
POST /auth/register
```

Body:

```json
{
  "username": "usuario",
  "password": "senha123"
}
```

---

### 🔑 Login

```
POST /auth/login
```

Body:

```json
{
  "username": "usuario",
  "password": "senha123"
}
```

Retorno:

```json
{
  "token": "jwt_token_aqui"
}
```

---

### 🔒 Rota Protegida (Exemplo)

```
GET /auth/me
```

Header obrigatório:

```
Authorization: Bearer seu_token_aqui
```

---

## 🧠 Conceitos Aplicados

- Autenticação Stateless
- Geração e verificação de JWT
- Middleware de autorização
- Separação de responsabilidades (MVC)
- Uso de variáveis de ambiente

---

## 🧪 Testando a API

Você pode testar utilizando:

- Postman
  
---

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido como prática de:

- Estruturação de APIs
- Segurança básica com JWT
- Controle de acesso
- Organização profissional de back-end

---

## 👩‍💻 Desenvolvido por

**Astaphanos**

---

## 📄 Licença

Este projeto é apenas para fins educacionais.
