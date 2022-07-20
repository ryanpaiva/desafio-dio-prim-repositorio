const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},

    {
		nome: 'Julia',
		nota: 3,
		turma: '3B',
	},
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Paulo',
	idade: 9,
};

const pessoa2 = {
	nome: 'Sofia',
	idade: 13,
};

const pessoa3 = {
	nome: 'Julia',
	idade: 15,
};

console.log(alunosAprovados(alunos, 5));

console.log(calculaIdade.call(pessoa1, 30))
console.log(calculaIdade.apply(pessoa2, [29]))