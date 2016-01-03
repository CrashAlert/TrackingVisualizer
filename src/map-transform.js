import Papa from 'papaparse'
import { readFile } from './csv-store'
import { map, filter } from 'transducers.js'
import _ from 'lodash'


// Read CSV File and transform coordinates

const mapColumns = ['lat', 'lng']
const parseConfig = {
  header: true,
  skipEmptyLines: true
}


function CSVtoJSON(csvstring) {
  const csv = Papa.parse(csvstring, parseConfig)

  if (csv.errors.length > 0) {
    console.error(csv.errors)
    throw new Error('Errors while parsing')
  }

  return csv.data
}


function getColumns(csv, columns) {
  return map(csv, (row) => {
    return filter(row, (column) => {
      const header = column[0]

      return columns.indexOf(header) !== -1
    })
  })
}


function filterEmptyRows(csv) {
  return filter(csv, (row) => {
    return _.any(row, (value) => value.length > 0)
  })
}


function parseFloatRows(csv) {
  return map(csv, (row) => {
    return _.mapValues(row, parseFloat)
  })
}


// API

/*
 * Require file param
 */
export function mapTransform(req, res, next) {
  const filename = req.params.file + '.csv'
  readFile(filename)
    .then(CSVtoJSON)
    .then((csv) => getColumns(csv, mapColumns))
    .then(filterEmptyRows)
    .then(parseFloatRows)
    .then((data) => res.send(data))
    .catch((err) => next(err))
}
