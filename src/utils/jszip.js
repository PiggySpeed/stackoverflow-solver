//import JSZip from 'jszip';
const fs = require('fs');
const JSZip = require('jszip');
const fetch = require('node-fetch');

// function readJSON(file) {
//   return fetch(file)
// }


function saveAs(data, dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  //write the dataset with the given id onto file 'id.json'
  return new Promise(function (fullfil, reject) {
    fs.writeFile(dirPath, function (err) {
      if (err)
        reject(err);
      fullfil();
    });
  })
}

const encodeTestJSON = () => {
  return new Promise((resolve, reject) => {
    const header = { 'Content-Type': 'application/json' };

    const fetchArgs = {
      method: 'GET',
      headers: header
    };

    fetch('http://localhost:8080/src/utils/assets/test.json', fetchArgs)
      .then(res => res.json())                          // retrieve json
      .then(res => JSON.stringify(res))                 // stringify
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

const encodeTestZip = json => {
  const zip = new JSZip();
  zip.file('Hello.json', json); // create test zip file

  const options = {
    type: 'base64',
    compression: 'DEFLATE',
    compressionOptions: {
      level: 3
    }
  };

  return zip.generateAsync(options);
};

const decodeTestZip = data => {
  // take in base64 zip, and decodes and reads the contents
  const zip = new JSZip();
  return zip.loadAsync(data, { base64: true });
};

const readTestZip = zipFile => {
  // const zip = new JSZip();
  // console.log(file.files['Hello.json']);
  return zipFile.file('Hello.json').async('text');
};

const readTestJSON = data => {
  const data2 = JSON.parse(data);
  data2.tree = 'haeeeeee';
  return data2;
};

// const readTestZipContents = data => {
//   console.log(data);
// };

const zipFile = name => {
  function saveAs(data, dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }

    //write the dataset with the given id onto file 'id.json'
    return new Promise(function (fullfil, reject) {
      fs.writeFile(dirPath, function (err) {
        if (err)
          reject(err);
        fullfil();
      });
    })
  }

  encodeTestJSON() // convert JS object to json
    .then(encodeTestZip) // put json in folder, zip the folder
    .then(decodeTestZip) // decode zip folder
    .then(readTestZip) // read zip folder, load contents+
    .then(readTestJSON) // read json contents
    .then(logAndReturn)
    .catch(err => console.warn(err));

    // encodeTestJSON('http://localhost:8080/src/utils/assets/test.json')
    //   .then(logAndReturn)
    //   .then(encodeTestZip) // encoded zip file in base64
      // .then(loadTestZip)
      // .then(logAndReturn)
      // .then(readTestZip)
      // .then(logAndReturn)
      // .catch(err => console.warn(err));
};

function logAndReturn(data) {
  console.log('LOGGING >>>>', data);
  return data;
}

zipFile('bear1');

