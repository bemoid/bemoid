const fs = require('fs')
const glob = require('glob')

const postcss = require('postcss')
const syntax = require('postcss-scss');
const importer = require('postcss-partial-import')

const argv = require('yargs').argv

var schema = {}
var promises = []

function getVariableSchema(node) {
  return {
    variable: node.prop,
    value: node.value,
    name: node.prop.slice(1)
  }
}

function getComponentName(variable) {
  let module = variable.name.split('-')

  return module[0];
}

glob(argv.i, { dot: false }, function (err, files) {
  if (err) throw err;

  const sortingArr = [
    'functions',
    'mixins',
    'generic',
    'objects',
    'components',
    'utilities'
  ]

  files = files.sort(function(a, b){
    return sortingArr.indexOf(a.split('/')[1]) - sortingArr.indexOf(b.split('/')[1]);
  })

  for (let i = 0; i < files.length; i++) {
    let promise = new Promise((resolve, reject) => {
      fs.readFile(files[i], (err, scss) => {
        if (err) throw err;

        postcss([
          importer({
            path: 'scss',
            prefix: '_',
            extension: '.scss'
          })
        ])
        .process(scss, {
          from: argv.i,
          to: argv.o,
          parser: syntax
        })
        .then((result) => {
          result.root.walkDecls((node) => {
            let variable = getVariableSchema(node)
            let component = getComponentName(variable)

            if (typeof schema[component] === 'undefined') {
              schema[component] = []
            }

            schema[component].push(variable)
          })

          resolve()
        })
      })
    })

    promises.push(promise)
  }
})
  .on('end', () => {
    Promise.all(promises).then(() => {
      fs.writeFile(argv.o, JSON.stringify(schema, null, 2), (err) => {
        if (err) throw err;

        console.log(`[${argv.o} sucessfully generated]`)
      })
    })
  })
