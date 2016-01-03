import express from 'express'
import index from './index'
import page from './page'
import { readStore, readCSV } from './csv-store'
import { mapTransform } from './map-transform'
import Promis from 'bluebird'

// Configure Error Handling
// Promise.onPossiblyUnhandledRejection(function(error){
//     throw error
// })

var app = express();
app.get('/', index);

app.get('/store/:file', readCSV)
app.get('/store', readStore)
app.get('/map/:file', mapTransform)

app.get('/page', page)

console.log('Listening on port 4000...')
app.listen(4000)
