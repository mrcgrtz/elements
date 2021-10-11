module.exports = {
  '*.(j|t)sx': [
    'eslint',
    'stylelint',
    'npm test',
  ],
  '*.(j|t)s': 'eslint',
};
