const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.post('/upload', function (req, res) {
  console.log(req)
  res.send('POST request to the homepage')
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});