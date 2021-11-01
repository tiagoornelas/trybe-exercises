const readFile = require('../readFile');
const { assert, expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

describe('Reads a file', () => {

  describe('Succesfuly read a file', () => {
    before(() => {
      sinon.stub(fs.promises, 'readFile').resolves('file content');
    });
    after(() => {
      fs.promises.readFile.restore();
    });

    describe('The output is', () => {
      it('a string', async () => {
        const result = await readFile('teste.txt');
        expect(result).to.be.a('string');
      });
      it('equals the file content', async () => {
        const result = await readFile('teste.txt');
        expect(result).to.be.equal('file content');
      });
    });
  });

  describe('Failed to read the file', () => {
    before(() => {
      sinon.stub(fs, 'readFile').rejects('Could not read the file');
    });
    after(() => {
      fs.readFile.restore();
    })

    describe('The output is', () => {
      it('null', async () => {
        const result = await readFile('teste.txt');
        expect(result).to.be.null;
      });
    });
  });
});
