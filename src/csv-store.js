import fs from 'fs'
import path from 'path'
import Promise from 'bluebird'
import { map, filter } from 'transducers.js'
import Papa from 'papaparse'


// Store Management

const storeDir = path.resolve(__dirname, '..', 'data')
const EXTENSIONS = ['csv']

function trimExtensions(filenames) {
  return map(filenames, (name) => {
    return name.split('.')[0]
  })
}

function whiteListExtensions(files, extensions) {
  return filter(files, (file) => {
    const splits = file.split('.')
    const extension = splits[splits.length - 1]

    return extensions.indexOf(extension) !== -1
  })
}

function readFiles() {
  return new Promise((resolve, reject)  => {
    fs.readdir(storeDir, (err, files) => {
      if (err) {
        reject(err)
      }

      const allowedFiles = whiteListExtensions(files, EXTENSIONS)
      resolve(trimExtensions(allowedFiles))
    })
  })
}


export function readFile(file) {
  return new Promise((resolve, reject) => {
    const filename = path.join(storeDir, file)
    fs.readFile(filename, { encoding: 'utf8' }, (err, contents) => {
      if (err) {
        reject(err)
      }

      resolve(contents)
    })
  })
}

function validateCSV(csvstring) {
  const parseConfig = {
    header: true,
    skipEmptyLines: true
  }

  const result = Papa.parse(csvstring, parseConfig)
  return result.errors.length == 0
}

function writeFile(filename, file) {
  return new Promise((resolve, reject) => {
    const name = path.join(storeDir, filename + '.csv')
    console.log(name)


    fs.writeFile(name, file, { encoding: 'utf8' }, (err) => {
      if (err) {
        reject(err)
      }

      resolve(filename)
    })
  })
}


//
// API
//

export function readStore(req, res, next) {
  readFiles()
    .then((files) => res.send(files))
    .catch((err) => next(err))
}

/*
 * Requires a text/* content type and a valid body-parser
 */
export function storeCSV(req, res, next) {
  if (!req.body || Object.keys(req.body).length == 0) {
    throw new Error('Upload data is not available')
  }


  if (!validateCSV(req.body)) {
    throw new Error('Invalid CSV posted')
  }

  writeFile(req.params.file, req.body)
    .then(() => res.end())
}

/*
 * Requires file param
 */
export function readCSV(req, res, next) {
  const filename = req.params.file + '.csv'
  readFile(filename)
    .then((file) => res.send(file))
    .catch((err) => next(err))
}
