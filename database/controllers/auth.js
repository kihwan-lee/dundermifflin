const db = require("../models");


const auth = (req, res) => {
  db.User.findOne({email: req.body.email, password: req.body.password})
    .then((foundUser) => {
      res.json({user: foundUser });
    })
    .catch((err) => {
      console.log('Error in users.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

module.exports = {
  auth
}