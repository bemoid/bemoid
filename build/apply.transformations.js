const fs = require('fs')
const argv = require('yargs').argv
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

fs.readFile(argv.i, (err, css) => {
    postcss([
      autoprefixer
    ])
    .process(css, { from: argv.i, to: argv.o })
    .then((result) => {
        fs.writeFile(argv.o, result.css, (err) => {
          if (err) throw err;

          console.log(`[${argv.o} sucessfully transformed]`)
        })
    })
})