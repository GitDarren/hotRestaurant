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

console.log(app)

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

// // Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function (req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
//     return res.json(false);
//   }
//   return res.json(characters);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/new", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;
//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
