function addItens() {
    let resultado = document.getElementById("resultado").value;
    if (resultado.trim() !== "") {
        let selecionados = document.createElement("li");
        selecionados.innerHTML = resultado;
        // Irá adicionar um botão para finalizar a tarefa
        let finalizarBtn = document.createElement("button");
        finalizarBtn.innerHTML = "Finalizar";
        finalizarBtn.addEventListener("click", function() {
            finalizarTarefa(selecionados);
        });
        // Irá adicionar um botão pra excluir a tarefa
        let excluirBtn = document.createElement("button");
        excluirBtn.innerHTML = "Excluir";
        excluirBtn.addEventListener("click", function() {
            excluirTarefa(selecionados);
        });
        // Vai adicionar os itens na lista de tarefas pendentes
        selecionados.appendChild(finalizarBtn);
        selecionados.appendChild(excluirBtn);
        document.getElementById("item").appendChild(selecionados);
    }
}
function finalizarTarefa(tarefa) {
    document.getElementById("finalizadas").appendChild(tarefa);
}
function excluirTarefa(tarefa) {
    tarefa.remove();
}
document.getElementById("button").addEventListener("click", addItens);