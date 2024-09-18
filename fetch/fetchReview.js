// const url = 'https://ranekapi.origamid.dev/json/api/produto';

// async function formatData() {
//   try {
//     const getApi = await fetch(url);
//     const apiDataJson = await getApi.json();
//     console.log(apiDataJson);
//   } catch (e) {
//     console.log('error:', e);
//   }
//   console.log('final');
// }
// formatData();

// fetch callbackhell
const url = 'https://dummyjson.com/products';
let payloadJsonUse = 'vazio';

fetch(url).then((payload) => {
  payload.json().then((payloadJson) => {
    payloadJsonUse = payloadJson;
    console.log('payloadJsonUse in the time::::', payloadJsonUse);
  });
});

console.log('payloadJsonUse', payloadJsonUse);
