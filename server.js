const express = require('express');
const fs = require('fs');
var formidable = require('formidable');



var app = express();



app.set('port', process.env.PORT || 3000);

app.get('/', (req,res) => {
  fs.readFile('index.html', (err,html) => {
    if(err) {
      throw err;
    }
    res.write(html);
    res.end();
  });
});

app.post('/getFileSize', (req,res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.send(`File is ${files.fileUpload.size} bytes.`);
 })

});

app.listen(app.get('port'),() => {
  console.log('Server started');
});
