var mongo = require('mongodb');

var Server = mongo.Server
  , Db     = mongo.Db
  , BSON   = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true})
  , whdb   = new Db('formula-one', server, {journal: true})
  , apps;

exports.init = function(then) {
  whdb.open(function(err, db) {
    !err && (db.collection('wildhacks_apps', function(err, col) {
      !err && (apps = col, true)
        ? console.log('coll get.') : console.log(err);
      then(err, col);
    }), true) ? console.log('db get.') : console.log(err);
  });
};

exports.processFieldNames = function() {
  apps.update({},  { $rename: { 'Name': 'name',
                                 'Email': 'email',
                                 'Class of': 'class',
                                 'Major': 'major',
                                 'Please provide a link to your GitHub account': 'github',
                                 'How did you hear about the event?': 'hearsay',
                                 'Team Code': 'teamCode',
                                 'What state will you be coming from?': 'state' } },
              {multi: true});
}
