function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //...livro - pega tudo o que tem em livro
        //e retorna as informações para mim, porém no preço retorno a nova informação passada.
    })
    return livrosComDesconto;
}