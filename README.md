# 🛍️ Loja Virtual – Projeto Prático Dev2Blu

Este é um projeto completo de uma **Loja Virtual** desenvolvido com HTML, CSS e JavaScript puro. O objetivo é aplicar na prática os conhecimentos de front-end, consumo de API e manipulação de dados, como parte das atividades avaliativas do curso **+Devs2Blu – Prefeitura de Blumenau e Proway**.

---

## ✅ Funcionalidades

- Listagem dinâmica de produtos com base em uma API local
- Sistema de carrinho de compras com:
  - Adição e remoção de itens
  - Alteração da quantidade
  - Validação de estoque
- Finalização de compra com página de confirmação
- Filtro por categoria no menu
- Pesquisa por nome ou categoria em tempo real
- Controle de estoque automático (produto esgotado = botão desativado)
- Histórico de compras salvo no navegador (localStorage)

---

## 🚀 Tecnologias Utilizadas

- HTML5 + CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- Node.js com Express (para simular API local)
- `fetch API` para consumo de dados
- localStorage

---

## 🧩 Como Executar o Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
````

2. **Acesse a pasta do back-end e instale as dependências:**

```bash
cd backend
npm install
npm run dev
```

> O servidor rodará em: `http://localhost:3000/produtos`

3. **Abra o front-end:**

* Vá até a pasta `frontend` e abra o arquivo `index.html` com o **Live Server** ou arraste no navegador.

---

## 📸 Imagens do Projeto

### 🛒 Página Inicial – Produtos

![Página Inicial](./img/site.png)

### 🔎 Filtro de Produtos por Categoria

![Filtro por Categoria "Camisa"](./img/filtro-camis-ativo.png)

### 🛍️ Carrinho de Compras

![Carrinho de Compras](./img/carrinho.png)

### ✅ Confirmação de Compra

![Página de Confirmação](./img/confirmacao-compra.png)

### 📜 Histórico de Compras

![Histórico de Compras](./img/carrinho-confirmacao.png)

---

## 👨‍💻 Autor

**Pedro Paulo Damasceno Muniz**
Estudante de Análise e Desenvolvimento de Sistemas – Uniasselvi – Blumenau
Participante do programa intensivo +Devs2Blu – Prefeitura de Blumenau e Proway
GitHub: [github.com/Damasceno11](https://github.com/Damasceno11)

---

## 📌 Observações

* O projeto **não utiliza banco de dados**. O controle de estoque é feito em memória local (front-end).
* As imagens foram armazenadas localmente na pasta `img` para evitar erros de carregamento externo.

---

