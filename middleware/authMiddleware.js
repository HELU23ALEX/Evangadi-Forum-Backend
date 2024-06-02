const jwt = require("jsonwebtoken");


async function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ msg: "Authorization invalid" });
  }

  //The prefix is separated from the token by a space.
  //to split the actual JWT without the "Bearer" prefix.
  const token = authHeader.split(" ")[1];
  // console.log(authHeader)
  // console.log(token)
  try {
    const { username, userid } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { username, userid };
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authorization invalid" });
  }
};

module.exports = authMiddleware;
