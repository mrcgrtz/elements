/** @type {Record<string, string | string[] | Promise<string | string[]>} */
export default {
  '*.?({c,m}){j,t}s?(x)': [
    'eslint',
  ],
  '*.{j,t}sx': [
    'stylelint',
  ],
  './src/*/*.(j|t)sx': [
    'npm test',
  ],
};
