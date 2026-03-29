class Atendimento {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
    this.data = obterDataAtual();
    this.hora = obterHoraAtual();
  }
}