// ex0 - callback hell

// const url = 'https://ranekapi.origamid.dev/json/api/produto';

// const getData = fetch(url);

// getData.then((data) => {
//   data
//     .json()
//     .then((jsonData) => {
//       console.log(jsonData);
//     })
//     .catch((e) => {
//       console.log('erro', e);
//     });
// });

// ex1 - async
// async function getData(url) {
//   try {
//     const dataFetch = await fetch(url);
//     const dataJson = await dataFetch.json();
//     console.log(dataJson);
//   } catch (error) {
//     console.log('EEEEERRRROR:', error);
//   }
// }

// getData('https://ranekapi.origamid.dev/json/api/produto');
