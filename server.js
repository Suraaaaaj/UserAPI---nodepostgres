const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

var corsOptions = {
    origin: 'http://localhost:4200'
}

// middleware
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routers
const router = require('./routes/user.routes.js')

app.use('/users', router);


// testing api
app.get('/',(req,res) => {
  res.write("<p>API is working...</p>");
  res.write("<p>http://localhost:8080/users/addUser - To add new user</p>" );
  res.write("<p>http://localhost:8080/users/allUsers - To get all users</p>");
  res.write("<p>http://localhost:8080/users/delete/id - To delete the user of particular id.</p>")
  res.write("<p>http://localhost:8080/users/id - To update the user info</p>");
  res.send();
});

// PORT
const PORT = process.env.PORT || 8080;


// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
