//import JSZip from 'jszip';
const JSZip = require('jszip');
const fetch = require('node-fetch');

// function readJSON(file) {
//   return fetch(file)
// }



const encodeTestJSON = file => {
  return new Promise((resolve, reject) => {
    const header = { 'Content-Type': 'application/json' };

    const fetchArgs = {
      method: 'GET',
      headers: header
    };

    fetch(file, fetchArgs)
      .then(res => res.json())                          // retrieve json
      .then(res => JSON.stringify(res))                 // stringify
      .then(res => Buffer.from(res).toString('base64')) // encode in base64
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const decodeTestJSON = data => {
  return new Promise((res, rej) => {
    const result = JSON.parse(Buffer.from(data, 'base64').toString());

    if (!!result) {
      res(result);
    } else {
      rej("error error");
    }

  })
};

const zipFile = name => {
  encodeTestJSON('http://localhost:8080/src/utils/assets/test.json')
    .then(res => { console.log('file encoded!', res); return res; })
    .catch(err => console.warn(err));



};

// zipFile('bear1');


const bear1 = new Promise((res, rej) => {
  setTimeout(() => {console.log('tree1')}, 0);

  res('tree2');
});


const bear2 = new Promise((res, rej) => {
  setTimeout(() => {console.log('bear1')}, 0);

  res('bear2');
});

Promise.resolve(bear1)
  .then(res => console.log(res));
