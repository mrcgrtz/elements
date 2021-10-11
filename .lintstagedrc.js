module.exports = {
  '*.(j|t)sx': [
    'eslint',
    'stylelint',
  ],
  '*.(j|t)s': 'eslint',
  './src/*/*.(j|t)sx': [
    'npm test',
  ],
};
