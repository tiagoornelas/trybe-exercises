const router = require('express').Router();

router.get('/', (req, res) => {
  return res.status(200).send({ message: 'API running smoothly' });
})

module.exports = router;