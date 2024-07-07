const express = require('express');
require('dotenv').config()
const app = express();
const port = 8080;

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT || port, () => {
    console.log(`app is listening on the port ${process.env.PORT}`);
})