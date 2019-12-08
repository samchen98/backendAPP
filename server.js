const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.bcrypt = bcrypt;

app.use(cors());
app.use(bodyParser.json());

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',


const dbRoute = "mongodb+srv://sam:samchen1131@cluster0-xwslr.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbRoute, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');


app.use('/users', usersRouter);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);



module.exports = app ;
