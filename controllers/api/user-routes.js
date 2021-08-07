const router = require("express").Router();
const { User } = require("../../models");

//get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: ["id", "username"],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one user
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: ["id", "username"],
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
      } else {
        res.json(dbUserData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a user
router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
      } else {
        res.json(dbUserData);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
