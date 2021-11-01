const fs = require('fs');

const getNames = async (req, res, next) => {
  try {
    const { letter } = req.query;
    const data = await fs.promises.readFile("names.txt");
    const names = data.toString().split('\n');
    
    return res.status(200).send({
      names: names.filter(name => !letter || name[0].toLowerCase() === letter.toLowerCase()),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getNames;