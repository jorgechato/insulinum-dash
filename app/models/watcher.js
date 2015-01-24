var models = require('./models'),
    Schema = models.Schema;

var watcherSchema = Schema({
    Username : 'string',
    profilePic : 'string',
    digits : Schema.Types.Mixed
});

var Watcher = models.model('watcher',watcherSchema);

module.exports = Watcher;
