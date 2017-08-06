const fs = require('fs')

const postcss = require('postcss')
const syntax = require('postcss-scss');
const importer = require('postcss-partial-import')

const argv = require('yargs').argv

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

fs.readFile(argv.i, (err, scss) => {
  if (err) throw err;

  postcss([
    importer({
      path: 'scss',
      prefix: '_',
      extension: '.scss'
    })
  ])
  .process(scss, { parser: syntax })
  .then((result) => {
    let schema = {}

    result.root.walkDecls((node) => {
      let variable = getVariableSchema(node)
      let component = getComponentName(variable)

      if (typeof schema[component] === 'undefined') {
        schema[component] = []
      }

      schema[component].push(variable)
    })

    fs.writeFile(argv.o, JSON.stringify(schema, null, 2), (err) => {
      if (err) throw err;
    })
  })
})