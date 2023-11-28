function addItens() {
    let resultado = document.getElementById("resultado").value;
    let selecionados = document.createElement("li");
    selecionados.innerHTML = resultado;
    document.getElementById("item").appendChild(selecionados);
    if (selecionados > 0) {
        let finalizar = document.createElement("a");
        finalizar.innerHTML = resultado;
        document.getElementById("finalizar").appendChild(finalizar);
    }
}    
// resultado.innerHTML = tarefas.value;

document.getElementById("button").addEventListener("click", addItens);
