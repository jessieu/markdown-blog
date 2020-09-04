const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// connection url
const MONGODB_URI = 'mongodb://localhost:27017';
const dbName = 'BlogServer';

var db;

function connect(callback){
    MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
        assert.equal(null, err);
        db = client.db(dbName);
        callback();
    });
}
function get(){
    return db;
}

function close(){
    db.close();
}

module.exports = {
    connect,
    get,
    close
};
