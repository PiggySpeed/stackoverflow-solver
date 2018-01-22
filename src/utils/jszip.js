//import JSZip from 'jszip';
const fs = require('fs');
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

  function zippy1(data) {
    const result = JSON.parse(Buffer.from(data, 'base64').toString());
    console.log('result is ', result);
    return result;
  }

  function saveAs(data, dirPath) {
      if (!fs.existsSync(dirPath)){
          fs.mkdirSync(dirPath);
      }

      //write the dataset with the given id onto file 'id.json'
      return new Promise(function (fullfil, reject) {
          fs.writeFile(dirPath, function (err){
              if(err)
                  reject(err);
              fullfil();
          });
      })
  }

  function saveAs2(data) {
      const zip = new JSZip();


      // Add a file to the directory, in this case an image with data URI as contents
      var file = zip.folder('courses');

      file.file('out.zip', data, {base64: true});

      // Generate the zip file asynchronously
      zip.generateAsync({type:"base64"})
          .then(function(content) {
              // Force down of the Zip file
              saveAs(content, "out")
                  .then(err => console.warn(err));
          })
          .catch(err => console.warn(err));
  }


  function zippy2(data) {
      const zip = new JSZip();
      zip.folder('courses')
          .file('TREE.json', data, {type: 'base64'});
      const file = zip.generateAsync({ type: 'base64' });
      return saveAs(file, 'out.zip');
  }

    encodeTestJSON('http://localhost:8080/src/utils/assets/test.json')
      .then(res => { console.log('file encoded!', res); return res; }) // encode
      // .then(res => zippy1(res)) //decode
      .then(res => saveAs2(res))
      .then(res => console.log('it is ', res))
      // .then(res => zippy(res))
      .catch(err => console.warn(err));
};

zipFile('bear1');

