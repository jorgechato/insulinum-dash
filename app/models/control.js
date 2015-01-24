var models = require('./models'),
    Schema = models.Schema;

var controlSchema = Schema({
});

var Control = models.model('control',controlSchema);

module.exports = Control;
