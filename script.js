let resultado = document.getElementById("resultado").value;
let pendentes = document.getElementById("item");
let finalizadas = document.getElementById("finalizadas");

function addItens() {
    let selecionados = document.createElement("li");
    let ultimoItem = pendentes.childElementCount;
    selecionados.dataset.index = ultimoItem;
    selecionados.innerHTML = resultado;
    document.getElementById("item").appendChild(selecionados);
    if (selecionados > 0) {
        let finalizar = document.createElement("a");
        finalizar.innerHTML = resultado;
        document.getElementById("finalizar").appendChild(finalizar);
        document.getElementById("button").addEventListener
    }
}    
// resultado.innerHTML = tarefas.value;

document.getElementById("button").addEventListener("click", addItens);

function concluir(item) {
    removido = pendentes.children[item];
    pendentes.removeChild(removido);
}