let ordenarPorPreco = document.getElementById("btnOrdenarPorPreco");
ordenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados);
}

//sort - ordena os livros do menor para o maior ( a, b) ou do maior para o menor (b, a);