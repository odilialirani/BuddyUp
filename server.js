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
app.get('/:file', (req, res) => {
    const file = req.params.file;
	if(file.indexOf('.json') !== -1) {
		res.status(403).send("You can't access this file!");
	}
	res.sendFile(file, options);
});
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});