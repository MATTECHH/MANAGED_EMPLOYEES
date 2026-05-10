# 👨‍💼 Managed Employees

Sistema fullstack para **gerenciamento de funcionários**, desenvolvido com foco em **Clean Code**, **componentização**, **custom hooks**, **persistência de dados** e **boas práticas de APIs REST**.

O projeto permite cadastrar, listar, buscar, atualizar e remover colaboradores, simulando um sistema real de gestão corporativa.

---

## 🔗 Repositório Oficial

---


👉https://mattechh.github.io/MANAGED_EMPLOYEES/https://mattechh.github.io/MANAGED_EMPLOYEES/
---

# 📸 Preview

Interface moderna desenvolvida com animações, navegação dinâmica e experiência fluida para gerenciamento de usuários.

### Funcionalidades da interface:

✅ Cadastro de funcionários  
✅ Visualização em cards  
✅ Navegação animada  
✅ Status em tempo real do formulário  
✅ Hooks customizados  
✅ Integração completa com API REST  

---

# ✨ Funcionalidades

## Backend

✅ Criar usuários  
✅ Listar todos os usuários  
✅ Buscar usuário por ID  
✅ Atualizar usuários  
✅ Remover usuários  
✅ Validação de dados via Regex  
✅ Criptografia de CPF com bcrypt  
✅ Persistência com Prisma ORM  
✅ Tratamento de erros HTTP  

---

## Frontend

✅ Formulário reativo  
✅ Custom Hook (`useForm`)  
✅ Custom Hook (`useData`)  
✅ Navegação SPA  
✅ Animações com Framer Motion  
✅ Componentização  
✅ Consumo de API com Fetch API  
✅ Interface responsiva  

---

# 🛠 Stack utilizada

## Frontend

- React
- React Router DOM
- Framer Motion
- Tailwind CSS
- JavaScript (ES6+)

---

## Backend

- Node.js
- Express
- Prisma ORM
- Bcrypt
- CORS

---

## Banco de Dados

- Prisma ORM

> compatível com:
- PostgreSQL
- MySQL
- SQLite

---

# 🧠 Conceitos aplicados

Este projeto aplica conceitos reais de desenvolvimento:

- CRUD completo
- REST API
- Componentização
- Custom Hooks
- useState
- useReducer
- useEffect
- useRef
- Hash Routing
- Regex Validation
- Data Encryption
- Error Handling

---

# 📂 Estrutura do projeto

```bash
MANAGED_EMPLOYEES/
│
├── backend/
│   ├── server.js
│   ├── prisma/
│   └── generated/
│
├── frontend/
│   ├── src/
│   │
│   ├── Components/
│   │   └── NavBar.jsx
│   │
│   ├── Hooks/
│   │   ├── useData.jsx
│   │   └── useForm.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   └── About.jsx
│   │
│   ├── Routes/
│   │   └── AppRouter.jsx
│   │
│   └── main.jsx
│
└── README.md
```

---

# 🔐 Segurança

Os dados sensíveis são tratados com criptografia.

Exemplo:

- CPF criptografado com `bcrypt`
- Validação de:
  - Email
  - CPF
  - Telefone
  - Chave Pix

---

# 🚀 Rotas da API

## Buscar todos os usuários

```http
GET /users
```

---

## Buscar usuário por ID

```http
GET /users/:id
```

---

## Criar usuário

```http
POST /users
```

### Body:

```json
{
  "name": "Mateus",
  "email": "mateus@email.com",
  "cpf": "000.000.000-00",
  "chave": "(11)99999-9999",
  "numero": "(11)99999-9999"
}
```

---

## Atualizar usuário

```http
PUT /users/:id
```

---

## Remover usuário

```http
DELETE /users/:id
```

---

# ⚙️ Como executar localmente

## 1 Clone o projeto

```bash
git clone https://github.com/MATTECHH/MANAGED_EMPLOYEES.git
```

---

## 2 Entre no projeto

```bash
cd MANAGED_EMPLOYEES
```

---

## 3 Instale dependências

### Backend

```bash
npm install
```

### Frontend

```bash
npm install
```

---

## 4 Configure Prisma

```bash
npx prisma generate
```

```bash
npx prisma migrate dev
```

---

## 5 Inicie os servidores

### Backend

```bash
node server.js
```

---

### Frontend

```bash
npm run dev
```

---

# 💡 Diferenciais do projeto

🔥 Hooks personalizados  
🔥 Animações suaves  
🔥 Organização modular  
🔥 Arquitetura escalável  
🔥 Código reutilizável  
🔥 Backend seguro  
🔥 Estrutura pronta para produção  

---

# 👨‍💻 Autor

## Mateus Monteiro Ramos

Desenvolvedor Fullstack.

🔗 GitHub: https://github.com/MATTECHH

---

# 📄 Licença

Este projeto está sob licença MIT.

---

⭐ Se este projeto te ajudou ou chamou atenção, deixe uma estrela no repositório.
