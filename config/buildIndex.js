// @noflow
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const capitalize = require('capitalize');
const camelcase = require('camelcase');

const files = glob.sync('src/themes/icons/*.svg'); //TODO: Build icons from svg

const names = files.map(inputFileName => {
  const baseName = path
    .basename(inputFileName)
    .replace(/( \(custom\))?\.svg$/, '');
  const functionName = capitalize(camelcase(baseName));

  return {
    inputFileName,
    baseName,
    functionName,
  };
});

const icons = names
  .map(
    ({ functionName }) =>
      `export { default as ${functionName}Icon } from './components/icons/${functionName}';\n`
  )
  .join('');

const buildFile = fs.readFileSync(path.join('src', 'baseIndex.js'), 'utf8');

fs.writeFileSync(path.join('src', 'index.js'), buildFile.concat(icons));
