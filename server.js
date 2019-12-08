const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;
const bcrypt = require('bcrypt');
const saltRounds = 10;
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
module.exports.bcrypt = bcrypt;

app.use(cors());
app.use(bodyParser.json());
const dbRoute = "mongodb+srv://sam:samchen1131@cluster0-xwslr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbRoute, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');


app.use('/users', usersRouter);

app.listen(8080)

