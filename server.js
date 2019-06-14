const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
var db;

app.use(bodyParser.urlencoded({extended: true}))

//console.log('Node and server is working!')

MongoClient.connect('mongodb+srv://admin2:stinkydif@myfirstapi-voqb6.mongodb.net/test?retryWrites=true&w=majority', (err, database) => {
	if (err) return console.log(err)
	db = client.db('myFirstApi')
	app.listen(3001, () => {
		console.log('listening on 3001')
	})
})


/* Listening on server
app.listen(3001, function() {
  console.log('listening on 3001')
})
*/


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})



app.post('/quotes', (req, res) => {
  console.log(req.body)
})



/*app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})*/