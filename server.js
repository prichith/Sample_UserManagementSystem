

const express =  require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')  //for set path of ejs files

const connectDB = require('./server/database/connection')

const app = express()

dotenv.config({path:'config.env'})

// log requests
app.use(morgan('tiny'))

// mongodb connection
connectDB()

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine","ejs") 
// app.set("views",path.resolve(__dirname))      If we have the ejs files inside a folder inside the view folder. then use this code.

// load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
// "/css/style.css"   .if we have to access a css file "style.css" .we should write like this.dont't need to specify all folders.

const PORT = process.env.PORT || 8080

// load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`);})

