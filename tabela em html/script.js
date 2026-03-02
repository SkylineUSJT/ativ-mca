function carregarArquivo(id, arquivo){
    fetch(arquivo)
    .then(Response => Response.text())
    .then(data => {
    document.getElementById(id).innerHTML = data;
})
}
carregarArquivo("header", "Header.html");
carregarArquivo("corpo", "Tabela.html");