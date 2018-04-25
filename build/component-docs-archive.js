const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')
const glob = require('glob-promise')

const util = require('util')

let cedarDataObj
const componentsProm = globSearch('src/components/**/build/component-data.json', "components")

const compositionProm = globSearch('src/compositions/**/build/component-data.json', "compositions")

Promise.all([componentsProm, compositionProm])
.then( values => {
  const [componentObjs, compositionObjs] = values
  cedarDataObj = {"components": [...componentObjs], "compositions": [...compositionObjs]}
  console.log(`cedar data object:\n${util.inspect(cedarDataObj, {depth: null, colors: true})}`)
  // return fs.outputJSON(path.join(__dirname,'..','src'))
})
.catch(globErr)

/**
 * Error handling function for glob search of Cedar components|compositions
 * @param {Object} err -- Error passed by `promise-glob` function
 */
function globErr(err) {
  console.log(`Error archiving component or composition:\n${err}`)
  process.exit(1)
}

/**
 * Search for data objects associated with each Cedar component|composition
 * @param {String} searchRegex -- Regex used to search for component|composition data objects
 * @returns {Promise} -- Promisified version of glob search
 */
function globSearch(searchRegex) {
  const search = path.join(__dirname, '..', `${searchRegex}`)
  return glob(`${search}`, {ignore: ['**/node_modules/**']})
  .then(files => {
    return new Promise((resolve, reject) => {
      resolve(archiveComps(files))
    })
  })
  .catch(globErr)
}

/**
 * Collect the data objects representing each Cedar component|composition
 * @param {Array} compFiles -- File paths of the JSON data object for each Cedar component
 * @returns {Array} -- Array of JSON data objects for all Cedar componnents|compositions
 */
function archiveComps(compFiles) {
  let compObjCollection = []
  compFiles.forEach(file => {
    let compObj = require(`${file}`)
    if (compObj !== null) {
      compObjCollection.push(compObj)
    }
  })

  return compObjCollection
}