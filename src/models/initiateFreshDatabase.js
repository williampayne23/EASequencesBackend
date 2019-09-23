const database = require('./index');
database.sequelize.sync({ force: true });