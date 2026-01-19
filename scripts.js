const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 7 },
  { nome: "Diego", nota: 4 },
  { nome: "Fernanda", nota: 9 }
];

const filtrarAprovados = (lista) => {
  return lista.filter(aluno => aluno.nota >= 6);
};

const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
