const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//route to recieve webhook
app.post('/webhook', (req, res) => {
    console.log("Recieved Webhook:", req.body);
    res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;

//start express on defined port
app.listen(PORT, () => {
    console.log(`Webhook receiver listening on port ${PORT}`);
});