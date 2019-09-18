const SequenceRoutes = require('./src/routes/sequences');
const LinkRoutes = require('./src/routes/links');
const SequenceLinkRoutes = require('./src/routes/sequencelinks');

const express = require('express');

const app = express();

const port = 3000;

app.use('/sequences', SequenceRoutes);
app.use('/links', LinkRoutes);
app.use('/sequencelinks', SequenceLinkRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));