const CosmosClient = require('@azure/cosmos').CosmosClient
const config = require('./config')
 

const express = require('express')
const path = require('path')
// const logger = require('morgan')
const cookieParser = require('cookie-parser') 
const bodyParser = require('body-parser')
const EmployeeList = require('./routes/employeeController')
const TeamList = require('./routes/teamController')

const Client = require('./models/Client')

const app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'))
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'jade')
// app.set('view engine', 'html')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

 //Todo App:
const cosmosClient = new CosmosClient({
  endpoint: config.endpoint,
  key: config.key
})
const client = new Client(cosmosClient, config.databaseId, config.containerId)
const employeeList = new EmployeeList(client)
const teamList = new TeamList(client)
client
  .init(err => {
    console.error(err)
  })
  .catch(err => {
    console.error(err)
    console.error(
      'Shutting down because there was an error settinig up the database.'
    )
    process.exit(1)
  })

//  app.get('/', (req, res, next) => employeeList.showTasks(req, res).catch(next))
 app.get('/', (req, res, next) => teamList.showTeams(req, res))


 // catch 404 and forward to error handler
 app.use(function(req, res, next) {
   const err = new Error('Not Found')
   err.status = 404
   next(err)
 })

 // error handler
 app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message
   res.locals.error = req.app.get('env') === 'development' ? err : {}

   // render the error page
   res.status(err.status || 500)
  //  res.render('error')
 })

 module.exports = app