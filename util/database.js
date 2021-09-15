const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;


const mongoConnect = (callback) => {

  mongoClient.connect(`mongodb+srv://k0hei:8223914227@cluster0.lodud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

`).then(data => {
    console.log('Connected');
    _db = data.db();
    callback(data)

  }).catch(err => {
    console.log(err)
  })
}



const getDb = () => {
  if (_db) {
    return _db;
  }
  else {
    console.log('no database')
  }
}


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;