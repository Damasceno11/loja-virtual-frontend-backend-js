const API_URL = 'http://localhost:3000/produtos';
const container = document.getElementById('produtos-container');
const pesquisaInput = document.getElementById('pesquisa');

let produtos = [];
let carrinho = [];
let historico = JSON.parse(localStorage.getItem('historico')) || [];

// Carrea os produtos da API e exibe na página
async function carregarProdutos() {
    const res = await fetch(API_URL);
    produtos = await res.json();
    exibirProdutos(produtos);
}

// Exibe os produtos na tela
function exibirProdutos(lista) {
    container.innerHTML = '';
    lista.forEach((produto) => {
        const card = document.createElement('div');
        card.className = 'col-sm-6 col-md-4 col-lg-3';
        card.innerHTML = `
      <div class="card h-100">
        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${produto.nome}</h5>
          <p class="card-text">${produto.categoria}</p>
          <p class="card-text fw-bold">R$ ${produto.valor.toFixed(2)}</p>
          <button class="btn btn-primary mt-auto" onclick="comprarProduto(${
              produto.id
          })" ${produto.estoque <= 0 ? 'disabled' : ''}>
            ${produto.estoque <= 0 ? 'Esgotado' : 'Comprar'}
          </button>
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Adiciona um produto ao carrinho
async function comprarProduto(id) {
    const produto = produtos.find((p) => p.id === id);
    if (!produto || produto.estoque <= 0) {
        alert('Produto esgotado!');
        return;
    }

    const res = await fetch(`${API_URL}/${id}/estoque`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
        const itemNoCarrinho = carrinho.find((item) => item.id === id);
        if (itemNoCarrinho) {
            itemNoCarrinho.qtd += 1;
        } else {
            carrinho.push({ ...produto, qtd: 1 });
        }

        produto.estoque -= 1;
        atualizarContadorCarrinho();
        exibirProdutos(produtos);
    } else {
        alert('Estoque insuficiente!');
    }
}

// Ver produtos do carrinho
function abrirCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';

    let total = 0;
    carrinho.forEach((item, index) => {
        total += item.valor * item.qtd;
        const li = document.createElement('li');
        li.className =
            'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
      ${item.nome} - R$ ${item.valor.toFixed(2)} x
      <input type="number" value="${
          item.qtd
      }" min="1" max="99" style="width: 60px;" onchange="alterarQtd(${index}, this.value)">
      <button class="btn btn-sm btn-outline-danger" onclick="removerDoCarrinho(${index})">Remover</button>
    `;
        lista.appendChild(li);
    });

    document.getElementById('total-carrinho').textContent = total.toFixed(2);
    document.getElementById('modal-carrinho').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('modal-carrinho').style.display = 'none';
}

function atualizarContadorCarrinho() {
    const contador = carrinho.reduce((soma, item) => soma + item.qtd, 0);
    document.getElementById('contador-carrinho').textContent = contador;
}

function alterarQtd(index, novaQtd) {
    novaQtd = parseInt(novaQtd);
    if (novaQtd <= 0) return;

    const item = carrinho[index];
    const diff = novaQtd - item.qtd;
    const produto = produtos.find((p) => p.id === item.id);

    if (produto.estoque < diff) {
        alert('Estoque insuficiente.');
        return;
    }

    item.qtd = novaQtd;
    produto.estoque -= diff;
    exibirProdutos(produtos);
    abrirCarrinho();
    atualizarContadorCarrinho();
}

function removerDoCarrinho(index) {
    const item = carrinho[index];
    const produto = produtos.find((p) => p.id === item.id);
    produto.estoque += item.qtd;
    carrinho.splice(index, 1);
    exibirProdutos(produtos);
    abrirCarrinho();
    atualizarContadorCarrinho();
}

function finalizarCompra() {
    if (carrinho.length === 0) return;

    const resumo = {
        data: new Date().toLocaleString(),
        itens: [...carrinho],
        total: carrinho.reduce((t, p) => t + p.valor * p.qtd, 0),
    };

    historico.push(resumo);
    localStorage.setItem('historico', JSON.stringify(historico));

    alert(`Compra finalizada! Total: R$ ${resumo.total.toFixed(2)}`);
    carrinho = [];
    atualizarContadorCarrinho();
    fecharCarrinho();
    mostrarConfirmacao(resumo);
}

function mostrarConfirmacao(compra) {
    container.innerHTML = `
    <div class="text-center mt-5">
      <h2 class="text-success">Compra Realizada com Sucesso!</h2>
      <p class="mt-3">Data: ${compra.data}</p>
      <p>Total: R$ ${compra.total.toFixed(2)}</p>
      <h4 class="mt-4">Itens Comprados:</h4>
      <ul class="list-group">${compra.itens
          .map((i) => `<li class="list-group-item">${i.nome} x ${i.qtd}</li>`)
          .join('')}</ul>
      <button class="btn btn-primary mt-4" onclick="carregarProdutos()">Voltar para loja</button>
    </div>`;
}

pesquisaInput.addEventListener('input', () => {
    const termo = pesquisaInput.value.toLowerCase();
    const filtrados = produtos.filter(
        (p) =>
            p.nome.toLowerCase().includes(termo) ||
            p.categoria.toLowerCase().includes(termo),
    );
    exibirProdutos(filtrados);
});

carregarProdutos();
