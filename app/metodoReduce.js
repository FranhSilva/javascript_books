function calcularValorTotalDeLivrosDisponiveis(livros){
    return livros.reduce((valorAcumulado,valorDoLivro) => valorAcumulado + valorDoLivro.preco, 0).toFixed(2);
}