const express = require('express');
const app = express();
const PORT = 8000;
const pathName = {
    root: __dirname + '/public/',
    dotfiles: 'deny'
};
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.get('/', (req, res) => {
    res.sendFile('index.html', pathName);
});
app.get('/:path', (req, res) => {
    const path = req.params.path;
	if (path == "joinus") {
        res.sendFile('joinus.html', pathName);
    } else if (path == "login") {
        res.sendFile('profile.html', pathName);
    } else {
        res.status(404).send("NOT FOUND");
    }
	
});
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});