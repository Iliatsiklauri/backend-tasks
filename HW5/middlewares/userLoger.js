const userLoger = (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  console.log(userAgent);
  next();
};

module.exports = userLoger;
