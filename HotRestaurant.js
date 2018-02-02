// Dependencies
// =============================================================
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000

var numberofTables = 5

var reserveSuccess = JSON.stringify('Reservation')
var reserveFailure = JSON.stringify('Waitlist')

var reservationList = [
  {
    name: 'Test',
    phoneNumber: '123-456-7890',
    email: 'test@test.com',
    uniqueID: 'ABC123'
  }
]

var waitList = [
  {
    name: 'Test',
    phoneNumber: '123-456-7890',
    email: 'test@test.com',
    uniqueID: 'ABC123'
  }
]
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/table', function (req, res) {
  res.sendFile(path.join(__dirname, 'table.html'))
})

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'))
})

app.get('/api/tables', function (req, res) {
  res.json(reservationList)
})

app.get('/api/waitlist', function (req, res) {
  res.json(waitList)
})

app.post("/api/new", function (req, res) {
  var newReservation = req.body;

  console.log(newReservation)
  console.log('Occupied tables = ' + (reservationList.length))
  console.log('Waitlist tables = ' + (waitList.length))

  if (reservationList.length < numberofTables ) {
    reservationList.push(newReservation)
    res.json(reserveSuccess)

    for (let index = 0; index < reservationList.length; index++) {
      console.log('reservation List' + [index] + ': ' + reservationList[index].name + reservationList[index].uniqueID)
    }

    for (let index = 0; index < waitList.length; index++) {
      console.log('wait List' + [index] + ': ' + waitList[index].name + waitList[index].uniqueID)
    }

  } else {
    waitList.push(newReservation)
    res.json(reserveFailure)
    for (let index = 0; index < reservationList.length; index++) {
      console.log('reservation List' + [index] + ': ' + reservationList[index].name + reservationList[index].uniqueID)
    }
    for (let index = 0; index < waitList.length; index++) {
      console.log('wait List' + [index] + ': ' + waitList[index].name + waitList[index].uniqueID)
    }
  }
})

app.post("/table#", function (req, res) {
  reservationList = []
  waitList = []
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
