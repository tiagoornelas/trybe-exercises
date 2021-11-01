const SECRET = "gotaDeLimao";

const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || authorization !== SECRET) {
      return res.status(401).end();
    }
    next();
  } catch(err) {
    next(err);
  }
};

module.exports = auth;
