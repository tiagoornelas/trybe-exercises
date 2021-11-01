const create = (req, res, next) => {
  console.log(req.body);
  return res.status(201).send({
    result: "Created succesfully",
    body: req.body,
  })
};

module.exports = create;
