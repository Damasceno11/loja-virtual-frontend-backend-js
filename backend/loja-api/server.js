// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); //Para aceitar JSON no body das requisições
const produtos = [
    {
        id: 1,
        nome: 'Camisa Polo Azul',
        imagem: 'img/polo-azul.jpg',
        estoque: 3,
        categoria: 'Roupas',
        valor: 89.9,
    },
    {
        id: 2,
        nome: 'Tênis Esportivo Branco',
        imagem: 'img/tenis-branco.jpg',
        estoque: 5,
        categoria: 'Calçados',
        valor: 199.99,
    },
    {
        id: 3,
        nome: 'Calça Jeans Slim',
        imagem: 'img/jeans-slim.jpg',
        estoque: 5,
        categoria: 'Roupas',
        valor: 129.9,
    },
    {
        id: 4,
        nome: 'Mochila Escolar',
        imagem: 'img/mochila-escola.jpg',
        estoque: 8,
        categoria: 'Acessórios',
        valor: 149.99,
    },
    {
        id: 5,
        nome: 'Relógio Digital',
        imagem: 'img/relogio-digital.jpg',
        estoque: 2,
        categoria: 'Acessórios',
        valor: 79.9,
    },
    {
        id: 6,
        nome: 'Bermuda Masculina',
        imagem: 'img/bermuda-masculina.jpg',
        estoque: 6,
        categoria: 'Roupas',
        valor: 69.9,
    },
    {
        id: 7,
        nome: 'Sandália Feminina',
        imagem: 'img/sandalia-feminina.jpg',
        estoque: 10,
        categoria: 'Calçados',
        valor: 59.99,
    },
    {
        id: 8,
        nome: 'Boné Preto',
        imagem: 'img/bone-preto.jpg',
        estoque: 5,
        categoria: 'Acessórios',
        valor: 49.9,
    },
    {
        id: 9,
        nome: 'Tênis Corrida Azul',
        imagem: 'img/tenis-azul.jpg',
        estoque: 9,
        categoria: 'Calçados',
        valor: 229.9,
    },
    {
        id: 10,
        nome: 'Blusa Moletom',
        imagem: 'img/moletom.jpg',
        estoque: 7,
        categoria: 'Roupas',
        valor: 159.9,
    },
    {
        id: 11,
        nome: 'Cinto de Couro',
        imagem: 'img/cinto-couro.jpg',
        estoque: 6,
        categoria: 'Acessórios',
        valor: 39.9,
    },
    {
        id: 12,
        nome: 'Vestido Floral',
        imagem: 'img/vestido-floral.jpg',
        estoque: 6,
        categoria: 'Roupas',
        valor: 99.9,
    },
    {
        id: 13,
        nome: 'Tênis Skate',
        imagem: 'img/tenis-skate.jpg',
        estoque: 4,
        categoria: 'Calçados',
        valor: 189.99,
    },
    {
        id: 14,
        nome: 'Pulseira Aço Inox',
        imagem: 'img/pulseira-inox.jpg',
        estoque: 11,
        categoria: 'Acessórios',
        valor: 29.9,
    },
    {
        id: 15,
        nome: 'Jaqueta Corta Vento',
        imagem: 'img/jaqueta-taquitel.jpg',
        estoque: 10,
        categoria: 'Roupas',
        valor: 189.99,
    },
    {
        id: 16,
        nome: 'Sapato Social',
        imagem: 'img/sapato-social.jpg',
        estoque: 7,
        categoria: 'Calçados',
        valor: 149.9,
    },
    {
        id: 17,
        nome: 'Meia Esportiva',
        imagem: 'img/meia-esportiva.jpg',
        estoque: 25,
        categoria: 'Acessórios',
        valor: 19.9,
    },
    {
        id: 18,
        nome: 'Camisa Listrada',
        imagem: 'img/camisa-listrada.jpg',
        estoque: 8,
        categoria: 'Roupas',
        valor: 99.9,
    },
    {
        id: 19,
        nome: 'Sandália de Couro',
        imagem: 'img/sandalia-couro.jpg',
        estoque: 5,
        categoria: 'Calçados',
        valor: 129.99,
    },
    {
        id: 20,
        nome: 'Carteira Masculina',
        imagem: 'img/carteira.jpg',
        estoque: 12,
        categoria: 'Acessórios',
        valor: 59.9,
    },
    {
        id: 21,
        nome: 'Camisa Xadrez',
        imagem: 'img/camisa-xadrez.jpg',
        estoque: 9,
        categoria: 'Roupas',
        valor: 109.9,
    },
    {
        id: 22,
        nome: 'Chinelo Slide',
        imagem: 'img/chinelo-slide.jpg',
        estoque: 8,
        categoria: 'Calçados',
        valor: 39.99,
    },
    {
        id: 23,
        nome: 'Gorro de Lã',
        imagem: 'img/gorro.jpg',
        estoque: 10,
        categoria: 'Acessórios',
        valor: 24.9,
    },
    {
        id: 24,
        nome: 'Vestido Midi',
        imagem: 'img/vestido-mid.jpg',
        estoque: 6,
        categoria: 'Roupas',
        valor: 119.9,
    },
    {
        id: 25,
        nome: 'Bota Feminina',
        imagem: 'img/bota.jpg',
        estoque: 4,
        categoria: 'Calçados',
        valor: 249.99,
    },
    {
        id: 26,
        nome: 'Óculos de Sol',
        imagem: 'img/oculos.jpg',
        estoque: 10,
        categoria: 'Acessórios',
        valor: 79.9,
    },
    {
        id: 27,
        nome: 'Camisa Social Branca',
        imagem: 'img/camisa-branca.jpg',
        estoque: 7,
        categoria: 'Roupas',
        valor: 139.9,
    },
    {
        id: 28,
        nome: 'Sapatênis Casual',
        imagem: 'img/sapatenis.jpg',
        estoque: 8,
        categoria: 'Calçados',
        valor: 169.9,
    },
    {
        id: 29,
        nome: 'Corrente Prata',
        imagem: 'img/corrente-prata.jpg',
        estoque: 6,
        categoria: 'Acessórios',
        valor: 49.9,
    },
    {
        id: 30,
        nome: 'Calça Jogger',
        imagem: 'img/calca-jogger.jpg',
        estoque: 10,
        categoria: 'Roupas',
        valor: 119.9,
    },
];
// Rota Get para retornar a lista de produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota PATCH para baixar o estoque de um produto específico
app.patch('/produtos/:id/estoque', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    if (produto.estoque <= 0) {
        return res.status(400).json({ erro: 'Produto esgotado.' });
    }

    produto.estoque -= 1;
    return res.json({ mensagem: 'Estoque atualizado com sucesso.', produto });
});

// Rota teste restaurar estoque
app.post('/produtos/:id/restaurar', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((p) => p.id === id);

    if (!produto) {
        return res.status(404).json({ erro: 'Produto não encontrado.' });
    }

    // Restaurar estoque para o valor original
    produto.estoque = req.body.estoque ?? 5; // Defina o valor original desejado
    return res.json({ mensagem: 'Estoque restaurado com sucesso.', produto });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
