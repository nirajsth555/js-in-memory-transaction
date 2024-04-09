const database = require("./in-memory-transaction");

const db = new database();

//case 1
// db.beginTransaction();
// db.set("Name", "Niraj");
// db.set("Name", "Sanish");
// db.commitTransaction();
// console.log(db.get("Name"));

//case 2
// db.set("Name", "Niraj");

//case 3
// db.beginTransaction();
// db.set("Name", "Niraj");
// db.set("Surname", "Shrestha");
// console.log(db.count());
// db.commitTransaction();
// console.log(db.count());

//case 4
// db.commitTransaction();

//case 5
// db.beginTransaction();
// db.set("Name", "Niraj");
// db.commitTransaction();
// db.beginTransaction();
// db.set("Name", "Sanish");
// db.rollbackTransaction();
// console.log(db.get("Name"));
// console.log(db.count());
