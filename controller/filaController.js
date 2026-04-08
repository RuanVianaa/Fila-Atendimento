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

function removerElemento() {
    const removido = minhaFila.dequeue();

    if (removido === null) {
      alert("Fila vazia");
    } else {
      const horaSaida = obterHoraAtual(); // VAi mostrar o horário que a pessoa saiu da fila
      const tempoFila = calcularDiferencaHoras(removido.hora, horaSaida); // Tempo que a pessoa ficou na fila

      const dadoAtendimento = "Próximo a ser atendido: " + removido.nome + ", chegou às " + removido.hora +
      " e está sendo atendido(a) às " + horaSaida + ". Tempo de espera: " + tempoFila; // Monta a mensagem de atendimento
      const divMensagem = document.getElementById("mensagem-remocao"); // Vai mostrar a mensagem de atendimento sem ser um alert
      divMensagem.textContent = dadoAtendimento; // Mostra a mensagem de atendimento
      divMensagem.style.display = "block";

      localStorage.setItem('ultimoAtendido', removido.nome); // Armazena o nome da última pessoa atendida
      mostrarFila(); // Mostra fila atualizada
    }
}

function buscarElemento(){
    const busca = document.getElementById("txtnovoCpf");  // Input CPF para busca
    let encontrado = false;
    let posicao = 1;
    for(let item of minhaFila){
       if(busca.value === item.cpf){
        alert("Encontrado na fila  - posição: " + posicao);
        encontrado = true;
        break;
       }
        posicao++;
    }
    if(!encontrado)
      alert("CPF não encontrado na fila");

}// fim funcao busca