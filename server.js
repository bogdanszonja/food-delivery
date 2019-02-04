const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('App is working'));

app.listen(8080, () => console.log('App is listening on port 8080!'));

module.exports = {
    app
};