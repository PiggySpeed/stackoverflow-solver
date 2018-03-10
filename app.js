const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("HEYHEYHEY");
});

app.listen(process.env.PORT, () => {
    console.log(`listening at ${process.env.PORT}`);
});
