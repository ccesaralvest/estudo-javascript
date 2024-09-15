const obj = {
  nome: 'Caio',
  sobrenome: 'Cesar',
  idade: 34,
  sexo: 'Masculino',
};
// ex0 - acessando a propriedade do obj
// console.log(obj.nome);

// ex1 - desconstuindo
// const { nome, sobrenome } = obj;
// console.log('nome:', nome, 'sobrenome:', sobrenome);

// ex2 - traduzindo propriedades no momento da desconstrução
// const { nome: personName, sobrenome: lastName } = obj;
// console.log(obj.nome);
// console.log(personName, lastName);

// ex3 - descontruindo e propriedades de um evento-obj
// function moveuMouse({ target }) {
//   console.log(target);
// }
// document.documentElement.addEventListener('mousemove', moveuMouse);
