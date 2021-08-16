const router = require("express").Router();
const test = { test: "test" };

router.get("/", (req, res) => {
  const loggedIn = req.session.loggedIn;
  const userId = req.session.user_id;
  console.log(loggedIn);
  res.render("home", { loggedIn, userId });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/profile", (req, res) => {
  const userId = req.session.user_id;
  res.render(`profile`, { userId });
});

router.get("/signup", (req, res) => {
  res.json({ msg: "welcome to the signup" });
});

module.exports = router;
