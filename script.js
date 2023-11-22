let tarefas = document.querySelector("#inputTarefa");
let itens = document.querySelector("#addItens");
let botao = document.querySelector("#botao");

function addItens() {
    resultado.innerHTML = tarefas.value;
    selecionados = document.createElement("li");
    selecionados.innerHTML = resultado; 
}    
// resultado.innerHTML = tarefas.value;