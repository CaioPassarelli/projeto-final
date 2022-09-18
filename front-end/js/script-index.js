window.onload = () => {
    console.log('Script rodando...');
}


/* Função criada para cadastrar produtos no banco de dados */
async function cadastraProduto() {
    const produtoNome = document.getElementById('nome');
    const produtoDescricao = document.getElementById('descricao');
    const produtoPreco = document.getElementById('preco');
    const produtoCategoria = document.getElementById('categoria');

    const produtoCriado = {
        nome: produtoNome.value,
        categoria: produtoCategoria.value,
        descricao: produtoDescricao.value,
        preco: produtoPreco.value
    }

    const init = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoCriado)
    }

    const response = await fetch('http://localhost:3000/produtos', init)
    const dados = await response.json();

    alert('Produto cadastrado com sucesso!')
    produtoNome.value = ''
    produtoDescricao.value = ''
    produtoPreco.value = ''
    produtoCategoria.value = ''
}



/* Método criado para validar formulário */
const form = document.getElementById('form')
const nome = document.getElementById('nome')
const descricao = document.getElementById('descricao')
const preco = document.getElementById('preco')
const categoria = document.getElementById('categoria')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validaCadastro();
})

function validaCadastro() {
    const nomeValue = nome.value.trim().length;
    const descricaoValue = descricao.value.trim().length;
    const precoValue = preco.value;
    const categoriaValue = categoria.value.trim().length;

    console.log(nomeValue)
    console.log(descricaoValue)
    console.log(precoValue)
    console.log(categoriaValue)

    if(nomeValue >= 2 && descricaoValue >= 10 && categoriaValue >= 4 && precoValue > 0) {
        cadastraProduto();
    } else {
        alert('Erro ao cadastrar produto, revise os campos antes de enviar novamente.')
    }
}