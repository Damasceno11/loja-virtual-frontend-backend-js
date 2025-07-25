# 🛍️ Loja Virtual em JavaScript

Loja virtual desenvolvida com HTML, CSS e JavaScript puro (Vanilla), consumindo uma API feita com Node.js/Express. O projeto simula um e-commerce completo, com frontend e backend separados, seguindo boas práticas e estrutura limpa.

## 🚀 Funcionalidades

- Listagem de produtos com imagens e categorias
- Filtro por categorias e pesquisa dinâmica
- Carrinho de compras com adição, alteração e remoção de itens
- Finalização da compra com controle de estoque
- Produtos esgotados são desabilitados
- Confirmação da compra com resumo
- Histórico de compras salvo no navegador (`localStorage`)
- Backend simulado com Node.js + Express

## 🧱 Tecnologias

- HTML5 + CSS3 (com Bootstrap 5)
- JavaScript ES6+
- Node.js + Express
- API local (localhost:3000/produtos)
- `fetch`, `localStorage`, DOM e boas práticas

## 📁 Estrutura

```

/backend
└── server.js
/frontend
├── index.html
├── style.css
└── script.js

````

## ⚙️ Como rodar o projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/loja-virtual-js
cd loja-virtual-js
````

### 2. Instale as dependências (backend)

```bash
cd backend
npm install
npm run dev
```

### 3. Abra o `index.html` com Live Server ou diretamente no navegador

O frontend irá consumir os produtos do backend rodando na porta 3000.

---

## 👨‍💻 Autor

**Pedro Paulo Damasceno Muniz**
Estudante de Análise e Desenvolvimento de Sistemas – Uniasselvi – Blumenau
Participante do treinamento intensivo +Devs2Blu – Blumenau
GitHub: [@Damasceno11](https://github.com/Damasceno11)
