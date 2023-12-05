function addItens() {
    let resultado = document.getElementById("resultado").value; // Está puxando os valores das inputs
    if (resultado.trim() !== "") {
        let selecionados = document.createElement("li"); // Está criando as li's para que possa criar os botões de finalizar e excluir tarefas
        selecionados.innerHTML = resultado;
        // Irá adicionar um botão para finalizar a tarefa
        let finalizarBtn = document.createElement("button"); // Esttou criando um botão para finalizar o botão
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
        selecionados.appendChild(finalizarBtn); // Esses appendChild irá criar dentro da let selecionados os botões, que tem a let excluirBtn e a let finalizarBtn.
        selecionados.appendChild(excluirBtn);
        document.getElementById("item").appendChild(selecionados); // O item é onde está criada a ul do html, que irá criar uma li com o nome da let de selecionados.
    }
}
function finalizarTarefa(tarefa) {
    document.getElementById("finalizadas").appendChild(tarefa); // vai finalizar as tarefas pendentes e leva-las para a parte de excluir a tarefa
}
function excluirTarefa(tarefa) {
    tarefa.remove(); // Vai remover a tarefa de finalizadas
}
document.getElementById("button").addEventListener("click", addItens); // Tá adicionando um evento de click nos botões
