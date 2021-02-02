const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

require('dotenv/config')

const app = express()
const PORT = process.env.PORT

// 'mongodb+srv://molina:molina@smartmoft.gnhe1.mongodb.net/<dbname>?retryWrites=true&w=majority'
// 'mongodb://root:root@localhost:27017/smartMoft?authSource=admin'
mongoose.connect(process.env.MONGOURL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, 
    (err, client) =>{
        if(err) throw err
    }
)

app.use(cors())
app.use(express.json())
app.use(routes)
app.set('PORT', PORT)

module.exports = app