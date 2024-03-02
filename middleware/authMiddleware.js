const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access " });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    next();

    // if(!isUserValid) {
    //     return res.status(401).json({ message: "Unathorized access" });
    // }

    // next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
