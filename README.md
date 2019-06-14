#Backend for rackBuilder 





setup:
```bash
npm init
touch server.js
npm install express --save
```
edit server.js to require express and listen on a port. listen is provided by express
```javascript
const express = require('express');
const app = express();

app.listen(3001, function() {
  console.log('listening on 3001')
})
```


Old format:
```javascript
app.get('/', function(req, res){
	res.send('Hello World')
})

```


ES6 (new js update) format:
```javascript
app.get('/', (req, res) => {
	res.send('Hello World')
})
```

send file is a part of the 'res' object. This is express handling a GET Request (READ operation).
```javascript
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

```

Installing nodemon to restart the server after the file is saved. we’re using a --save-dev flag here is because we’re only using Nodemon when we’re developing. This flag would save Nodemon as a devDependency in your package.json file.
```bash
npm install nodemon --save-dev
```

added below to package.json so I can run `npm run dev` from the command line to start the refreshing server instead of running `nodemon server.js` from the node_modules folder because it isn't installed globally
```JSON
"scripts": {
    "dev": "nodemon server.js"
  }
```

Now the create method. CREATE is performed by browser if a post request is sent to the server. This is made with javascript or an html `<form>` element. Form must have an action, a methos, and name attributes.
- action: tells the browser where to navigate to in our Express app (in this case quotes)
- method: tells the browser what request to send. (POST request)

on our server we can handle POST reuqests with a `post` method provided by Express.


```html
<form action="/quotes" method="POST">
  <input type="text" placeholder="name" name="name">
  <input type="text" placeholder="quote" name="quote">
  <button type="submit">Submit</button>
</form>
```
```javascript
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
```

Express can't handle reading data from the form element on it's own so we add the body-parser
```bash
npm install body-parser --save
```

we can use the body parser with the express `use` function. the `urlencoded` method tells the body-parser to extract data from the `<form>` element and adds them to the body property in the `request` object.
```javascript
app.use(bodyParser.urlencoded({extended: true}))
````

Installing MongoDB
```bash
npm install mongodb --save
```

```javascript
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
  // ... start the server
})
```



```javascript


```

