const minhaFila = new Fila(5);

function adicionarElemento(){
    const nomeInput = document.getElementById("txtnovoNome");
    const novoCpf = document.getElementById("txtnovoCpf");

    const atendimento = new Atendimento(nomeInput.value, novoCpf.value);

    minhaFila.enqueue(atendimento);
    mostrarFila();
}

function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML="";
    for(let item of minhaFila){
      const listItem = document.createElement("li");
      listItem.textContent = `Nome: ${item.nome} | CPF: ${item.cpf} | Data: ${item.data} | Hora: ${item.hora}`;
      filaElemento.appendChild(listItem);
    }
}

function removerElemento(){
    let removido = minhaFila.dequeue();
    if(removido===null)
      alert("Fila vazia");
    else{
      alert("Atendido: " + removido.nome);
      mostrarFila();
    }
}

function buscarElemento(){
    const busca = document.getElementById("txtnovoNome");
    let encontrado = false;
    for(let item of minhaFila){
       if(busca.value === item.nome){
        alert("Encontrado na fila");
        encontrado = true;
       }
    }
    if(!encontrado)
      alert("Pessoa não está na fila");

}// fim funcao busca