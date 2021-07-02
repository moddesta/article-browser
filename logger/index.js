const express = require('express');

const PORT = 5000;
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Logger is listening to port ${PORT}`);
});

app.post('/keywords', (request) => {
  console.log(request.body);
});

app.post('/articles', (request) => {
  console.log(request.body);
});
