class Prontuario {
  #numero;
  #observacoes;
  #animal;

  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }

  getNumero() {
    return this.#numero;
  }

  setObservacoes(observacoes) {
    if (observacoes) {
      this.#observacoes = observacoes;
      return true;
    } else {
      return false;
    }
  }

  getObservacoes() {
    return this.#observacoes;
  }

  setAnimal(animal) {
    if (animal) {
      this.#animal = animal;
      if (animal.getProntuario() !== this) {
        animal.setProntuario(this);
      }
      return true;
    } else {
      return false;
    }
  }

  getAnimal() {
    return this.#animal;
  }
}

module.exports = Prontuario;
