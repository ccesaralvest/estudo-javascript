// ex0 - async await comentado
// console.log('-----------');
// console.log('async study');
// console.log('-----------');

// const mySimulateFetch = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve('OK');
//     }, 5000);
//   });

// console.log('-----------');
// console.log('just a promise until here');
// console.log('-----------');
// console.log(mySimulateFetch());

// async function start() {
//   console.log('-----------');
//   console.log('function with async and await to get the promise result');
//   console.log('-----------');
//   const result = await mySimulateFetch();
//   console.log(result);
// }
// start();

// ex1 - basico async await
// const simulateFetch = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve('RESOLVE');
//     }, 2000);
//   });
// async function getData(params) {
//   const showData = await simulateFetch();
//   console.log(showData);
// }
// getData();

// ex2 - trantando Erros
const simulateFetch = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject('Op´s');
    }, 2000);
  });
async function getData() {
  try {
    const showData = await simulateFetch();
    console.log(showData);
  } catch (error) {
    console.log('error', error);
  }
}
getData();
