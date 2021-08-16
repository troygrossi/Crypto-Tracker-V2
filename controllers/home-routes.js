const router = require("express").Router();
const test = { test: "test" };
router.get("/", (req, res) => {
  res.render("home", { test });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/signup", (req, res)=>{
  res.json({msg: "welcome to the signup"})
});

module.exports = router;
