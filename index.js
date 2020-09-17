const Datastore = require('nedb');
db = new Datastore({ filename: __dirname + '/example.db', autoload: true });

const doc = {
    name: 'Sekai',
    age: 18,
    today: new Date(),
    nedbIsAwesome: false,
    fruits: [ 'apple', 'orange', 'pear' ],
    infos: { name: 'nedb' }
};

// db.insert(doc, function (err, newDoc) {   // Callback is optional
//     // newDoc is the newly inserted document, including its _id
//     // newDoc has no key called notToBeSaved since its value was undefined
//     console.log(newDoc);
// });

db.find({}, function (err, docs) {
    for (const doc in docs) {
        console.log(docs[doc])
    }
});