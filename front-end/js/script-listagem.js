window.onload = () => {
    console.log('Script rodando...');
    listarProdutos();
    semProdutos();
}

/* Método criado para o funcionamento da barra de pesquisa */
const escondeProdutos = (produtos, textoDigitado) => {
    produtos
        .filter(produto => !produto.textContent.toLowerCase().includes(textoDigitado))
        .forEach(produto => {
            produto.classList.add('esconder')
        })
}

const exibeProdutos = (produtos, textoDigitado) => {
    produtos
        .filter(produto => produto.textContent.toLowerCase().includes(textoDigitado))
        .forEach(produto => {
            produto.classList.remove('esconder')
        })
}


const busca = document.getElementById('barra-pesquisa');
busca.addEventListener('input', event => {
    const textoDigitado = event.target.value.trim().toLowerCase();
    const containerProdutos = document.getElementById('container-produtos')
    const produtos = Array.from(containerProdutos.children);
    
    escondeProdutos(produtos, textoDigitado);
    exibeProdutos(produtos, textoDigitado);
})





/* Função para listar os produtos cadastrados no banco de dados */
async function listarProdutos() {
    const response = await fetch('http://localhost:3000/produtos');
    const dados = await response.json();

    dados.forEach(item => {
        const containerProdutos = document.getElementById('container-produtos');
        const template = document.getElementById('template-produtos');
        const produtos = document.importNode(template.content, true);
        const itens_produtos = produtos.querySelectorAll('span');
    
        itens_produtos[0].innerText = item.nome;
        itens_produtos[1].innerText = item.categoria;
        itens_produtos[2].innerText = item.descricao;
        itens_produtos[3].innerText = item.preco;

        containerProdutos.append(produtos);
    })
}


/* Função para exibir mensagem caso não exista nenhum produto cadastrado */
async function semProdutos() {
    const response = await fetch('http://localhost:3000/produtos');
    const dados = await response.json();
    if(dados.length == 0) {
        console.log('Nenhum produto cadastrado!');

        const containerProdutos = document.getElementById('container-sem-produto');
        const template = document.getElementById('template-sem-produto');
        const produtos = document.importNode(template.content, true);
        const itens_produtos = produtos.querySelectorAll('span');
    
        itens_produtos[0].innerText = 'Nenhum produto cadastrado!';

        containerProdutos.append(produtos);
    }
}