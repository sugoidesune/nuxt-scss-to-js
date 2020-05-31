import scssJson from 'scss-to-json'
const { resolve } = require('path')
// next version maybe use @leipert/sass-export for more customization of theme object

const defaults = {
  path: '~/assets/scss/variables.scss',
  namespace: 'scss'
}

const remove$ = object => Object.entries(object).reduce((acc,entry) => {
  acc[entry[0].substr(1)] = entry[1]
  return acc
},{})

module.exports = async function (moduleOptions) {
  const config = {
    ...this.options['nuxt-scss-to-js'],
    ...moduleOptions
  }

  const options = Object.assign(defaults, config)

  var resolvedPath = this.nuxt.resolver.resolveAlias(options.path)
  var filePath = resolve(__dirname, resolvedPath);
  var variables = remove$(scssJson(filePath))

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-scss-to-js.js',
    options: {
      namespace: options.namespace,
      theme: variables,
      options
    }
  })
}

module.exports.meta = require('../package.json')
