const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const body = req.body;

    if (body.queryResult) {
        let response = {
            fulfillmentText: "This is a response from your webhook!",
            fulfillmentMessages: [
                {
                    text: {
                        text: ["This is a response from your webhook!"]
                    }
                }
            ]
        };
        res.json(response);
    } else {
        res.sendStatus(400);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
