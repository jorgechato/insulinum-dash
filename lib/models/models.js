var mongoose = require('mongoose');

var opts = { mongos: true };

mongoose.connect('mongodb://localhost/'+'insulinum',function(err,res){
    if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

module.exports = mongoose;
