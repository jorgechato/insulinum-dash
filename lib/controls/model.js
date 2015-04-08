var mongoose = require('../models/models'),
    Schema = mongoose.Schema;

var controlSchema = new Schema({
    date : String,
    time : String,
    glucose : Number,
    insulin : Number,
    type : String,
    daytime : String,
    note : String
});

controlSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});

var Controls = mongoose.model('controls',controlSchema);

module.exports = Controls;
