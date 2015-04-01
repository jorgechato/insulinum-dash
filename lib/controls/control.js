var mongoose = require('./models'),
    Schema = mongoose.Schema;

var controlSchema = new Schema({
    "date" : Date,
    "time" : Date,
    "glucose" : Number,
    "insulin" : Number,
    "type" : String,
    "daytime" : String,
    "note" : String
});

controlSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
});
// controlSchema.set('toJSON', { getters: true, virtuals: false });

var Controls = mongoose.model('control',controlSchema);

module.exports = Controls;
