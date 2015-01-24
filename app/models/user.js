var models = require('./models'),
    Schema = models.Schema;

var userSchema = Schema({
    Username : 'string',
    profilePic : 'string',
    birthday : 'date',
    weight : 'float',
    height : 'float',
    digits : Schema.Types.Mixed
});

var User = models.model('user',userSchema);

module.exports = User;
