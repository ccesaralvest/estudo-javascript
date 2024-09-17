// ex0 - basic - console log aparece primeiro, somente depois mostro o retorno da "api"
// const simulateRequest = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const obj = [
//       {
//         nome: 'ob1',
//         idade: 1,
//       },
//       {
//         nome: 'ob2',
//         idade: 2,
//       },
//       {
//         nome: 'ob3',
//         idade: 3,
//       },
//     ];
//     return resolve(obj);
//   }, 3000);
// });

// simulateRequest.then((payload) => {
//   console.log(payload);
// });
// console.log('fim');

// ex1 - async test
const fakeApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fakeApi Return');
    }, 4000);
  });

async function getData(params) {
  const myData = await fakeApi();
  console.log(myData);
}

getData();
