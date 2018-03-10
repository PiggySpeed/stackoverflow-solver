const express = require('express');
const app = express();

app.use(express.static('src-node-test'));

app.get('/', (req, res) => {
    res.send("index.html");
});

app.get('/send-sms', () => {
    console.log("sendinggggg");
});

app.listen(process.env.PORT, () => {
    console.log(`listening at ${process.env.PORT}`);
});

