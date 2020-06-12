const router = require("express").Router();
const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.json({ message: "This is '/' route" });
});
router.post("/register", async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  let password = await bcrypt.hash(req.body.password, salt);
  req.body.password = password;

  let user = new User(req.body);
  user
    .save()
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.json({ error: "Email already exists!", err });
    });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((doc) => {
      if (!doc) {
        res.json({ error: "Account with this email is not registered" });
      } else {
        bcrypt.compare(req.body.password, doc.password, (err, isValidPass) => {
          if (!err) {
            if (isValidPass) {
              jwt.sign(
                { _id: doc._id, name: doc.name, email: doc.email },
                process.env.JWT_SECRET,
                { expiresIn: 60 * 60 },
                (err, token) => {
                  if (!err) res.json(token);
                  else res.json(err);
                }
              );
            } else {
              res.json({ error: "Incorrect credentials" });
            }
          } else {
            res.json("Error in bcrypt compare " + err);
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// ==================== Token Verification =========================

const verifyToken = require("./verifyToken");

//========================== Dashboard =============================
router.get("/dashboard", verifyToken, (req, res) => {
  if (req.payback) {
    res.json(req.payback);
  }
});

// =============== Adding form data to the current user =============

router.post("/provide/:id", verifyToken, (req, res) => {
  //res.json({ data: req.body });
  let data = {
    formData: {
      personal: req.body.personal,
      education: req.body.education,
      experience: req.body.experience,
      skills: req.body.skills,
      hobbies: req.body.hobbies,
    },
  };
  User.findByIdAndUpdate(req.params.id, data)
    .then((doc) => res.json(doc))
    .catch((err) => res.json(err));
});
//================ Get A single User Data===========================
router.get("/:id", verifyToken, (req, res) => {
  User.findById(req.params.id)
    .then((doc) => res.json(doc.formData))
    .catch((err) => res.json(err));
});
module.exports = router;
