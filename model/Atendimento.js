class Atendimento {
  #nome;
  #cpf;
  #data;
  #hora;
  constructor(nome, cpf, data, hora) {
    this.nome = nome;
    this.cpf = cpf;
    this.data = data;
    this.hora = hora;
  }
  get nome() {
    return this.#nome;
  }
  get cpf() {
    return this.#cpf;
  }
  get data() {
    return this.#data;
  }
  get hora() {
    return this.#hora;
  }
  set nome(value) {
    this.#nome = value;
  }
  set cpf(value) {
    this.#cpf = value;
  }

  set data(value) {
    this.#data = value;
  }
  set hora(value) {
    this.#hora = value;
  }
    toString() {
    return (
      this.#nome+ " | " + this.#cpf+ " | " + this.#data+ " | " + this.#hora
    );
  }

}
