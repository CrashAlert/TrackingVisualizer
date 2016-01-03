import fs from 'fs'
import path from 'path'
import Promise from 'bluebird'
import { map } from 'transducers.js'


// Store Management

const storeDir = path.resolve(__dirname, '..', 'data')


function trimExtensions(filenames) {
  return map(filenames, (name) => {
    return name.split('.')[0]
  })
}


function readFiles() {
  return new Promise((resolve, reject)  => {
    fs.readdir(storeDir, (err, files) => {
      if (err) {
        reject(err)
      }

      resolve(trimExtensions(files))
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





// API

export function readStore(req, res, next) {
  readFiles()
    .then((files) => res.send(files))
    .catch((err) => next(err))
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
