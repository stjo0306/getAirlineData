const fetch = require('cross-fetch');

const id = 3;
const url = `https://api.instantwebtools.net/v1/airlines/${id}`;

(async () => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Fetch failed with:', res);
    }
    const {
      name,
      established,
    }= await res.json();

    console.log(`${name} airlines was established in ${established}`);
  } catch (err) {
    console.log('Getting Airline data failed with:', err.message);
  }
})();
