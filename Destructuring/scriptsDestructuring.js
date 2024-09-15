// ex0 - propriedades de objeto(no caso as props do mousemove)
// function handleMouseMove(event) {
//   console.log(event);
// }
// document.documentElement.addEventListener('mousemove', handleMouseMove);

// ex0.1 - desestrutura de propriedades de objeto(no caso as props do mousemove)
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}
document.documentElement.addEventListener('mousemove', handleMouseMove);

// ex1 - desestrutura de propriedades de objeto(no caso as props do mousemove)
// function handleMouseMove(event) {
//   const { clientX, clientY } = event;
//   console.log(clientX, clientY);
// }
// document.documentElement.addEventListener('mousemove', handleMouseMove);

// ex2 - desestrutura e mudando o nome das propriedades nesse momento

// const pessoa = {
//   name: 'Caio',
//   age: 34,
// };
// const { name: nomePessoa, age: idade } = pessoa;
// console.log('oldNamePessoa:', nomePessoa, 'oldAge:', idade);
// console.log(pessoa);

// ex3 - arrays desestruturando

// const names = ['Caio', 'Expedito', 'Sonia', 'Sara'];
// const [nomePredileto1, nomePredileto2] = names;
// console.log(nomePredileto1, nomePredileto2);
// console.log(names);

// ex4 - desestruturando objetos em funções
// function liquidificador({ banana }) {
//   console.log(banana);
// }
// const fruits = {
//   banana: 'banana',
//   pera: 'pera',
// };
// liquidificador(fruits);
