const fs = require('fs');

const readFile = async (filename) => {
  try {
    const data = await fs.promises.readFile(filename);
    return data.toString();
  } catch(err) {
    return null;
  }
}

module.exports = readFile;