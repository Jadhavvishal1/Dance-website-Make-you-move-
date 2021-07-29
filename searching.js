// searching for data in monngo
use vishaljio


// this will give you all the objects with rating equals to
db.items.find({rating:{$gte:3.5}},{rating:1,qty:1})
db.items.find({rating:{$gte:3.7},price:{$gte:22000}})
db.items.delete({ $or:[{rating:{$gte:5}},{price:{$gte:100000}}]})
    