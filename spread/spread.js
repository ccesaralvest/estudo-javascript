// ex0 - basico
// const detalhesEmpresaFuncionario = [];
// function showList(empresa, ...clientes) {
//   clientes.forEach((cliente) => {
//     detalhesEmpresaFuncionario.push(cliente);
//   });
// }
// showList('Dulaso', 'Caio', 'Expedito');
// console.log(detalhesEmpresaFuncionario);

// ex1
const carro = {
  nome: 'Monza',
  cor: 'azul',
  portas: 4,
  ano: 1990,
};
// ex1.1 - - distribuindo o obj e mudando o valor de uma propriedade
// const monzaNovo = { ...carro, ano: 2024 };
// console.log(carro);
// console.log(monzaNovo);

// ex1.2 - - distribuindo letras de uma string e colocando uma barrinha pra separar com join
const { nome } = carro;
const spreadNome = [...nome];
console.log(spreadNome.join('-'));
