function addItens() {
    let resultado = document.getElementById("resultado"); // Está puxando os valores das inputs
    if (resultado.value.trim() !== "") {
        let selecionados = document.createElement("li"); // Está criando as li's para que possa criar os botões de finalizar e excluir tarefas
        selecionados.innerHTML = resultado.value;
        // Irá adicionar um botão para finalizar a tarefa
        let finalizarBtn = document.createElement("button"); // Estou criando um botão para finalizar a tarefa
        finalizarBtn.innerHTML = "Finalizar"; // Estou colocando o nome do botão
        finalizarBtn.className = "finalizarBtn" // Estou colocando uma classe no botão
        finalizarBtn.addEventListener("click", function() {
            finalizarTarefa(selecionados); // Estou adicionando um evento de click no botão
        });
        // Irá adicionar um botão pra excluir a tarefa
        let excluirBtn = document.createElement("button"); // Estou criando um botão para excluir a tarefa
        excluirBtn.innerHTML = "Excluir"; // Estou colocando o nome do botão
        excluirBtn.addEventListener("click", function() { 
            excluirTarefa(selecionados); // Estou adicionando um evento de click no botão
        });
        // Vai adicionar os itens na lista de tarefas pendentes
        selecionados.appendChild(finalizarBtn); // Esses appendChild irá criar dentro da let selecionados o botão, que tem a let finalizarBtn.
        selecionados.appendChild(excluirBtn); // Esses appendChild irá criar dentro da let selecionados o botão, que tem a let excluirBtn.
        document.getElementById("item").appendChild(selecionados); // O item é onde está criada a ul do html, que irá criar uma li com o nome da let de selecionados.
        resultado.value = ""
    }
}
function finalizarTarefa(tarefa) {
    tarefa.removeChild(tarefa.childNodes[1]); // Vai remover o botão de finalizar a tarefa
    document.getElementById("finalizadas").appendChild(tarefa); // vai finalizar as tarefas pendentes e leva-las para a parte de excluir a tarefa
}
function excluirTarefa(tarefa) {
    tarefa.remove(); // Vai remover a tarefa de finalizadas
}
document.getElementById("button").addEventListener("click", addItens); // Tá adicionando um evento de click nos botões
document.addEventListener("keypress", function(event) { // Tá adicionando um evento de tecla pressionada
    if (event.keyCode === 13) { // Se a tecla pressionada for a 13 (enter), irá adicionar o item
        addItens();
    }
})