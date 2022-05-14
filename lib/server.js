const config = {port:process.env.PORT};
const express = require('express');


const app = express();


app.set('port', config.port);

app.use('/', express.static('public'))
app.use('/', () => {
  console.log('Funciona');
});

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});