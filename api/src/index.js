const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 4000

// 'mongodb+srv://molina:molina@smartmoft.gnhe1.mongodb.net/<dbname>?retryWrites=true&w=majority'
// 'mongodb://root:root@localhost:27017/smartMoft?authSource=admin'
mongoose.connect('mongodb+srv://molina:molina@smartmoft.gnhe1.mongodb.net/smartMoft?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, 
    (err, client) =>{
        if(err) throw err
    }
)

app.use(express.json())
app.use(routes)
app.set('PORT', PORT)

module.exports = app