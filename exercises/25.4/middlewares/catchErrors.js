const catchError = (err, req, res, next) => {
  return res.status(500).send({ error: err.message });
};

module.exports = catchError;