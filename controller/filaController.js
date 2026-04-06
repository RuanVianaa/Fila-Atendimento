const minhaFila = new Fila(5);

function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome");  // Input nome
  const cpf = document.getElementById("txtnovoCpf");  // Input CPF
  const data = obterDataAtual();  // Função para obter data atual
  const hora = obterHoraAtual();  // Função para obter hora atual
  const novoAtendimento = new Atendimento(nome.value, cpf.value, data, hora);  // Cria Atendimento
  if (minhaFila.enqueue(novoAtendimento)) {  // Adiciona à fila
    mostrarFila();  // mostra fila atualizada
    nome.value = "";  // Limpa input nome
    cpf.value = "";  // Limpa input CPF
    nome.focus();  // Foco no nome
  } else {
    alert("Fila cheia!");  // Alerta se fila cheia
  }
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
    const removido = minhaFila.dequeue();
    const horaSaida = obterHoraAtual(); //VAi mostrar o horário que a pessoa saiu da fila
    const tempoFila = calcularDiferencaHoras(removido.hora, horaSaida); //Calcula o tempo que a pessoa ficoi na fila
    if(removido===null)
      alert("Fila vazia");
    else{
      const dadoAtendimento = ("Próximo a ser atendido: " + removido.nome + ", Chegou às: " + removido.hora + 
        " está sendo atendido(a) às: " + horaSaida + " Tempo de espera: " + tempoFila);
      alert(dadoAtendimento);// A const usei para saber como armazenar no local storage.
      localStorage.setItem('ultimoAtendido', dadoAtendimento);
      mostrarFila();
    }
}

function buscarElemento(){
    const busca = document.getElementById("txtnovoCpf");  // Input CPF para busca
    let encontrado = false;
    for(let item of minhaFila){
       if(busca.value === item.cpf){
        alert("Encontrado na fila");
        encontrado = true;
       }
    }
    if(!encontrado)
      alert("CPF não encontrado na fila");

}// fim funcao busca