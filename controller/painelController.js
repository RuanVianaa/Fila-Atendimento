const ultimo = localStorage.getItem('ultimoAtendido');
document.getElementById('ultimoAtendimento').textContent = ultimo;
if(ultimo) {
    document.getElementById('ultimoAtendimento').textContent = ultimo;
}
else{
    document.getElementById('ultimoAtendimento').textContent = "Aguardando...";
}

//Controller Painel
function atualizarUltimoAtendimento() {
  const ultimo = localStorage.getItem("ultimoAtendido");

  if (ultimo) {
    document.getElementById("ultimoAtendimento").textContent = ultimo;
  } else {
    document.getElementById("ultimoAtendimento").textContent = "Aguardando...";
  }
}

atualizarUltimoAtendimento(); // Atualiza ao carregar a página
setInterval(atualizarUltimoAtendimento, 1000); // Atualiza a cada segundo