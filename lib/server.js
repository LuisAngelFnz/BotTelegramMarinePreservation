const config = {port:process.env.PORT || 3000};
const express = require('express');


const app = express();

app.use(express.json())

app.set('port', config.port);

app.use('/', express.static('public'))
app.use('/', (request, response) => {
  return response.status(200).json({'yest':'test'});
});

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});