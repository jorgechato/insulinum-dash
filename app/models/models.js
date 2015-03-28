var mongoose = require('mongoose');

var opts = { mongos: true };

mongoose.connect('mongodb://admin@localhost/'+'insulinum',opts);

module.exports = mongoose;
