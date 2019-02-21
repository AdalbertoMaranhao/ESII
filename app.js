const express = require('express');
const app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send("Ola mundo")
});

app.listen(port, () => {
    console.log("ouvindo na porta "+port)
});