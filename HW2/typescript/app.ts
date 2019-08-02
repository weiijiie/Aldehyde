import express from "express";
const capitalizeText = require('./capitalize.js');
const app = express();
const port= 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.post('/', (req: express.Request, res: express.Response) => {
    const input = req.body;
    res.send(capitalizeText(input.text));
});

app.listen(port, () => console.log(`Aldehyde app listening on port ${port}!`));