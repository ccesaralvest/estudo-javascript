const url = 'https://ranekapi.origamid.dev/json/api/produto';

async function formatData() {
  try {
    const getApi = await fetch(url);
    const apiDataJson = await getApi.json();
    console.log(apiDataJson);
  } catch (e) {
    console.log('error:', e);
  }
  console.log('final');
}
formatData();
