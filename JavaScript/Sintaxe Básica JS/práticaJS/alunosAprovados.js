const alunos = [
  {
    nome: prompt('Digite o nome do 1º Aluno:'),
    nota: prompt('Digite a média do aluno:'),
  },
  {
    nome: prompt('Digite o nome do 2º Aluno:'),
    nota: prompt('Digite a média do aluno:'),
  },
  {
    nome: prompt('Digite o nome do 3º Aluno:'),
    nota: prompt('Digite a média do aluno:'),
  },
];

function alunosAprovados(){
  let aprovados = [];
  const media = 7;

  for(let i = 0; i < alunos.length; i++){
    let { nome, nota } = alunos[i]; //Object Destructuring//

    if (nota >= media){
      aprovados.push(nome);
    }
  }
 
  return `Foram Aprovados: ${aprovados}`;
}

console.log(alunosAprovados());
