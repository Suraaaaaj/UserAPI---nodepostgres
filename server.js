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
app.get('/users',(req,res) => {
  res.send("Server is running");
});

// PORT
const PORT = process.env.PORT || 8080;


// server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
