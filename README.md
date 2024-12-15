# Backend - CRUD de Produtos

Este é o backend de um sistema de estoque de produtos. Ele fornece uma **API RESTful** para gerenciar produtos, permitindo operações de **CRUD** (Create, Read, Update, Delete).

---

## **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework web para criar as rotas e lógica do servidor.
- **MongoDB**: Banco de dados NoSQL para persistência dos dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **Cloudinary**: Serviço externo para armazenar imagens (usado no frontend para upload).

---

## **Funcionalidades**

- **CRUD de Produtos**:
  - **Criar** um novo produto com os campos:
    - `name` (Nome do produto - obrigatório e único).
    - `description` (Descrição do produto).
    - `quantity` (Quantidade do produto).
    - `photo` (URL da imagem do produto).
  - **Buscar** todos os produtos.
  - **Buscar** um produto por ID.
  - **Atualizar** os dados de um produto.
  - **Excluir** um produto.

- **Validação**:
  - Não é possível adicionar produtos com nomes duplicados.

---

## **Pré-requisitos**

Antes de executar o backend, você precisa ter:

1. **Node.js** instalado ([Download Node.js](https://nodejs.org/)).
2. Uma conta no **MongoDB Atlas** ([MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
3. Um banco de dados configurado no MongoDB Atlas.

---

## **Configuração do Projeto**

1. **Clone o Repositório**:
```bash
   git clone <link-do-repositorio>
   cd backend
```

2. **Instale as dependências**:
```bash
   npm install
```

3. **Configurar as variáveis de ambiente**:

Crie um arquivo .env na raiz do projeto com as seguintes configurações:

```
PORT=5000
MONGO_URI=Insira aqui o link disponibilizado no MongoDB Atlas
```

4. **Execute o servidor**:

```bash
npm run dev
```