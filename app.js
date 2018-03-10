const express = require('express');
const app = express();
const https = require('https');

const accountSid = 'AC2e57bdd1b62b43e451c2d1c3b769d10b';
const authToken = '893a6ad2d6765f78e87c48d8f77ff4fa';
const client = require('twilio')(accountSid, authToken);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('src-node-test'));

app.post('/send-sms', (req, res) => {
    let phoneNumber = req.body.phoneNumber;
    let message = req.body.message;

    client.messages.create({
        to: `+1${phoneNumber}`,
        from: '+1778615337',
        body: message
    },
    (err, message) => {
        if (err) {
            req.status(400).send("Error has occurred, text message has not been sent");
        } else {
            console.log(`Successfully sent text: ${message.sid}`);
            req.status(200).send("Message has been successfully sent");
        }
    })
});

app.get('/', (req, res) => {
    res.send("index.html");
});

app.get('/send-sms', () => {
    console.log("sendinggggg");
});

app.listen(process.env.PORT, () => {
    console.log(`listening at ${process.env.PORT}`);
});

