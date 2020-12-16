const db = require("./models");
const data = require("./users.json");
// const data = require("./branches.json");


// db.Branch.deleteMany({}, (err, deletedBranches) => {
//   db.Branch.create(data.branches, (err, seededBranches) => {
//     if (err) console.log(err);

//     console.log(data.branches.length, "branches created successfully");

//     process.exit();
//   });
// });

db.User.deleteMany({}, (err, deletedUsers) => {
  db.User.create(data.users, (err, seededUsers) => {
    if (err) console.log(err);

    console.log(data.users.length, "users created successfully");

    process.exit();
  });
});