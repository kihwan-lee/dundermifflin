const db = require("../models");

// RETURN ALL SALES
const index = (req, res) => {
  db.Sale.find({})
    .then((foundSales) => {
      res.json({sales: foundSales });
    })
    .catch((err) => {
      console.log('Error in sales.index:', err);
      res.json({ Error: 'Unable to get your data' });
    });
};

// SHOW A SALE BY ID
const show = (req, res) => {
  db.Sale.findById(req.params.id)
    .then((foundSale) => {
      res.json({sale: foundSale });
    })
    .catch((err) => {
      console.log('Error in sales.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

// CREATE A NEW SALE IN DB
const create = (req, res) => {
  db.Sale.create(req.body)
    .then((newSale) => {
      db.User.findById(req.body.user, (err, foundUser) => {
        if (err) return console.log(err);
  
        foundUser.sales.push(newSale._id);
        foundUser.save((err, savedUser) => {
          if (err) return console.log(err);
        });
      })
    .catch((err) => {
      res.json({Error: 'Unable to get data'});
    });
  });
};

// UPDATE A SALE BY ID
const update = (req, res) => {
  db.Sale.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedSale) => {
      if (err) console.log("Error in sales#update:", err);

      res.send("Incomplete sales#update controller function");
    }
  );
};

// REMOVE A SALE BY ID
const destroy = (req, res) => {
  db.Sale.findByIdAndDelete(req.params.id, (err, deletedSale) => {
    if (err) console.log("Error in sales#destroy:", err);

    res.send("Incomplete sales#destroy controller function");
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
