const express = require('express');
const app = express();

const server = app.listen(3000, function() {
  console.log('Servidor funcionando')
})

app.use(express.static('public'));