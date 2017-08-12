const fs = require('fs')

const postcss = require('postcss')
const syntax = require('postcss-scss')

const argv = require('yargs').argv

function normalizeOutput(string) {
  return string.replace(/'/ig, '')
}

function getComponentName(rule) {
  let module = rule.params.split('/')

  return normalizeOutput(module[0])
}

function getImportPath(rule) {
  return normalizeOutput(rule.params)
}

fs.readFile(argv.i, (err, scss) => {
  if (err) throw err;

  postcss()
    .process(scss, { parser: syntax })
    .then((result) => {
      let schema = {}

      result.root.walkAtRules((rule) => {
        if (rule.name === 'import') {
          let importPath = getImportPath(rule)
          let component = getComponentName(rule)

          if (typeof schema[component] === 'undefined') {
            schema[component] = []
          }

          schema[component].push(importPath)
        }
      })

      fs.writeFile(argv.o, JSON.stringify(schema, null, 2), (err) => {
        if (err) throw err;

        console.log(`[${argv.o} sucessfully generated]`)
      })
    })
})