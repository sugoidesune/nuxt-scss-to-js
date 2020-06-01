import scssJson from 'scss-to-json'
const { resolve } = require('path')
// next version maybe use @leipert/sass-export for more customization of scss

const defaults = {
  path: '~/assets/scss/variables.scss',
  namespace: 'scss',
  generate: false,
  inject: true
}

const remove$ = object => Object.entries(object).reduce((acc,entry) => {
  acc[entry[0].substr(1)] = entry[1]
  return acc
},{})

module.exports = async function (moduleOptions) {
  const config = {
    ...this.options['nuxtScssToJs'],
    ...moduleOptions
  }
  const options = Object.assign(defaults, config)

  // add scss file to watch property to rebuild modules on change.
  // otherwise only loads scss on inital build.
  this.options.watch.push(options.path)

  var resolvedPath = this.nuxt.resolver.resolveAlias(options.path)
  var filePath = resolve(__dirname, resolvedPath);
  var variables = remove$(scssJson(filePath))

  if (options.generate) {
    // TODO. When .scss changes .js gets updated automatically. but vue doesn't rerender changes. page refresh necessary
    const generate_path = resolvedPath.replace(/[^\\\/]+\.scss/gi, `${options.namespace}.js`)
    this.addTemplate({
      src: resolve(__dirname, 'scss.js'),
      fileName: generate_path,
      options: {
        ...variables
      }
    });
  }

  if (options.inject) {
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
}

module.exports.meta = require('../package.json')
