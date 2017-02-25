const express = require('express');
const app = express();
const PORT = 8000;
const pathName = {
    root: __dirname + '/public/',
    dotfiles: 'deny'
};
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile('index.html', pathName);
});

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});