const SequenceRoutes = require('./src/routes/sequences');
const LinkRoutes = require('./src/routes/links');
const SequenceLinkRoutes = require('./src/routes/sequencelinks');
const VerficationRoutes = require('./src/routes/verification');

const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.use('/sequences', SequenceRoutes);
app.use('/links', LinkRoutes);
app.use('/sequencelinks', SequenceLinkRoutes);
app.use('/', VerficationRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));