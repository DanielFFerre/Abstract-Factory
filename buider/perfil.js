class Pessoa {
    constructor() {
        this.nome = "";
        this.cargo = "";
        this.matricula = 0;
        this.horaEntrada = "";
        this.horaSaida = "";
    }
    toString() {
        return `Nome: ${this.nome} | Cargo: ${this.cargo} | Matrícula: ${this.matricula} | Hora de Entrada: ${this.horaEntrada} | Hora de Saída: ${this.horaSaida}`;
    }
}

class builderPessoa {

    builder() {
        this.Pessoa = new Pessoa();
        return this; 
    }

    adicionarNome(nome) {
        this.Pessoa.nome = nome;
        return this;
    }
    adicionarCargo(cargo) {
        this.Pessoa.cargo = cargo;
        return this;
    }
    adicionarMatricula(matricula) {
        this.Pessoa.matricula = matricula;
        return this;
    }
    adicionarHoraEntrada(horaEntrada) {
        this.Pessoa.horaEntrada = horaEntrada;
        return this;
    }
    adicionarHoraSaida(horaSaida) {
        this.Pessoa.horaSaida = horaSaida;
        return this;
    }
    build() {
        return this.Pessoa;
    }
}


const meuBuilder = new builderPessoa();
const pessoa1 = meuBuilder.builder()
    .adicionarNome("João")
    .adicionarCargo("Desenvolvedor")
    .adicionarMatricula(12345)
    .adicionarHoraEntrada("08:00")
    .adicionarHoraSaida("17:00")
    .build();

console.log(pessoa1.toString());