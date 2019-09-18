const express = require('express');

const controllers = require('./src/controllers');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/sequences', controllers.sequenceController);
app.use('/links', controllers.linkController);
app.use('/sequencelinks', controllers.sequenceLinkController);
app.use('/', controllers.verificationController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));