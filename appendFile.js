var fs = require('fs');
// appends specified content to a file. If the file does not exist, the file will be created
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});