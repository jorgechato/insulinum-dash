var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/'+'mybeatdiabetes');

module.exports = mongoose;
