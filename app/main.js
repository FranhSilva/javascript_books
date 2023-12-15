let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaAPI();

// async = função assíncrona - significa que o retorno da função  irá ocorrer "por baixo dos panos", ou seja, uma Promise;
// await - recebe uma Promise e a transforma em um valor de retorno ou lança uma exceção em caso de erro.
// para visualizar a função abaixo, abra inspecionar, console;
async function getBuscarLivrosDaAPI(){
    const res = await fetch (endpointDaAPI);
    livros = await res.json();
    console.table(livros);
}