const url = 'https://dummyjson.com/products';
let payloadJsonUse = 'vazio';

fetch(url).then((payload) => {
  payload.json().then((payloadJson) => {
    payloadJsonUse = payloadJson;
    console.log('payloadJsonUse in the time::::', payloadJsonUse);
  });
});

console.log('payloadJsonUse', payloadJsonUse);
