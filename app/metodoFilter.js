const botoes = document.querySelectorAll(".btn"); //querySelector - filtra o primeiro elemento que encontrar... 
                                                  //querySelectorAll - filtra todos os elementos que tiverem a mesma identificação informada.
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id); //aqui ele vai saber qual botão foi clicado.
    const categoria = elementoBtn.value //aqui ele pega o valor do elemento referente ao botão que foi clicado.

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados);
}