//ex0 - sincrono - linha a linha, ele le linha a linha executa, entretanto, setTimeout manda esperar pra executar pois esse metodo tem callback
// console.log('Aqui');

// setTimeout(() => {
//   console.log('depois de 5 segundos');

//   setTimeout(() => {
//     console.log('4 segundos');

//     setTimeout(() => {
//       console.log('3 segundos');

//       setTimeout(() => {
//         console.log('2 segundos');
//       }, 2000);
//     }, 3000);
//   }, 4000);
// }, 5000);

// console.log('depois da função setTimeOut');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');
// console.log('=======');

console.log('start promise');

// ex1 - nesse exemplo, a promessa é resolvida na hora, então o consolelog retorna o RESOLVE
// const getApi = new Promise((resolve, reject) => {
//   return resolve('resolvi porra!!!');
// });
// console.log(getApi);

// ex2 - nesse exemplo como existe um tempo de espera para o Retorno, quando chamamos a funcao e damos console, ela ainda é uma promessa.
// const getApi = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     return resolve('resolvi depois de 5 segundos');
//   }, 2000);
// });
// console.log(getApi);

// ex3 - aqui usei o then para esperar e então mostrar o que retornou, ainda fiz um tratamento para verificar se deu algum erro
// const pegaDados = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // return reject('erro');
//     return resolve('resolvido depois de 3 segundos');

//   }, 3000);
// });

//ex4 - vendo basicamente nesse momento que o que existe é apenas uma promessa nesse momento. A Promise não retornou nada ainda nesse momento de execução do JS
const fazerPedido = new Promise((resolve, reject) => {
  setTimeout(() => {
    return reject('resultado do resolve');
    // return resolve('resultado do resolve');
  }, 2000);
});
// apenas a promessa até então
// console.log('fazerPedido', fazerPedido);

// fazerPedido
//   .then((response) => {
//     console.log('Deu Certo:', response);
//   })
//   .catch((response) => {
//     console.log('Deu Ruim:', response);
//   })
//   .finally((response) => {
//     console.log('acabou os THEN');
//   });

// console.log('end promise');

// ex5 - test async
const fakePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      setInterval(() => {
        let count = 0;
        console.log(count + 1);
      }, 4000);
      return resolve('Resolved FalePromise');
    }, 4000);
  });
async function start() {
  const dataFakePromise = await fakePromise();
  console.log(dataFakePromise);
}
start();
