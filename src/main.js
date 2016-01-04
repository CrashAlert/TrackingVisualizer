import express from 'express'
import path from 'path'
import { readStore, readCSV, storeCSV } from './csv-store'
import bodyParser from 'body-parser'
import { mapTransform } from './map-transform'


// Load app
var app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'static')))
app.use(bodyParser.text({ limit: '100mb' }))

// Store API
app.get('/store/:file', readCSV)
app.post('/store/:file', storeCSV)
app.get('/store', readStore)

// Map API
app.get('/map/:file', mapTransform)


// Start Server
console.log('Listening on port 4000...')
app.listen(4000)
