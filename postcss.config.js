const autoprefixer = require('autoprefixer')
const linter = require('postcss-bem-linter')

module.exports = {
  plugins: [
    linter({
      componentSelectors: (block, options) => {
        const namespace = (options && options.namespace) ? options.namespace + '-' : '';
        const word = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
        const element = '(?:__' + word + ')?';
        const modifier = '(?:--' + word + '){0,2}';
        const attribute = '(?:\\[.+\\])?';

        return new RegExp('^\\.' + namespace + block + element + modifier + attribute + '$');
      }
    }),
    autoprefixer
  ]
}