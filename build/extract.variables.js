const fs = require('fs')
const glob = require('glob-fs')({ gitignore: true })

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

glob.readdirStream(argv.i)
  .on('data', (file) => {
    let promise = new Promise((resolve, reject) => {
      fs.readFile(file.path, (err, scss) => {
        if (err) { reject(error) }

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
  })
  .on('end', () => {
    Promise.all(promises).then(() => {
      fs.writeFile(argv.o, JSON.stringify(schema, null, 2), (err) => {
        if (err) throw err;

        console.log(`[${argv.o} sucessfully generated]`)
      })
    })
  })

