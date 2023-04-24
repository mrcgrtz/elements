/** @type {Record<string, string | string[] | Promise<string | string[]>} */
export default {
  '*.?({c,m}){j,t}s?(x)': ['prettier --write', 'xo --fix'],
  '*.{j,t}sx': ['prettier --write', 'stylelint --fix'],
  './src/*/*.(j|t)sx': ['npm test'],
  '*.(html|json|md?(x)|y?(a)ml)': 'prettier --write',
};
