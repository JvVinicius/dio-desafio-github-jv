const pessoas = [{
  nome: 'Vinicius',
  idade: 24,
},
{
  nome: 'Dudu',
  idade: 27,
},
{
  nome: 'Laiane',
  idade: 25,
},
{
  nome: 'Rob',
  idade: 23,
},
];

function calculaIdade(anos) {

	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos} anos de idade.`;
}

//console.log(calculaIdade.call(pessoas[2], 20));//
console.log(calculaIdade.apply(pessoas[0], [8]));