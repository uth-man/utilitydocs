const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    const decode = req.headers.authorization.split(" ")[1];
    req.token = decode;

    jwt.verify(req.token, process.env.JWT_SECRET, (err, data) => {
      if (!err) {
        req.payback = data;
        next();
      } else {
        return res.json({ error: "Unauthorized User!" });
      }
    });
    //  next();
  } catch (error) {
    console.log(error);

    res.json({ error: error });
  }
};
