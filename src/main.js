import express from 'express'
import path from 'path'
import { readStore, readCSV } from './csv-store'
import { mapTransform } from './map-transform'


// Load app
var app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'static')))

// Store API
app.get('/store/:file', readCSV)
app.get('/store', readStore)

// Map API
app.get('/map/:file', mapTransform)


// Start Server
console.log('Listening on port 4000...')
app.listen(4000)
