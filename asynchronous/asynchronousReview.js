const fakeApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve('fake api return');
  }, 5000);
});
console.log(fakeApi);
