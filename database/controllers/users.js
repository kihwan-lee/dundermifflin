const db = require("../models");

// RETURN ALL EMPLOYEES
const index = (req, res) => {
  db.User.find({})
    .then((foundUsers) => {
      res.json({ users: foundUsers });
    })
    .catch((err) => {
      console.log('Error in users.index:', err);
      res.json({ Error: 'Unable to get your data' });
    });
};

// CREATE A NEW EMPLOYEE IN DB
const create = (req, res) => {
  db.User.create(req.body)
    .then((savedUser) => {
      res.status(201).json({ user: savedUser });
    })
    .catch((err) => {
      console.log('Error in users.create:', err);
      res.json({ Error: 'Unable to get data' });
    });
};

// UPDATE EMPLOYEE BY ITS ID
const update = (req, res) => {
  console.log(req.body)
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      if (err) console.log("Error in users#update:", err);

      res.json({ user: updatedUser });
    }
  );
};

// REMOVE AN EMPLOYEE BY ITS ID
const destroy = (req, res) => {
  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if (err) console.log("Error in users#destroy:", err);

    res.json({ user: deletedUser });
  });
};

module.exports = {
  index,
  create,
  update,
  destroy,
};