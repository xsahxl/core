import { getCredential } from '../../src/common';

async function get() {
  const c = await getCredential();
  console.log(c);
}

get();

// async function set() {
//   const c = await setCredential('AccountID', 'SecretID', 'SecretKey');
//   console.log(c);
// }

// set();


// import {setKnownCredential} from '../../src/common';

// const info = {
//   AccountID: 'U2FsdGVkX1+jAj7Kxp3X1lHwFSUtBoSqkpFXp/dYEB0=',
//   SecretID: 'U2FsdGVkX1/NKNJ6MDERFRhQ6GIukaUogeKcFJrhMRU=',
//   SecretKey: 'U2FsdGVkX1/OSprVoM65l3trkwg4CgAjtQZzt/wN798=',
// };

// (async()=>{
//  await setKnownCredential(info, 'xxx')
// })()