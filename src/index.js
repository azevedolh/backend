const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json({"message": "Hello world!" })
})

app.post('/projects', (req, res) => {
  return res.json({"message": "Hello world!" })
})

app.put('/projects/:id', (req, res) => {
  return res.json({"message": "Hello world!" })
})

app.delete('/projects/:id', (req, res) => {
  return res.json({"message": "Hello world!" })
})



app.listen(3333, () => {
  console.log("🚀 Back-end started!")
});