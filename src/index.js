const fetch = require('cross-fetch');
const readline = require('readline');


const id = 3;
const url = `https://api.instantwebtools.net/v1/airlines/${id}`;

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('press enter to exit');
rl.on('line', (input) => {
  process.exit();
});

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
    rl.prompt();
  } catch (err) {
    console.log('Getting Airline data failed with:', err.message);
  }
})();

