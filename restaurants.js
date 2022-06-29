db.restaurants.find({}).pretty();
db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty();
db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}).pretty();
db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0}).pretty();
db.restaurants.find({borough: 'Bronx'}).pretty();
db.restaurants.find({borough: 'Bronx'}).limit(5).pretty();
db.restaurants.find({borough: 'Bronx'}).limit(5).skip(5).pretty();
db.restaurants.find({"grades.score":{$gt: 90}});
db.restaurants.find({"grades.score" : { $elemMatch: {$gt: 80, $lt: 100}}});
db.restaurants.find({"address.coord.0" : {$lt: -95.754168}});
db.restaurants.find({$and:[{cuisine : {$ne: 'American '}}, {"grades.score" : {$gt: 70}}, {"address.coord.0" : {$lt: -65.754168}}]});
db.restaurants.find({cuisine : {$ne: 'American '}, "grades.score" : {$gt: 70}, "address.coord.0" : {$lt: -65.754168}});
db.restaurants.find({$and:[{cuisine : {$ne: 'American '}}, {"grades.grade" : "A" }, {borough : {$ne: 'Brooklyn'} }]}).sort({cuisine: -1});
db.restaurants.find({name:{$regex : /^Wil/}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({name: {$regex : /ces$/}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({name: {$regex : /Reg/}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({$and: [{borough: 'Bronx'}, {cuisine: {$in : ['American ', 'Chinese']}}]});
db.restaurants.find({borough: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({borough: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({"grades.score": {$lt: 10}},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({$and : [{cuisine: 'Seafood'},{name: {$not: {$regex : /^Wil/}} }] },{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({grades: {$elemMatch :{grade: "A", score: {$eq: 11}, date: {$eq: {$date: 1407715200000}} }} },{restaurant_id: 1, name: 1, grades: 1, _id: 0});
db.restaurants.find({"grades.1": {$elemMatch : {grade: "A", score: {$eq: 9}, date: {$eq: {$date: 1407715200000}} }} },{restaurant_id: 1, name: 1, grades: 1, _id: 0});
db.restaurants.find({"address.coord.1": {$gt: 42, $lt: 52} },{restaurant_id: 1, name: 1, address: 1, coord: 1, _id: 0});
db.restaurants.find({}).sort({name: 1});
db.restaurants.find({}).sort({name: -1});
db.restaurants.find({}).sort({cuisine: 1},{borough: -1});
db.restaurants.find({"address.street": { $exists: true}});
db.restaurants.find({"address.coord": { $type: "double"}});
db.restaurants.find({"grades.score": {$mod: [7, 0]} },{restaurant_id: 1, name: 1, grades: 1, _id: 0});
db.restaurants.find({name : /mon/ },{name: 1, borough: 1, "address.coord": 1, cuisine: 1});
db.restaurants.find({name : /^Mad/ },{name: 1, borough: 1, "address.coord": 1, cuisine: 1}); 







